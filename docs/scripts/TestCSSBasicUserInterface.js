function TestCSSBasicUserInterface() {
    var test = new BrowserTest();
    test.title = "Basic User Interface"; //Level 3
    var properties = ['box-sizing', 'outline', 'outline-width', 'outline-style', 'outline-color', 'outline-offset', 'text-overflow'];
    for (var i = 0; i < properties.length; i++) {
        test.testDescriptions.push(properties[i]);
        test.results.push(Modernizr.testProp(properties[i]));

    }
    return test;
}