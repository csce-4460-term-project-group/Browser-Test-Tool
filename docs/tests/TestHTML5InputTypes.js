function TestHTML5InputTypes() {
    var test = new BrowserTest();
    test.title = "Input Types";
    var inputTypes = ["hidden", "text", "search", "tel", "url", "email", "password", "date", "month", "week", "time", "datetime-local", "number", "range", "color", "checkbox", "radio", "file", "submit", "image", "reset", "button"];
    var input = document.createElement("input");
    for (var i = 0; i < inputTypes.length; i++) {
        test.testDescriptions.push("type=" + inputTypes[i]);
        input.setAttribute("type", inputTypes[i]);
        if (inputTypes[i] == "text")
            test.results.push(input.type == "text");
        else
            test.results.push(input.type !== "text");
    }
    return test;
}