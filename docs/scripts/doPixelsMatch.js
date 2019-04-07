var totalTestsCSS = 48, testsCompletedCSS = 0;

function checkTestsCompletedCSS() {
    testsCompletedCSS++;
    if (testsCompletedCSS == totalTestsCSS)
        document.dispatchEvent(new Event("css-implementation-tests-complete"));
}

function comparePixels(stylePixels, imagePixels, x, y, radius) {
    if (x - radius < 0)
        var xMin = 0;
    else
        var xMin = x - radius;
    if (x + radius > 99)
        var xMax = 99;
    else
        var xMax = x + radius;
    if (y - radius < 0)
        var yMin = 0;
    else
        var yMin = y - radius;
    if (y + radius > 99)
        var yMax = 99;
    else
        var yMax = y + radius;
    var comparedPixels = [];
    for (var i = xMin; i <= xMax; i++) {
        for (var j = yMin, bits = 0; j <= yMax; j++ , bits = 0) {
            bits += Math.abs(stylePixels[i * 100 + j * 4] - imagePixels[i * 100 + j * 4]);
            bits += Math.abs(stylePixels[i * 100 + j * 4 + 1] - imagePixels[i * 100 + j * 4 + 1]);
            bits += Math.abs(stylePixels[i * 100 + j * 4 + 2] - imagePixels[i * 100 + j * 4 + 2]);
            bits += Math.abs(stylePixels[i * 100 + j * 4 + 3] - imagePixels[i * 100 + j * 4 + 3]);
        }
        comparedPixels.push(bits);
    }
    return Math.min(comparedPixels);
}

function doPixelsMatch(description, testStyle, testImage, options) {
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
        if (!options["test"]) {
            var canvas = document.createElement("canvas");
            var context = canvas.getContext("2d");
            canvas.width = canvas.height = 100;
            var img = new ImageData(100, 100);
            pngImage.copyToImageData(img, imagePixels);
            context.putImageData(img, 0, 0);
            document.body.appendChild(canvas);
        }
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
            if (!options["test"])
                document.body.appendChild(canvas);
            stylePixels = context.getImageData(0, 0, 100, 100).data;
            //console.log(stylePixels);
            var mismatch = 0;
            if (!options["mismatch"])
                options["mismatch"] = 0;
            if (!options["radius"])
                options["radius"] = 0;
            for (var j = 0; j < 100; j++)
                for (var k = 0; k < 100; k++) {
                    if (comparePixels(stylePixels, imagePixels, j, k, options["radius"]) > 0)
                        mismatch++;
                    if (mismatch > options["mismatch"]) {
                        if (options["test"]) {
                            options["test"].testDescriptionsUnsorted.push(description);
                            options["test"].results.push(false);
                            checkTestsCompletedCSS();
                        } else
                            console.log(description + " " + false);
                        return;
                    }
                }
            if (options["test"]) {
                options["test"].testDescriptionsUnsorted.push(description);
                options["test"].results.push(true);
                checkTestsCompletedCSS();
            } else
                console.log(description + " " + true);
        });
    });
    requestStyle.send();
    requestImage.send();
}