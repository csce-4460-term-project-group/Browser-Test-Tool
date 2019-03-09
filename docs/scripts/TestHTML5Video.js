function TestHTML5Video() {
    var test = new BrowserTest();
    test.title = "Video";
    test.testDescriptions = ["MP4 (AVC/H.264)", "MP4 (HEVC/H.265)", "Ogg (Theora)", "WebM (VP8)", "WebM (VP9)"];
    var videoFormats = ["video/mp4; codecs=avc1.42E01E", "video/mp4; codecs=hev1", "video/ogg; codecs=theora", "video/webm; codecs=vp8", "video/webm; codecs=vp9"];
    var video = document.createElement("video");
    if (video instanceof HTMLVideoElement)
        for (var i = 0; i < videoFormats.length; i++) {
            var canPlay = video.canPlayType(videoFormats[i]);
            test.results.push(canPlay == "maybe" || canPlay == "probably");
        }
    else
        for (var i = 0; i < videoFormats.length; i++)
            test.results.push(false);
    return test;
}