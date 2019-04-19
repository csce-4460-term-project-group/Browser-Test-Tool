var totalTestsHTML5InputTypes = 22, testsCompletedHTML5InputTypes = 0;

function TestHTML5InputTypesImplementation() {
    var test = new BrowserTest();
    test.title = "Input Types";
    var descriptions = [];
    var results = [];

    var doInputsMatch = function (test, description, input1, value1, input2, value2, shouldMatch) {
        var pixels1, pixels2;
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        canvas.width = canvas.height = 100;
        var img = document.createElement("img");
        img.src = "data:image/svg+xml," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
    <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml" style="width:100px;height:100px;background-color:#FFFFFF;">
            <input type="`+ input1 + `" value="` + value1 + `"/>
        </div>
    </foreignObject>
</svg>
`);
        var p1 = new Promise(function (resolve) {
            img.onload = resolve;
        }).then(function () {
            context.drawImage(img, 0, 0);
            pixels1 = context.getImageData(0, 0, 100, 100).data;
        });
        var canvas2 = document.createElement("canvas");
        var context2 = canvas2.getContext("2d");
        canvas2.width = canvas2.height = 100;
        var img2 = document.createElement("img");
        img2.src = "data:image/svg+xml," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
    <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml" style="width:100px;height:100px;background-color:#FFFFFF;">
            <input type="`+ input2 + `" value="` + value2 + `"/>
        </div>
    </foreignObject>
</svg>
`);
        var p2 = new Promise(function (resolve) {
            img2.onload = resolve;
        }).then(function () {
            context2.drawImage(img2, 0, 0);
            pixels2 = context2.getImageData(0, 0, 100, 100).data;
        });
        return Promise.all([p1, p2]).then(function () {
            for (var j = 0; j < 100; j++)
                for (var k = 0; k < 100; k++)
                    if (comparePixels(pixels1, pixels2, j, k, 0) > 0) {
                        test.testDescriptionsUnsorted.push(description);
                        test.results.push(false == shouldMatch);
                        return;
                    }
            test.testDescriptionsUnsorted.push(description);
            test.results.push(true == shouldMatch);
        });
    };

    var inputTypes = ["hidden", "text", "search", "tel", "url", "email", "password", "date", "month", "week", "time", "datetime-local", "number", "range", "color", "checkbox", "radio", "file", "submit", "image", "reset", "button"];
    var values = ["", "text", "", "123-456-7890", "https://github.com/", "email@github.com", "password", "2019-04-23", "2019-04", "2019-W17", "12:30:25.01", "2019-04-23T07:07", "5", "50", "#FF0000", "", "", "", "", "", "", ""];
    var shouldMatch = [false, true, true, true, true, true, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false];
    var promises = [];
    for (var i = 0; i < inputTypes.length; i++) {
        test.testDescriptions.push(inputTypes[i]);
        promises.push(doInputsMatch(test, inputTypes[i], "text", values[i], inputTypes[i], values[i], shouldMatch[i]));
    }
    test.promise = Promise.all(promises).then(function () {
        test.sort();
    });
    return test;
}