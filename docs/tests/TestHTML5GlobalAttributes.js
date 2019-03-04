function TestHTML5GlobalAttributes() {
    var test = new BrowserTest();
    test.title = "Attributes";
    test.testDescriptions = [];
    test.results = [];
    var arrayOfAttributes = ["accessKey", "className", "contentEditable", "dir", "draggable", "hidden", "id", "lang", "spellcheck", "style", "tabIndex", "title", "translate"];
    var myElem = document.createElement("a");

    for (var i = 0; i < arrayOfAttributes.length; i++) {
        test.testDescriptions.push("<" + arrayOfAttributes[i] + ">");
        test.results.push((arrayOfAttributes[i]) in myElem);
    }
    return test;
}