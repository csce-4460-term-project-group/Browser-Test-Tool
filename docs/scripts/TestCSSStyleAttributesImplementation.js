function TestCSSStyleAttributesImplementation() {
    var test = new BrowserTest();
    test.title = "Style Attributes";
    test.testDescriptions.push("Supports Style Attributes");
    doPixelsMatch("Supports Style Attributes", "style", "style", { test: test });
    return test;
}