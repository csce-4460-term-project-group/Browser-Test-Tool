function GetTestResults(tests, testType, divId, color) {
    var totalTestsPassed = 0;
    var totalTests = 0;
    for (var i = 0; i < tests.length; i++) {
        var testsPassed = 0;
        for (var j = 0; j < tests[i].results.length; j++)
            if (tests[i].results[j])
                testsPassed++;
        totalTestsPassed += testsPassed;
        totalTests += tests[i].results.length;
        var div1 = document.createElement("div");
        div1.classList.toggle("test-results-" + color);
        var button = document.createElement("button");
        var title = document.createElement("span");
        title.style.cssFloat = "left";
        title.textContent = tests[i].title;
        var score = document.createElement("span");
        score.style.cssFloat = "right";
        score.textContent = testsPassed + "/" + tests[i].results.length;
        var div2 = document.createElement("div");
        div2.style.display = "none";
        var div3 = document.createElement("div");
        div3.classList.toggle("individual-test-results-" + color);
        var testDescriptionTemplate = document.createElement("span");
        testDescriptionTemplate.style.paddingLeft = "8pt";
        var testResultTemplate = document.createElement("span");
        testResultTemplate.style.cssFloat = "right";
        testResultTemplate.style.paddingRight = "8pt";
        for (var j = 0; j < tests[i].results.length; j++) {
            var test = div3.cloneNode(true);
            var testDescription = testDescriptionTemplate.cloneNode();
            var testResult = testResultTemplate.cloneNode();
            if (!tests[i].results[j])
                test.style.backgroundColor = "#D34F4F";
            testDescription.textContent = tests[i].testDescriptions[j];
            testResult.textContent = tests[i].results[j];
            test.appendChild(testDescription);
            test.appendChild(testResult);
            div2.appendChild(test);
        }
        button.appendChild(title);
        button.appendChild(score);
        button.div = div2;
        button.onclick = function () { expandOrCollapseTestResults(this.div); };
        div1.appendChild(button);
        div1.appendChild(div2);
        document.getElementById(divId).appendChild(div1);
    }
    var div1 = document.createElement("div");
    div1.style.marginTop = "8pt";
    div1.style.marginBottom = "8pt";
    div1.style.paddingLeft = "16pt";
    div1.style.paddingRight = "16pt";
    div1.style.paddingTop = "8pt";
    div1.style.paddingBottom = "8pt";
    div1.style.fontSize = "xx-large";
    div1.style.color = "#FFFFFF";
    var title = document.createElement("span");
    title.style.cssFloat = "left";
    title.textContent = testType;
    var score = document.createElement("span");
    score.style.cssFloat = "right";
    score.textContent = totalTestsPassed + "/" + totalTests;
    div1.appendChild(title);
    div1.appendChild(score);
    document.getElementById(divId).insertBefore(div1, document.getElementById(divId).firstChild);
}
function expandOrCollapseTestResults(div) {
    if (div.style.display == "none")
        div.style.display = "block";
    else
        div.style.display = "none";
}