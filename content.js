let enabled = true;
let delay = 0;

chrome.storage.sync.get(['autoPauseEnabled','delay'], function(result) {
  enabled = result.autoPauseEnabled !== false;
  delay = result.delay || 0;
});

chrome.storage.onChanged.addListener((changes, area) => {
  if (area === 'sync') {
    if (changes.autoPauseEnabled) enabled = changes.autoPauseEnabled.newValue;
    if (changes.delay) delay = changes.delay.newValue;
  }
});

document.addEventListener('visibilitychange', function () {
  if (!enabled) return;
  const video = document.querySelector('video');
  if (!video) return;

  setTimeout(() => {
    if (document.hidden) video.pause();
    else video.play();
  }, delay * 1000);
});
