(function () {
  const cfg = window.APP_CONFIG || {};
  const projectName = document.getElementById('projectName');
  const stableUrl = document.getElementById('stableUrl');
  const destinationUrl = document.getElementById('destinationUrl');
  const openNowBtn = document.getElementById('openNowBtn');
  const countdownText = document.getElementById('countdownText');
  const redirectMessage = document.getElementById('redirectMessage');

  const stable = cfg.stableUrl || window.location.href;
  const destination = cfg.destinationUrl || '#';
  const delaySeconds = Number(cfg.autoRedirectSeconds || 1);

  if (projectName) projectName.textContent = cfg.projectName || 'Opening demo…';
  if (stableUrl) stableUrl.textContent = stable;
  if (destinationUrl) destinationUrl.textContent = destination;
  if (openNowBtn) openNowBtn.href = destination;

  if (!destination || destination.includes('YOUR_CURRENT_BACKEND_URL_HERE')) {
    if (redirectMessage) {
      redirectMessage.textContent = 'Configure destinationUrl in settings.js before publishing this redirect page.';
    }
    if (countdownText) {
      countdownText.textContent = 'Redirect disabled because destinationUrl is still a placeholder.';
    }
    return;
  }

  let remaining = delaySeconds;
  const updateCountdown = () => {
    if (countdownText) {
      countdownText.textContent = `Redirecting in ${remaining}s…`;
    }
  };

  updateCountdown();
  const timer = setInterval(() => {
    remaining -= 1;
    if (remaining <= 0) {
      clearInterval(timer);
      window.location.replace(destination);
      return;
    }
    updateCountdown();
  }, 1000);
})();
