function TestCSSColor() {
    var test = new BrowserTest();
    test.title = "Color";
    test.testDescriptions = ['color', 'opacity', 'Basic color keywords', 'rgb()', 'rgba()', 'transparent', 'hsl()', 'hsla()', 'Extended color keywords', 'currentColor'];
    var properties = ['color', 'opacity', 'color', 'color', 'color', 'color', 'color', 'color', 'color', 'color'];
    var values = ['', '', 'black', 'rgb(0,0,0)', 'rgba(0,0,0,0)', 'transparent', 'hsl(0,0%,0%)', 'hsla(0,0%,0%,0)', 'aliceblue', 'currentColor'];
    for (var i = 0; i < test.testDescriptions.length; i++)
        if (values[i] == '')
            test.results.push(Modernizr.testProp(properties[i]));
        else
            test.results.push(Modernizr.testProp(properties[i], values[i]));
    return test;
}