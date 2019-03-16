function TestCSSVisualFormattingModel() {
    var test = new BrowserTest();
    test.title = "Visual Formatting Model";
    var properties = ['display', 'position', 'top', 'right', 'bottom', 'left', 'float', 'clear', 'z-index', 'direction', 'unicode-bidi', 'width', 'min-width', 'max-width', 'height', 'min-height', 'max-height', 'line-height', 'vertical-align'];
    for (var i = 0; i < properties.length; i++) {
        test.testDescriptions.push(properties[i]);
        test.results.push(Modernizr.testProp(properties[i]));
    }
    return test;
}