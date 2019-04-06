function TestCSSMediaQueriesImplementation() {
    var test = new BrowserTest();
    test.title = "Media Queries";
    var properties = ["width", "height", "device-width", "device-height", "orientation", "aspect-ratio", "device-aspect-ratio", "color", "color-index", "monochrome", "resolution", "scan", "grid"];
    for (var i = 0; i < properties.length; i++) {
        test.testDescriptions.push(properties[i]);
        doPixelsMatch(properties[i], "media-query-" + properties[i], "media-query", { test: test });
    }
    return test;
}