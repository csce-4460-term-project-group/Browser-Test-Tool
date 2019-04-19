function TestHTML5AudioImplementation() {
    var test = new BrowserTest();
    test.title = "Audio";
    var formats = ["MP3", "Ogg", "WAV"];
    var files = ["audio.mp3", "audio.ogg", "audio.wav"];
    var promises = [];
    for (var i = 0; i < formats.length; i++) {
        test.testDescriptions.push(formats[i]);
        var audio = new Audio("https://csce-4460-term-project-group.github.io/Browser-Test-Tool/test-audio/" + files[i]);
        audio.volume = 0;
        audio.addEventListener("canplaythrough", function (parameters) {
            var promise = parameters["audio"].play();
            promises.push(promise.then(function () {
                parameters["test"].testDescriptionsUnsorted.push(parameters["format"]);
                parameters["test"].results.push(true);
            }).catch(function () {
                parameters["test"].testDescriptionsUnsorted.push(parameters["format"]);
                parameters["test"].results.push(false);
            }));
        }({ test: test, audio: audio, format: formats[i] }));
    }
    test.promise = Promise.all(promises).then(function () {
        test.sort();
    });
    return test;
}