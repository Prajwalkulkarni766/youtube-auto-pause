# Auto Pause Extension

**Auto Pause** automatically pauses and resumes YouTube videos when you switch browser tabs. This extension helps save bandwidth and prevents missing parts of videos when you switch tabs.

---

## Features

- Automatically pauses YouTube videos when you leave the tab.
- Automatically resumes videos when you return.
- Toggle the functionality ON/OFF via a popup.
- Set a delay (in seconds) before pausing/playing.
- Supports Dark Mode and custom accent color.
- Works on YouTube (https://www.youtube.com/*).

---

## Installation

### Chrome

1. Download or clone this repository to your local machine.
2. Open Chrome and go to `chrome://extensions`.
3. Enable **Developer mode** (toggle in the top right).
4. Click **Load unpacked** and select the folder containing this extension.
5. The extension will appear in your toolbar.
6. Click the extension icon to toggle or adjust settings.

### Microsoft Edge

1. Download or clone this repository.
2. Open Edge and go to `edge://extensions`.
3. Enable **Developer mode**.
4. Click **Load unpacked** and select the extension folder.
5. Use it like in Chrome.

### Firefox

Firefox uses a slightly different format and API, so the extension may need some modification to work perfectly. However, you can try the following steps:

1. Download or clone this repository.
2. Open Firefox and go to `about:debugging#/runtime/this-firefox`.
3. Click **Load Temporary Add-on**.
4. Select the `manifest.json` file from the extension folder.
5. The extension will be installed temporarily (until Firefox restarts).
6. For permanent installation, consider publishing to [addons.mozilla.org](https://addons.mozilla.org).

---

## Usage

- Click the extension icon in the toolbar.
- Use the toggle switch to enable or disable auto pause.
- Adjust the delay time (in seconds) to control how long after switching tabs the video pauses/plays.
- Enable dark mode or choose your preferred accent color.
- Click **Save Settings** to apply changes.
- Use the **Test Auto Pause** button to manually pause/play the current YouTube video.

---

## Development

- This extension uses **Manifest V3**.
- Content scripts are injected into YouTube pages to control video playback.
- User settings are saved in Chrome storage (`chrome.storage.sync`).
- The popup UI allows easy toggling and configuration.

---

## License

MIT License © Prajwal Kulkarni

---

## Contact

For feedback or issues, please open an issue on the GitHub repository.

---

