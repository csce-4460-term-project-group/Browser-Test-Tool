function TestCSSBasicUserInterfaceImplementation() {
    var test = new BrowserTest();
    test.title = "Basic User Interface";
    var properties = ['box-sizing', 'outline', 'outline-width', 'outline-style', 'outline-color', 'outline-offset', 'text-overflow'];
    for (var i = 0; i < properties.length; i++) {
        test.testDescriptions.push(properties[i]);
        if (properties[i] == 'text-overflow')
            doPixelsMatch(properties[i], properties[i], properties[i], { test: test, mismatch: 175 });
        else
            doPixelsMatch(properties[i], properties[i], properties[i], { test: test });
    }
    return test;
}