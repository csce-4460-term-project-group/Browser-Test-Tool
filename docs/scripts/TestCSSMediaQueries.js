function TestCSSMediaQueries() {
    var test = new BrowserTest();
    test.title = "Media Queries";
    test.testDescriptions = ["Media features: width", "Media features: height", "Media features: device-width", "Media features: device-height", "Media features: orientation", "Media features: aspect-ratio", "Media features: device-aspect-ratio", "Media features: color", "Media features: color-index", "Media features: monochrome", "Media features: resolution", "Media features: scan", "Media features: grid"];
    var mediaQueries = ["(width)", "(height)", "(device-width)", "(device-height)", "(orientation)", "(aspect-ratio)", "(device-aspect-ratio)", "(color), (color: 0)", "(color-index), (color-index: 0)", "(monochrome), (monochrome: 0)", "(resolution)", "tv and (scan), not tv and (scan)", "(grid: 1), (grid: 0)"];
    for (var i = 0; i < mediaQueries.length; i++)
        test.results.push(Modernizr.mq(mediaQueries[i]));
    return test;
}