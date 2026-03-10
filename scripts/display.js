(function () {
  const cfg = window.APP_CONFIG || {};
  const q = (id) => document.getElementById(id);

  q('boothTitle').textContent = cfg.boothTitle || 'Scan to Try the Demo';
  q('boothSubtitle').textContent = cfg.boothSubtitle || 'Use your phone to open the demo.';
  q('helperLine').textContent = cfg.helperLine || 'Say a short Cebuano sentence after scanning.';
  q('projectNameFooter').textContent = cfg.projectName || 'Cebuano AI Speech-to-Text Demo';
  q('footerNote').textContent = cfg.footerNote || '';
  q('stableUrlLarge').textContent = cfg.stableUrl || 'Set stableUrl in settings.js';

  const qrImage = q('qrImage');
  if (qrImage && cfg.qrImagePath) {
    qrImage.src = `${cfg.qrImagePath}?v=${encodeURIComponent(cfg.lastUpdated || Date.now())}`;
  }

  const sampleList = q('sampleList');
  (cfg.samplePhrases || []).forEach((phrase) => {
    const li = document.createElement('li');
    li.textContent = phrase;
    sampleList.appendChild(li);
  });

  document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if (key === 'r') {
      window.location.reload();
    }
  });
})();
