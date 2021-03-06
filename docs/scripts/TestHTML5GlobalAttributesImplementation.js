function TestHTML5GlobalAttributesImplementation() {
    var test = new BrowserTest();
    test.title = "Global Attributes";
    test.testDescriptions = ["accesskey", "class", "contenteditable", "dir", "draggable", "hidden", "id", "lang", "spellcheck", "style", "tabindex", "title", "translate"];

    var promises = [];

    var addText = function (string, div) {
        var p = document.createElement("p");
        p.textContent = string;
        div.appendChild(p);
    }

    var doPixelsMatch = function (description, testStyle, testImage, options) {
        var text, stylePixels, imagePixels, styleCanvas, imageCanvas, styleHash, imageHash;
        var requestStyle = new XMLHttpRequest();
        requestStyle.open("GET", "https://csce-4460-term-project-group.github.io/Browser-Test-Tool/test-global-attributes/" + testStyle + ".html", true);
        requestStyle.responseType = "text";
        var p1 = new Promise(function (resolve) {
            requestStyle.onload = resolve;
        }).then(function () {
            text = requestStyle.response;
        });
        var requestImage = new XMLHttpRequest();
        requestImage.open("GET", "https://csce-4460-term-project-group.github.io/Browser-Test-Tool/test-global-attributes/" + testImage + ".png", true);
        requestImage.responseType = "arraybuffer";
        var p2 = new Promise(function (resolve) {
            requestImage.onload = resolve;
        }).then(function () {
            var arrayBuffer = requestImage.response;
            var byteArray = new Uint8Array(arrayBuffer);
            var pngImage = new PNG(byteArray);
            imagePixels = pngImage.decodePixels();
            //console.log(imagePixels);
            if (!options["test"]) {
                imageCanvas = document.createElement("canvas");
                var context = imageCanvas.getContext("2d");
                imageCanvas.width = imageCanvas.height = 100;
                var img = new ImageData(100, 100);
                pngImage.copyToImageData(img, imagePixels);
                context.putImageData(img, 0, 0);
            }
            if (options["blockhash"]) {
                if (!img) {
                    var img = new ImageData(100, 100);
                    pngImage.copyToImageData(img, imagePixels);
                }
                imageHash = blockhashData(img, 100, 2);
            }
        });
        Promise.all([p1, p2]).then(function () {
            styleCanvas = document.createElement("canvas");
            var context = styleCanvas.getContext("2d");
            styleCanvas.width = styleCanvas.height = 100;
            var img = document.createElement("img");
            img.src = "data:image/svg+xml," + encodeURIComponent(text);
            promises.push(new Promise(function (resolve) {
                img.onload = resolve;
            }).then(function () {
                context.drawImage(img, 0, 0);
                stylePixels = context.getImageData(0, 0, 100, 100).data;
                //console.log(stylePixels);
                if (options["blockhash"]) {
                    styleHash = blockhashData(context.getImageData(0, 0, 100, 100), 100, 2);
                    var result = !(hammingDistance(styleHash, imageHash) > options["blockhash"]);
                    if (options["test"]) {
                        options["test"].testDescriptionsUnsorted.push(description);
                        options["test"].results.push(result);
                    } else
                        console.log(description + " " + result);
                    return;
                } else {
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
                                } else
                                    console.log(description + " " + false);
                                return;
                            }
                        }
                }
                if (options["test"]) {
                    options["test"].testDescriptionsUnsorted.push(description);
                    options["test"].results.push(true);
                } else
                    console.log(description + " " + true);
            }));
        });
        requestStyle.send();
        requestImage.send();
    }

    var testAccessKey = function (resolve, reject) {
        var div = document.createElement("div");
        div.style.backgroundColor = "#FFFFFF";
        addText("Chrome or Edge: Press [Alt] + [Z]", div);
        addText("Firefox: Press [Alt] + [Shift] + [Z]", div);
        addText("Mac: Press [Control] + [Alt] + [Z]", div);
        var button1 = document.createElement("button");
        button1.textContent = "Do Not Click";
        button1.accessKey = "Z";
        button1.onfocus = function () { resolve(div) };
        div.appendChild(button1);
        var button2 = document.createElement("button");
        button2.textContent = "Nothing Happened";
        button2.onclick = function () { reject(div) };
        div.appendChild(button2);
        document.body.appendChild(div);
    };

    var testContentEditable = function (resolve, reject) {
        var div = document.createElement("div");
        div.style.backgroundColor = "#FFFFFF";
        addText("Change the text.", div);
        var divText = document.createElement("div");
        divText.style.width = "100px";
        divText.style.height = "100px";
        divText.style.border = "solid";
        divText.textContent = "Type here";
        divText.contentEditable = "true";
        div.appendChild(divText);
        var button = document.createElement("button");
        button.textContent = "Done";
        button.onclick = function () {
            if (divText.textContent == "Type here")
                reject(div);
            else
                resolve(div);
        };
        div.appendChild(button);
        document.body.appendChild(div);
    };

    var testDraggable = function (resolve, reject) {
        var div = document.createElement("div");
        div.style.backgroundColor = "#FFFFFF";
        addText("Is the red square draggable?", div);
        var divRed = document.createElement("div");
        divRed.style.width = "100px";
        divRed.style.height = "100px";
        divRed.style.backgroundColor = "#FF0000";
        divRed.draggable = "true";
        div.appendChild(divRed);
        var button1 = document.createElement("button");
        button1.textContent = "Yes";
        button1.onclick = function () { resolve(div) };
        div.appendChild(button1);
        var button2 = document.createElement("button");
        button2.textContent = "No";
        button2.onclick = function () { reject(div) };
        div.appendChild(button2);
        document.body.appendChild(div);
    };

    var testSpellcheck = function (resolve, reject) {
        var div = document.createElement("div");
        div.style.backgroundColor = "#FFFFFF";
        addText("Use the browser's spellcheck to correct the words.", div);
        var input = document.createElement("input");
        input.value = "compputer refridgerator";
        input.spellcheck = "true";
        div.appendChild(input);
        var button = document.createElement("button");
        button.textContent = "Done";
        button.onclick = function () {
            if (input.value == "computer refrigerator")
                resolve(div);
            else
                reject(div);
        };
        div.appendChild(button);
        document.body.appendChild(div);
    }

    var testTabIndex = function (resolve, reject) {
        var div = document.createElement("div");
        div.style.backgroundColor = "#FFFFFF";
        addText("Press [tab] 4 times. Type in the number that is in focus or 0 if none are focused.", div);
        var button1 = document.createElement("div");
        button1.textContent = "1";
        button1.tabIndex = "3";
        div.appendChild(button1);
        var button2 = document.createElement("div");
        button2.textContent = "2";
        button2.tabIndex = "2";
        div.appendChild(button2);
        var button3 = document.createElement("div");
        button3.textContent = "3";
        button3.tabIndex = "4";
        div.appendChild(button3);
        var button4 = document.createElement("div");
        button4.textContent = "4";
        button4.tabIndex = "1";
        div.appendChild(button4);
        var input = document.createElement("input");
        input.tabIndex = "5";
        div.appendChild(input);
        var button = document.createElement("button");
        button.textContent = "Done";
        button.tabIndex = "6";
        button.onclick = function () {
            if (input.value == "3")
                resolve(div);
            else
                reject(div);
        };
        div.appendChild(button);
        document.body.appendChild(div);
    }

    var testTitle = function (resolve, reject) {
        var div = document.createElement("div");
        div.style.backgroundColor = "#FFFFFF";
        addText("Hover over the green square. What does the tooltip say?", div);
        var divGreen = document.createElement("div");
        divGreen.style.width = "100px";
        divGreen.style.height = "100px";
        divGreen.style.backgroundColor = "#00FF00";
        divGreen.title = "red";
        div.appendChild(divGreen);
        var input = document.createElement("input");
        div.appendChild(input);
        var button = document.createElement("button");
        button.textContent = "Done";
        button.onclick = function () {
            if (input.value == "red")
                resolve(div);
            else
                reject(div);
        };
        div.appendChild(button);
        document.body.appendChild(div);
    }

    var testTranslate = function (resolve, reject) {
        var div = document.createElement("div");
        div.style.backgroundColor = "#FFFFFF";
        div.lang = "de";
        div.translate = "yes";
        addText("Translate this excerpt (Das M\u00e4rchen by Johann Wolfgang von Goethe) into English.", div);
        addText("\u0041\u006c\u0073 \u0065\u0072 \u0076\u006f\u0072 \u0064\u0069\u0065 \u0054\u00fc\u0072 \u0068\u0069\u006e\u0061\u0075\u0073 \u0074\u0072\u0061\u0074\u002c \u0073\u0061\u0068 \u0065\u0072 \u007a\u0077\u0065\u0069 \u0067\u0072\u006f\u00df\u0065 \u0049\u0072\u0072\u006c\u0069\u0063\u0068\u0074\u0065\u0072 \u00fc\u0062\u0065\u0072 \u0064\u0065\u006d \u0061\u006e\u0067\u0065\u0062\u0075\u006e\u0064\u0065\u006e\u0065\u006e \u004b\u0061\u0068\u006e\u0065 \u0073\u0063\u0068\u0077\u0065\u0062\u0065\u006e\u002c \u0064\u0069\u0065 \u0069\u0068\u006d \u0076\u0065\u0072\u0073\u0069\u0063\u0068\u0065\u0072\u0074\u0065\u006e\u002c \u0064\u0061\u00df \u0073\u0069\u0065 \u0067\u0072\u006f\u00df\u0065 \u0045\u0069\u006c\u0065 \u0068\u00e4\u0074\u0074\u0065\u006e \u0075\u006e\u0064 \u0073\u0063\u0068\u006f\u006e \u0061\u006e \u006a\u0065\u006e\u0065\u006d \u0055\u0066\u0065\u0072 \u007a\u0075 \u0073\u0065\u0069\u006e \u0077\u00fc\u006e\u0073\u0063\u0068\u0074\u0065\u006e\u002e \u0044\u0065\u0072 \u0041\u006c\u0074\u0065 \u0073\u00e4\u0075\u006d\u0074\u0065 \u006e\u0069\u0063\u0068\u0074\u002c \u0073\u0074\u0069\u0065\u00df \u0061\u0062 \u0075\u006e\u0064 \u0066\u0075\u0068\u0072\u002c \u006d\u0069\u0074 \u0073\u0065\u0069\u006e\u0065\u0072 \u0067\u0065\u0077\u00f6\u0068\u006e\u006c\u0069\u0063\u0068\u0065\u006e \u0047\u0065\u0073\u0063\u0068\u0069\u0063\u006b\u006c\u0069\u0063\u0068\u006b\u0065\u0069\u0074\u002c \u0071\u0075\u0065\u0072 \u00fc\u0062\u0065\u0072 \u0064\u0065\u006e \u0053\u0074\u0072\u006f\u006d\u002c \u0069\u006e\u0064\u0065\u0073 \u0064\u0069\u0065 \u0046\u0072\u0065\u006d\u0064\u0065\u006e \u0069\u006e \u0065\u0069\u006e\u0065\u0072 \u0075\u006e\u0062\u0065\u006b\u0061\u006e\u006e\u0074\u0065\u006e \u0073\u0065\u0068\u0072 \u0062\u0065\u0068\u0065\u006e\u0064\u0065\u006e \u0053\u0070\u0072\u0061\u0063\u0068\u0065 \u0067\u0065\u0067\u0065\u006e\u0065\u0069\u006e\u0061\u006e\u0064\u0065\u0072 \u007a\u0069\u0073\u0063\u0068\u0074\u0065\u006e \u0075\u006e\u0064 \u006d\u0069\u0074\u0075\u006e\u0074\u0065\u0072 \u0069\u006e \u0065\u0069\u006e \u006c\u0061\u0075\u0074\u0065\u0073 \u0047\u0065\u006c\u00e4\u0063\u0068\u0074\u0065\u0072 \u0061\u0075\u0073\u0062\u0072\u0061\u0063\u0068\u0065\u006e\u002c \u0069\u006e\u0064\u0065\u006d \u0073\u0069\u0065 \u0062\u0061\u006c\u0064 \u0061\u0075\u0066 \u0064\u0065\u006e \u0052\u00e4\u006e\u0064\u0065\u0072\u006e \u0075\u006e\u0064 \u0042\u00e4\u006e\u006b\u0065\u006e\u002c \u0062\u0061\u006c\u0064 \u0061\u0075\u0066 \u0064\u0065\u006d \u0042\u006f\u0064\u0065\u006e \u0064\u0065\u0073 \u004b\u0061\u0068\u006e\u0073 \u0068\u0069\u006e\u002d \u0075\u006e\u0064 \u0077\u0069\u0064\u0065\u0072\u0068\u00fc\u0070\u0066\u0074\u0065\u006e\u002e", div);
        addText("Did the browser translate the text?", div);
        var button1 = document.createElement("button");
        button1.textContent = "Yes";
        button1.onclick = function () { resolve(div) };
        div.appendChild(button1);
        var button2 = document.createElement("button");
        button2.textContent = "No";
        button2.onclick = function () { reject(div) };
        div.appendChild(button2);
        document.body.appendChild(div);
    }

    var tests = [testAccessKey, testContentEditable, testDraggable, testSpellcheck, testTabIndex, testTitle, testTranslate];
    var globalAttributes = ["accesskey", "contenteditable", "draggable", "spellcheck", "tabindex", "title", "translate"];
    var globalAttributes2 = ["class", "dir", "hidden", "id", "lang", "style"];

    promises.push(new Promise(function (resolve) {
        var testGlobalAttribute = function (i) {
            if (i == tests.length) {
                resolve();
                return;
            }
            new Promise(tests[i]).then(function (div) {
                test.testDescriptionsUnsorted.push(globalAttributes[i]);
                test.results.push(true);
                document.body.removeChild(div);
                testGlobalAttribute(i + 1);
            }).catch(function (div) {
                test.testDescriptionsUnsorted.push(globalAttributes[i]);
                test.results.push(false);
                document.body.removeChild(div);
                testGlobalAttribute(i + 1);
            });
        }
        testGlobalAttribute(0);
    }));

    for (var i = 0; i < globalAttributes2.length; i++)
        doPixelsMatch(globalAttributes2[i], globalAttributes2[i], globalAttributes2[i], { test: test });

    test.promise = Promise.all(promises).then(function () {
        test.sort();
    });
    return test;
}