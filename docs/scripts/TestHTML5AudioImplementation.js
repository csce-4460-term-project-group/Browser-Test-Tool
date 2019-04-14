var totalTestsHTML5Audio = 3, testsCompletedHTML5Audio = 0;

function TestHTML5AudioImplementation() {
    var test = new BrowserTest();
    test.title = "Audio";
    var formats = ["MP3", "Ogg", "WAV"];
    var files = ["audio.mp3", "audio.ogg", "audio.wav"];
    for (var i = 0; i < formats.length; i++) {
        test.testDescriptions.push(formats[i]);
        var audio = new Audio("https://csce-4460-term-project-group.github.io/Browser-Test-Tool/test-audio/" + files[i]);
        audio.volume = 0;
        audio.addEventListener("canplaythrough", function (parameters) {
            var promise = parameters["audio"].play();
            promise.then(function () {
                parameters["test"].testDescriptionsUnsorted.push(parameters["format"]);
                parameters["test"].results.push(true);
                testsCompletedHTML5Audio++;
                if (testsCompletedHTML5Audio == totalTestsHTML5Audio) {
                    parameters["test"].sort();
                    if (testsCompletedHTML5Video + testsCompletedHTML5Audio == totalTestsHTML5Video + totalTestsHTML5Audio)
                        document.dispatchEvent(new Event("html-5-implementation-tests-complete"));
                }
            }).catch(function () {
                parameters["test"].testDescriptionsUnsorted.push(parameters["format"]);
                parameters["test"].results.push(false);
                testsCompletedHTML5Audio++;
                if (testsCompletedHTML5Audio == totalTestsHTML5Audio) {
                    parameters["test"].sort();
                    if (testsCompletedHTML5Video + testsCompletedHTML5Audio == totalTestsHTML5Video + totalTestsHTML5Audio)
                        document.dispatchEvent(new Event("html-5-implementation-tests-complete"));
                }
            });
        }({ test: test, audio: audio, format: formats[i] }));
    }
    return test;
}