function TestCSSColorImplementation() {
    var test = new BrowserTest();
    test.title = "Color";
    var descriptions = ['color', 'opacity', 'Basic color keywords', 'rgb()', 'rgba()', 'transparent', 'hsl()', 'hsla()', 'Extended color keywords', 'currentColor'];
    var properties = [];
    for (var i = 0; i < descriptions.length; i++)
        properties.push("Color" + i);
    for (var i = 0; i < descriptions.length; i++) {
        test.testDescriptions.push(descriptions[i]);
        if (properties[i] == "Color0" || properties[i] == "Color1")
            doPixelsMatch(descriptions[i], properties[i], properties[i], { test: test, mismatch: 3, radius: 1 });
        else
            doPixelsMatch(descriptions[i], properties[i], properties[i], { test: test });
    }
    return test;
}