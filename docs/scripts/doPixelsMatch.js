function doPixelsMatch(description, testStyle, testImage, tolerance) {
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
            var mismatch = 0;
            if (!tolerance["mismatch"])
                tolerance["mismatch"] = 0;
            var totalPixels = stylePixels.length / 4;
            for (var j = 0, bits = 0; j < totalPixels; j++ , bits = 0) {
                bits += Math.abs(stylePixels[j * 4] - imagePixels[j * 4]);
                bits += Math.abs(stylePixels[j * 4 + 1] - imagePixels[j * 4 + 1]);
                bits += Math.abs(stylePixels[j * 4 + 2] - imagePixels[j * 4 + 2]);
                bits += Math.abs(stylePixels[j * 4 + 3] - imagePixels[j * 4 + 3]);
                if (bits > 0)
                    mismatch++;
                if (mismatch > tolerance["mismatch"]) {
                    console.log(description + " " + false);
                    return;
                }
            }
            console.log(description + " " + true);
        });
    });
    requestStyle.send();
    requestImage.send();
}