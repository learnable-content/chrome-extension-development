// Page Scripts

chrome.extension.onMessage.addListener(function (message, sender, sendResponse) {
    switch (message.type) {
        case "super-power":
            var imgs = document.querySelectorAll(".ArticleCopy img");
            if (imgs.length === 0) {
                alert("There are no any imgs in the page.");
            } else {
                var xmlhttp = new XMLHttpRequest();
                var url = 'http://gateway.marvel.com/v1/public/characters?ts=1448030805540&apikey=dfa06d77bc9c4f9f0ed01337848247e3&hash=0e54a94548adeb07b97e3e3428c6956f&limit=' + imgs.length;

                xmlhttp.onreadystatechange = function() {
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        var myArr = JSON.parse(xmlhttp.responseText);
                        var arr = myArr.data.results;
                        var i;

                        for(var i=0; i < imgs.length; i++) {
                            console.log(imgs[i].src);
                            imgs[i].src = arr[i].thumbnail.path + '.' + arr[i].thumbnail.extension;
                        }
                    }
                };
                xmlhttp.open("GET", url, true);
                xmlhttp.send();
            }
            break;
    }
});
