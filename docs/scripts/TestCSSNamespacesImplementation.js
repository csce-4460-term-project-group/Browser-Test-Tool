function TestCSSNamespacesImplementation() {
    var test = new BrowserTest();
    test.title = "Namespaces";
    test.testDescriptions.push("@namespace");
    doPixelsMatch("@namespace", "namespace", "namespace", { test: test });
    return test;
}