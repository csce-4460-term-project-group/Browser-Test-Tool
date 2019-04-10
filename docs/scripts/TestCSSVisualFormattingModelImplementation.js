function TestCSSVisualFormattingModelImplementation() {
    var test = new BrowserTest();
    test.title = "Visual Formatting Model";
    var properties = ['display', 'top', 'left', 'bottom', 'right', 'float', 'clear', 'z-index', 'unicode-bidi', 'width', 'min-width', 'max-width', 'height', 'min-height', 'max-height', 'line-height', 'vertical-align'];
    for (var i = 0; i < properties.length; i++) {
        test.testDescriptions.push(properties[i]);
        if (properties[i] == 'unicode-bidi')
            doPixelsMatch(properties[i], properties[i], properties[i], { test: test, mismatch: 10, radius: 1 });
        else if (properties[i] == 'line-height')
            doPixelsMatch(properties[i], properties[i], properties[i], { test: test, mismatch: 6, radius: 1 });
        else if (properties[i] == 'vertical-align')
            doPixelsMatch(properties[i], properties[i], properties[i], { test: test, mismatch: 72, radius: 1 });
        else
            doPixelsMatch(properties[i], properties[i], properties[i], { test: test });
    }
    return test;
}