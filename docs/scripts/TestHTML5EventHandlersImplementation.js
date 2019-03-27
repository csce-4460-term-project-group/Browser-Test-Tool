function TestHTML5EventHandlersImplementation() {
    var test = new BrowserTest();
    test.title = "Event Handlers";
    var eventHandlers = ["onabort", "onauxclick", "onblur", "oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncuechange", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragexit", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadend", "onloadstart", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onwheel", "onpause", "onplay", "onplaying", "onprogress", "onratechange", "onreset", "onresize", "onscroll", "onseeked", "onseeking", "onselect", "onshow", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle", "onvolumechange", "onwaiting"];
    var events = ["abort", "auxclick", "blur", "cancel", "canplay", "canplaythrough", "change", "click", "close", "cuechange", "dblclick", "drag", "dragend", "dragenter", "dragexit", "dragleave", "dragover", "dragstart", "drop", "durationchange", "emptied", "ended", "error", "focus", "input", "invalid", "keydown", "keypress", "keyup", "load", "loadeddata", "loadedmetadata", "loadend", "loadstart", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseout", "mouseover", "mouseup", "wheel", "pause", "play", "playing", "progress", "ratechange", "reset", "resize", "scroll", "seeked", "seeking", "select", "show", "stalled", "submit", "suspend", "timeupdate", "toggle", "volumechange", "waiting"];
    var eventHandlersThatWork = [];
    var a = document.createElement("a");
    for (var i = 0; i < eventHandlers.length; i++) {
        var eventHandlerName = eventHandlers[i];
        a[eventHandlers[i]] = function () { eventHandlersThatWork.push(eventHandlerName); };
        var e = new Event(events[i]);
        a.dispatchEvent(e);
    }
    for (var i = 0; i < eventHandlers.length; i++)
        b: {
            test.testDescriptions.push(eventHandlers[i]);
            for (var j = 0; j < eventHandlersThatWork.length; j++)
                if (eventHandlers[i] == eventHandlersThatWork[j]) {
                    test.results.push(true);
                    break b;
                }
            test.results.push(false);
        }
    return test;
}