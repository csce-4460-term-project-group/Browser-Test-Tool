function TestCSSStyleAttributes() {
    var test = new BrowserTest();
    test.title = "Style Attributes";
    test.testDescriptions.push("Supports Style Attributes");
    test.results.push("style" in document.createElement("a"));
    return test;
}