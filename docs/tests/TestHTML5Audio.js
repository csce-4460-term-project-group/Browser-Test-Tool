function TestHTML5Audio() {
    var test = new BrowserTest();
    test.title = "Audio";
    test.testDescriptions = ["MP3", "Ogg", "WAV"];
    var audioFormats = ["audio/mp3", "audio/ogg", "audio/wav"];
    var audio = document.createElement("audio");
    if (audio instanceof HTMLAudioElement)
        for (var i = 0; i < audioFormats.length; i++)
            test.results.push(audio.canPlayType(audioFormats[i]));
    else
        for (var i = 0; i < audioFormats.length; i++)
            test.results.push(false);
    return test;
}