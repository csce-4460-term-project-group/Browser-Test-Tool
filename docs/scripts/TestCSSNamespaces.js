function TestCSSNamespaces() {
    var test = new BrowserTest();
    test.title = "Namespaces";
    test.testDescriptions.push("@namespace");
    var selectors = ['*|a'];
    var element = document.createElement("a");
    if ("matches" in element)
        for (var i = 0; i < selectors.length; i++)
            try {
                element.matches(selectors[i]);
                test.results.push(true);
            } catch (e) {
                test.results.push(false);
            }
    else if ("msMatchesSelector" in element)
        for (var i = 0; i < selectors.length; i++)
            try {
                element.msMatchesSelector(selectors[i]);
                test.results.push(true);
            } catch (e) {
                test.results.push(false);
            }
    else if ("webkitMatchesSelector" in element)
        for (var i = 0; i < selectors.length; i++)
            try {
                element.webkitMatchesSelector(selectors[i]);
                test.results.push(true);
            } catch (e) {
                test.results.push(false);
            }
    return test;
}