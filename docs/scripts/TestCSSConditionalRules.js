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
    test.testDescriptions.push("CSSRule");
    try {
        CSSRule;
        test.results.push(true);
    } catch (e) {
        test.results.push(false);
    }
    test.testDescriptions.push("CSSGroupingRule");
    try {
        CSSGroupingRule;
        test.results.push(true);
    } catch (e) {
        test.results.push(false);
    }
    test.testDescriptions.push("CSSConditionRule");
    try {
        CSSConditionRule;
        test.results.push(true);
    } catch (e) {
        test.results.push(false);
    }
    test.testDescriptions.push("CSSMediaRule");
    try {
        CSSMediaRule;
        test.results.push(true);
    } catch (e) {
        test.results.push(false);
    }
    test.testDescriptions.push("CSSSupportsRule");
    try {
        CSSSupportsRule;
        test.results.push(true);
    } catch (e) {
        test.results.push(false);
    }
    test.testDescriptions.push("CSS");
    try {
        CSS;
        test.results.push(true);
    } catch (e) {
        test.results.push(false);
    }
    return test;
}