var totalTestsHTML5Video = 5, testsCompletedHTML5Video = 0;

function TestHTML5VideoImplementation() {
    var test = new BrowserTest();
    test.title = "Video";
    var formats = ["MP4 (AVC/H.264)", "MP4 (HEVC/H.265)", "Ogg (Theora)", "WebM (VP8)", "WebM (VP9)"];
    var files = ["video-h264.mp4", "video-h265.mp4", "video-theora.ogv", "video-vp8.webm", "video-vp9.webm"];
    for (var i = 0; i < formats.length; i++) {
        test.testDescriptions.push(formats[i]);
        var video = document.createElement("video");
        video.src = "https://csce-4460-term-project-group.github.io/Browser-Test-Tool/test-video/" + files[i];
        video.volume = 0;
        video.addEventListener("canplaythrough", function (parameters) {
            var promise = parameters["video"].play();
            promise.then(function () {
                parameters["test"].testDescriptionsUnsorted.push(parameters["format"]);
                parameters["test"].results.push(true);
                testsCompletedHTML5Video++;
                if (testsCompletedHTML5Video == totalTestsHTML5Video) {
                    parameters["test"].sort();
                    if (testsCompletedHTML5Video + testsCompletedHTML5Audio == totalTestsHTML5Video + totalTestsHTML5Audio)
                        document.dispatchEvent(new Event("html-5-implementation-tests-complete"));
                }
            }).catch(function () {
                parameters["test"].testDescriptionsUnsorted.push(parameters["format"]);
                parameters["test"].results.push(false);
                testsCompletedHTML5Video++;
                if (testsCompletedHTML5Video == totalTestsHTML5Video) {
                    parameters["test"].sort();
                    if (testsCompletedHTML5Video + testsCompletedHTML5Audio == totalTestsHTML5Video + totalTestsHTML5Audio)
                        document.dispatchEvent(new Event("html-5-implementation-tests-complete"));
                }
            });
        }({ test: test, video: video, format: formats[i] }));
    }
    return test;
}