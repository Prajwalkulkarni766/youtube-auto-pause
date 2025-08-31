const toggle = document.getElementById('toggle');
const status = document.getElementById('status');
const delayInput = document.getElementById('delay');
const themeToggle = document.getElementById('theme');
const saveBtn = document.getElementById('save');
const testBtn = document.getElementById('test');

// Load saved settings
chrome.storage.sync.get(
  ['autoPauseEnabled', 'delay', 'darkMode'],
  function (result) {
    toggle.checked = result.autoPauseEnabled !== false;
    status.textContent = "Status: " + (toggle.checked ? "ON" : "OFF");
    delayInput.value = result.delay ?? 0;
    themeToggle.checked = result.darkMode || false;
    applyTheme();
  }
);

// Toggle ON/OFF
toggle.addEventListener('change', function () {
  status.textContent = "Status: " + (toggle.checked ? "ON" : "OFF");
  saveSettings();
});

// Save button
saveBtn.addEventListener('click', () => {
  saveSettings();
});

// Dark mode toggle
themeToggle.addEventListener('change', applyTheme);

// Test button
testBtn.addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: () => {
        const v = document.querySelector("video");
        if (v) v.paused ? v.play() : v.pause();
      }
    });
  });
});

// Save settings
function saveSettings() {
  chrome.storage.sync.set({
    autoPauseEnabled: toggle.checked,
    delay: Number(delayInput.value),
    darkMode: themeToggle.checked
  });
}

// Apply theme
function applyTheme() {
  if (themeToggle.checked) {
    document.documentElement.style.setProperty("--bg", "#1e1e1e");
    document.documentElement.style.setProperty("--fg", "#f1f1f1");
  } else {
    document.documentElement.style.setProperty("--bg", "#f9f9f9");
    document.documentElement.style.setProperty("--fg", "#333");
  }
}
