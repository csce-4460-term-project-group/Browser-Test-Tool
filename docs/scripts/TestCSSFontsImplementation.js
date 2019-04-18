function TestCSSFontsImplementation() {
    var test = new BrowserTest();
    test.title = "Fonts";
    var properties = ['font-family', 'font-weight', 'font-stretch', 'font-style', 'font-size', 'font-size-adjust', 'font', 'font-synthesis', 'font-kerning', 'font-variant-position', 'font-variant-caps', 'font-variant-numeric', 'font-variant-east-asian', 'font-variant'];
    for (var i = 0; i < properties.length; i++) {
        test.testDescriptions.push(properties[i]);
        doPixelsMatch(properties[i], properties[i], properties[i], { test: test, blockhash: 200 });
    }
    return test;
}