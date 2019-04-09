function TestCSSSelectorsImplementation() {
    var test = new BrowserTest();
    test.title = "Selectors";
    var selectors = ['*', 'E', 'E[foo]', 'E[foo="bar"]', 'E[foo~="bar"]', 'E[foo^="bar"]', 'E[foo$="bar"]', 'E[foo*="bar"]', 'E[foo|="en"]', 'E:nth-child(n)', 'E:nth-last-child(n)', 'E:nth-of-type(n)', 'E:nth-last-of-type(n)', 'E:first-child', 'E:last-child', 'E:first-of-type', 'E:last-of-type', 'E:only-child', 'E:only-of-type', 'E:empty', 'E:link'];
    var properties = [];
    for (var i = 0; i < 9; i++)
        properties.push("Selectors0-8");
    for (var i = 9; i < selectors.length; i++)
        properties.push("Selectors" + i);
    for (var i = 0; i < selectors.length; i++) {
        test.testDescriptions.push(selectors[i]);
        doPixelsMatch(selectors[i], "Selectors" + i, properties[i], {});
    }
    return test;
}