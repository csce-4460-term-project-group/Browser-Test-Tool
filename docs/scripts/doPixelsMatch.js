function doPixelsMatch(testStyle, testImage) {
    var text, stylePixels, imagePixels;
    var requestStyle = new XMLHttpRequest();
    requestStyle.open("GET", "https://csce-4460-term-project-group.github.io/Browser-Test-Tool/test-styles/" + testStyle + ".html", true);
    requestStyle.responseType = "text";
    var p1 = new Promise(function (resolve) {
        requestStyle.onload = resolve;
    }).then(function () {
        text = requestStyle.response;
    });
    var requestImage = new XMLHttpRequest();
    requestImage.open("GET", "https://csce-4460-term-project-group.github.io/Browser-Test-Tool/test-images/" + testImage + ".png", true);
    requestImage.responseType = "arraybuffer";
    var p2 = new Promise(function (resolve) {
        requestImage.onload = resolve;
    }).then(function () {
        arrayBuffer = requestImage.response;
        var byteArray = new Uint8Array(arrayBuffer);
        var pngImage = new PNG(byteArray);
        imagePixels = pngImage.decodePixels();
        //console.log(imagePixels);
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        canvas.width = canvas.height = 100;
        var img = new ImageData(100, 100);
        pngImage.copyToImageData(img, imagePixels);
        context.putImageData(img, 0, 0);
        document.body.appendChild(canvas);
    });
    var index = i;
    Promise.all([p1, p2]).then(function () {
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        canvas.width = canvas.height = 100;
        var img = document.createElement("img");
        img.src = "data:image/svg+xml," + encodeURIComponent(text);
        new Promise(function (resolve) {
            img.onload = resolve;
        }).then(function () {
            context.drawImage(img, 0, 0);
            document.body.appendChild(canvas);
            stylePixels = context.getImageData(0, 0, 100, 100).data;
            //console.log(stylePixels);
            for (var j = 0; j < stylePixels.length; j++)
                if (stylePixels[j] != imagePixels[j]) {
                    console.log(descriptions[index] + " " + false);
                    return;
                }
            console.log(descriptions[index] + " " + true);
        });
    });
    requestStyle.send();
    requestImage.send();
}