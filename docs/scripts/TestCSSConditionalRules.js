function TestCSSConditionalRules() {
    var test = new BrowserTest();
    test.title = "Conditional Rules Module Level 3";
    test.testDescriptions.push("@supports");
    try {
        CSS.supports;
        test.results.push(true);
    } catch (e) {
        test.results.push(false);
    }
    return test;
}