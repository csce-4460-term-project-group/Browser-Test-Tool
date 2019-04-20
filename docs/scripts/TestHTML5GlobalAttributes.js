function TestHTML5GlobalAttributes() {
    var test = new BrowserTest();
    test.title = "Global Attributes";
    test.testDescriptions = ["accesskey", "class", "contenteditable", "dir", "draggable", "hidden", "id", "lang", "spellcheck", "style", "tabindex", "title", "translate"];
    var arrayOfAttributes = ["accessKey", "className", "contentEditable", "dir", "draggable", "hidden", "id", "lang", "spellcheck", "style", "tabIndex", "title", "translate"];
    var myElem = document.createElement("a");

    for (var i = 0; i < arrayOfAttributes.length; i++) {
        test.results.push((arrayOfAttributes[i]) in myElem);
    }
    return test;
}