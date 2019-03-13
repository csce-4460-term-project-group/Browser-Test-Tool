function TestCSSBoxModel() {
    var test = new BrowserTest();
    test.title = "Box Model";
    var properties = ['margin-top', 'margin-right', 'margin-bottom', 'margin-left', 'margin', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left', 'padding', 'border-top-width', 'border-right-width', 'border-bottom-width', 'border-left-width', 'border-width', 'border-top-color', 'border-right-color', 'border-bottom-color', 'border-left-color', 'border-color', 'border-top-style', 'border-right-style', 'border-bottom-style', 'border-left-style', 'border-style', 'border-top', 'border-right', 'border-bottom', 'border-left', 'border'];
    for (var i = 0; i < properties.length; i++) {
        test.testDescriptions.push(properties[i]);
        test.results.push(Modernizr.testProp(properties[i]));
    }
    return test;
}