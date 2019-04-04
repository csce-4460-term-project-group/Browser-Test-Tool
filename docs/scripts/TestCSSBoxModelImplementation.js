function TestCSSBoxModelImplementation() {
    var test = new BrowserTest();
    test.title = "Box Model";
    var properties = ['margin-top', 'margin-right', 'margin-bottom', 'margin-left', 'margin', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left', 'padding', 'border-top-width', 'border-right-width', 'border-bottom-width', 'border-left-width', 'border-width', 'border-top-color', 'border-right-color', 'border-bottom-color', 'border-left-color', 'border-color', 'border-top-style', 'border-right-style', 'border-bottom-style', 'border-left-style', 'border-style', 'border-top', 'border-right', 'border-bottom', 'border-left', 'border'];
    for (var i = 0; i < properties.length; i++) {
        test.testDescriptions.push(properties[i]);
        if (properties[i] == 'border-top-color' || properties[i] == 'border-right-color' || properties[i] == 'border-bottom-color' || properties[i] == 'border-left-color')
            doPixelsMatch(properties[i], properties[i], properties[i], { test: test, mismatch: 10 });
        else
            doPixelsMatch(properties[i], properties[i], properties[i], { test: test });
    }
    return test;
}