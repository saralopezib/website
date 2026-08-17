// Client-side password gate. Decrypts the page's protected content in the
// browser using AES-256-GCM with a key derived (PBKDF2) from the entered
// password — nothing readable ships in the page source until the correct
// password is supplied. Not a substitute for real server-side auth (a
// determined visitor could still brute-force the password offline), but the
// content itself is not exposed to casual viewing or search engines.
//
// Expects, on the page:
//   <script type="application/json" id="gate-data">{iterations,salt,iv,ciphertext}</script>
//   <div id="gate-lock">…password form, must contain a <form> and an
//     element with [data-gate-error] for the error message…</div>
//   <div id="gate-content" hidden>…placeholder, replaced with the
//     decrypted HTML on success…</div>
//
// Regenerate the ciphertext with encrypt-gate.py whenever the protected
// content changes — see that script for usage.

(function () {
  const dataEl = document.getElementById('gate-data');
  const lockEl = document.getElementById('gate-lock');
  const contentEl = document.getElementById('gate-content');
  if (!dataEl || !lockEl || !contentEl) return;

  const payload = JSON.parse(dataEl.textContent);
  const sessionKeyName = 'gate-key:' + location.pathname;

  const b64ToBytes = (b64) => Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
  const bytesToB64 = (bytes) => btoa(String.fromCharCode(...new Uint8Array(bytes)));

  async function deriveKey(password) {
    const passBytes = new TextEncoder().encode(password);
    const material = await crypto.subtle.importKey('raw', passBytes, 'PBKDF2', false, ['deriveKey']);
    return crypto.subtle.deriveKey(
      { name: 'PBKDF2', salt: b64ToBytes(payload.salt), iterations: payload.iterations, hash: 'SHA-256' },
      material,
      { name: 'AES-GCM', length: 256 },
      true,
      ['decrypt']
    );
  }

  async function unlockWithKey(key) {
    const plain = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv: b64ToBytes(payload.iv) },
      key,
      b64ToBytes(payload.ciphertext)
    );
    contentEl.innerHTML = new TextDecoder().decode(plain);
    contentEl.hidden = false;
    lockEl.hidden = true;
  }

  // Reuse a previously-verified key for this tab session, so reloading
  // doesn't ask again (but a new browser session does).
  const savedKey = sessionStorage.getItem(sessionKeyName);
  if (savedKey) {
    crypto.subtle
      .importKey('raw', b64ToBytes(savedKey), 'AES-GCM', true, ['decrypt'])
      .then(unlockWithKey)
      .catch(() => sessionStorage.removeItem(sessionKeyName));
  }

  const form = lockEl.querySelector('form');
  const input = lockEl.querySelector('input[type="password"]');
  const errorEl = lockEl.querySelector('[data-gate-error]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (errorEl) errorEl.hidden = true;
    try {
      const key = await deriveKey(input.value);
      await unlockWithKey(key);
      const raw = await crypto.subtle.exportKey('raw', key);
      sessionStorage.setItem(sessionKeyName, bytesToB64(raw));
    } catch (err) {
      if (errorEl) errorEl.hidden = false;
      input.select();
    }
  });
})();
