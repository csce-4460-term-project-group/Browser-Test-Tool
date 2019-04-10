function TestCSSSelectorsImplementation() {
    var test = new BrowserTest();
    test.title = "Selectors";
    var selectors = ['*', 'E', 'E[foo]', 'E[foo="bar"]', 'E[foo~="bar"]', 'E[foo^="bar"]', 'E[foo$="bar"]', 'E[foo*="bar"]', 'E[foo|="en"]', 'E:root', 'E:nth-child(n)', 'E:nth-last-child(n)', 'E:nth-of-type(n)', 'E:nth-last-of-type(n)', 'E:first-child', 'E:last-child', 'E:first-of-type', 'E:last-of-type', 'E:only-child', 'E:only-of-type', 'E:empty', 'E:link', 'E:visited', 'E:lang(fr)', 'E:enabled', 'E:disabled', 'E:checked', 'E::first-line', 'E::first-letter', 'E::before', 'E::after', 'E.warning', 'E#myid', 'E:not(s)', 'E F', 'E > F', 'E + F', 'E ~ F'];
    var properties = [];
    for (var i = 0; i < selectors.length; i++)
        properties.push("Selectors" + i);
    for (var i = 0; i < selectors.length; i++) {
        test.testDescriptions.push(selectors[i]);
        if (selectors[i] == 'E::first-line' || selectors[i] == 'E::first-letter' || selectors[i] == 'E::before' || selectors[i] == 'E::after')
            doPixelsMatch(selectors[i], "Selectors" + i, properties[i], { test: test, mismatch: 6, radius: 1 });
        else if (selectors[i] == 'E:checked')
            doPixelsMatch(selectors[i], "Selectors" + i, properties[i], { test: test, mismatch: 2500 });
        else
            doPixelsMatch(selectors[i], "Selectors" + i, properties[i], { test: test });
    }
    return test;
}