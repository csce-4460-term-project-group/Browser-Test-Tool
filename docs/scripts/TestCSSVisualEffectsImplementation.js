function TestCSSVisualEffectsImplementation() {
    var test = new BrowserTest();
    test.title = "Visual Effects";
    var properties = ['overflow', 'clip', 'visibility'];
    for (var i = 0; i < properties.length; i++) {
        test.testDescriptions.push(properties[i]);
        doPixelsMatch(properties[i], properties[i], properties[i], { test: test });
    }
    return test;
}