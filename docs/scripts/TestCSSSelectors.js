function TestCSSSelectors() {
    var test = new BrowserTest();
    test.title = "Selectors";
    var selectors = ['*', 'E', 'E[foo]', 'E[foo="bar"]', 'E[foo~="bar"]', 'E[foo^="bar"]', 'E[foo$="bar"]', 'E[foo*="bar"]', 'E[foo|="en"]', 'E:root', 'E:nth-child(n)', 'E:nth-last-child(n)', 'E:nth-of-type(n)', 'E:nth-last-of-type(n)', 'E:first-child', 'E:last-child', 'E:first-of-type', 'E:last-of-type', 'E:only-child', 'E:only-of-type', 'E:empty', 'E:link', 'E:visited', 'E:active', 'E:hover', 'E:focus', 'E:target', 'E:lang(fr)', 'E:enabled', 'E:disabled', 'E:checked', 'E::first-line', 'E::first-letter', 'E::before', 'E::after', 'E.warning', 'E#myid', 'E:not(s)', 'E F', 'E > F', 'E + F', 'E ~ F'];
    var element = document.createElement("a");
    if ("matches" in element)
        for (var i = 0; i < selectors.length; i++) {
            test.testDescriptions.push(selectors[i]);
            try {
                element.matches(selectors[i]);
                test.results.push(true);
            } catch (e) {
                test.results.push(false);
            }
        }
    else if ("msMatchesSelector" in element)
        for (var i = 0; i < selectors.length; i++) {
            test.testDescriptions.push(selectors[i]);
            try {
                element.msMatchesSelector(selectors[i]);
                test.results.push(true);
            } catch (e) {
                test.results.push(false);
            }
        }
    else if ("webkitMatchesSelector" in element)
        for (var i = 0; i < selectors.length; i++) {
            test.testDescriptions.push(selectors[i]);
            try {
                element.webkitMatchesSelector(selectors[i]);
                test.results.push(true);
            } catch (e) {
                test.results.push(false);
            }
        }
    return test;
}