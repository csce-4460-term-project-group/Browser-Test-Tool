function TestHTML5VideoImplementation() {
    var test = new BrowserTest();
    test.title = "Video";
    var formats = ["MP4 (AVC/H.264)", "MP4 (HEVC/H.265)", "Ogg (Theora)", "WebM (VP8)", "WebM (VP9)"];
    var files = ["video-h264.mp4", "video-h265.mp4", "video-theora.ogv", "video-vp8.webm", "video-vp9.webm"];
    var promises = [];
    for (var i = 0; i < formats.length; i++) {
        test.testDescriptions.push(formats[i]);
        var video = document.createElement("video");
        video.src = "https://csce-4460-term-project-group.github.io/Browser-Test-Tool/test-video/" + files[i];
        video.volume = 0;
        video.addEventListener("canplaythrough", function (parameters) {
            var promise = parameters["video"].play();
            promises.push(promise.then(function () {
                parameters["test"].testDescriptionsUnsorted.push(parameters["format"]);
                parameters["test"].results.push(true);
            }).catch(function () {
                parameters["test"].testDescriptionsUnsorted.push(parameters["format"]);
                parameters["test"].results.push(false);
            }));
        }({ test: test, video: video, format: formats[i] }));
    }
    test.promise = Promise.all(promises).then(function () {
        test.sort();
    });
    return test;
}