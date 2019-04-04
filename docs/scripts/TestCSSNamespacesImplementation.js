function TestCSSNamespacesImplementation() {
    var test = new BrowserTest();
    test.title = "Namespaces";
    doPixelsMatch("@namespace", "namespace", "namespace", { test: test });
    return test;
}