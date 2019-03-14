function TestCSSMediaQueries() {
    var test = new BrowserTest();
    test.title = "Media Queries";
    var mediaFeatures = ["width", "height", "device-width", "device-height", "orientation", "aspect-ratio", "device-aspect-ratio", "color", "color-index", "monochrome", "resolution", "scan", "grid"];
    var mediaQueries = ["(width)", "(height)", "(device-width)", "(device-height)", "(orientation)", "(aspect-ratio)", "(device-aspect-ratio)", "(color), (color: 0)", "(color-index), (color-index: 0)", "(monochrome), (monochrome: 0)", "(resolution)", "tv and (scan), not tv and (scan)", "(grid: 1), (grid: 0)"];
    for (var i = 0; i < mediaQueries.length; i++) {
        test.testDescriptions.push(mediaFeatures[i]);
        test.results.push(Modernizr.mq(mediaQueries[i]));
    }
    return test;
}