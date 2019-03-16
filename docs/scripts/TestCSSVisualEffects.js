function TestCSSVisualEffects() {
    var test = new BrowserTest();
    test.title = "Visual Effects";
    var properties = ['overflow', 'clip', 'visibility'];
    for (var i = 0; i < properties.length; i++) {
        test.testDescriptions.push(properties[i]);
        test.results.push(Modernizr.testProp(properties[i]));
    }
    return test;
}