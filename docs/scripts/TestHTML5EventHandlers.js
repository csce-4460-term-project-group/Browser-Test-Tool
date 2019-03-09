function TestHTML5EventHandlers() {
    var test = new BrowserTest();
    test.title = "Event Handlers";
    var eventHandlers = ["onabort", "onauxclick", "onblur", "oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncuechange", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragexit", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadend", "onloadstart", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onwheel", "onpause", "onplay", "onplaying", "onprogress", "onratechange", "onreset", "onresize", "onscroll", "onseeked", "onseeking", "onselect", "onshow", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle", "onvolumechange", "onwaiting"];
    for (var i = 0; i < eventHandlers.length; i++) {
        test.testDescriptions.push(eventHandlers[i]);
        test.results.push(eventHandlers[i] in HTMLElement.prototype);
    }
    return test;
}