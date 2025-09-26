chrome.commands.onCommand.addListener(async (command) => {
  if (command === "toggle-nightify") {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    if (tab?.id) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["toggle.js"]
      });
    }
  }
});
