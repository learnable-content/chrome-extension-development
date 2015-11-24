// Listens

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    switch(request.type) {
        case "super-power":
            superPower();
            break;
    }
    return true;
});

var superPower = function() {
    chrome.tabs.getSelected(null, function(tab){
        chrome.tabs.sendMessage(tab.id, {type: "super-power"});
        chrome.browserAction.setBadgeText({text: "Wow!"});
    });
}