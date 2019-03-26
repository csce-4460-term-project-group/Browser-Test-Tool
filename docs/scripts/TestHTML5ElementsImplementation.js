function TestHTML5ElementsImplementation() {
    var test = new BrowserTest();
    test.title = "Elements";
    var htmlElements = [];
    var interfaces = [];
    var attributes = [];

    htmlElements.push("html");
    interfaces.push(["HTMLHtmlElement"]);
    attributes.push([]);

    htmlElements.push("head");
    interfaces.push(["HTMLHeadElement"]);
    attributes.push([]);

    htmlElements.push("title");
    interfaces.push(["HTMLTitleElement"]);
    attributes.push(["text"]);

    htmlElements.push("base");
    interfaces.push(["HTMLBaseElement"]);
    attributes.push(["href", "target"]);

    htmlElements.push("link");
    interfaces.push(["HTMLLinkElement"]);
    attributes.push(["href", "crossOrigin", "rel", "rev", "media", "nonce", "hreflang", "type", "sizes", "referrerPolicy"]);

    htmlElements.push("meta");
    interfaces.push(["HTMLMetaElement"]);
    attributes.push(["name", "httpEquiv", "content"]);

    htmlElements.push("style");
    interfaces.push(["HTMLStyleElement"]);
    attributes.push(["media", "nonce", "type", "title"]);

    htmlElements.push("body");
    interfaces.push(["HTMLBodyElement"]);
    attributes.push(["onafterprint", "onbeforeprint", "onbeforeunload", "onhashchange", "onlanguagechange", "onmessage", "onoffline", "ononline", "onpagehide", "onpageshow", "onpopstate", "onrejectionhandled", "onstorage", "onunhandledrejection", "onunload"]);

    htmlElements.push("article");
    interfaces.push([]);
    attributes.push([]);

    htmlElements.push("section");
    interfaces.push([]);
    attributes.push([]);

    htmlElements.push("nav");
    interfaces.push([]);
    attributes.push([]);

    htmlElements.push("aside");
    interfaces.push([]);
    attributes.push([]);

    htmlElements.push("h1");
    interfaces.push(["HTMLHeadingElement"]);
    attributes.push([]);

    htmlElements.push("h2");
    interfaces.push(["HTMLHeadingElement"]);
    attributes.push([]);

    htmlElements.push("h3");
    interfaces.push(["HTMLHeadingElement"]);
    attributes.push([]);

    htmlElements.push("h4");
    interfaces.push(["HTMLHeadingElement"]);
    attributes.push([]);

    htmlElements.push("h5");
    interfaces.push(["HTMLHeadingElement"]);
    attributes.push([]);

    htmlElements.push("h6");
    interfaces.push(["HTMLHeadingElement"]);
    attributes.push([]);

    htmlElements.push("header");
    interfaces.push([]);
    attributes.push([]);

    htmlElements.push("footer");
    interfaces.push([]);
    attributes.push([]);

    htmlElements.push("p");
    interfaces.push(["HTMLParagraphElement"]);
    attributes.push([]);

    htmlElements.push("address");
    interfaces.push([]);
    attributes.push([]);

    htmlElements.push("hr");
    interfaces.push(["HTMLHRElement"]);
    attributes.push([]);

    htmlElements.push("pre");
    interfaces.push(["HTMLPreElement"]);
    attributes.push([]);

    htmlElements.push("blockquote");
    interfaces.push(["HTMLQuoteElement"]);
    attributes.push(["cite"]);

    htmlElements.push("ol");
    interfaces.push(["HTMLOListElement"]);
    attributes.push(["reversed", "start", "type"]);

    htmlElements.push("ul");
    interfaces.push(["HTMLUListElement"]);
    attributes.push([]);

    htmlElements.push("li");
    interfaces.push(["HTMLLIElement"]);
    attributes.push(["value"]);

    htmlElements.push("dl");
    interfaces.push(["HTMLDListElement"]);
    attributes.push([]);

    htmlElements.push("dt");
    interfaces.push([]);
    attributes.push([]);

    htmlElements.push("dd");
    interfaces.push([]);
    attributes.push([]);

    htmlElements.push("figure");
    interfaces.push([]);
    attributes.push([]);

    htmlElements.push("figcaption");
    interfaces.push([]);
    attributes.push([]);

    htmlElements.push("main");
    interfaces.push([]);
    attributes.push([]);

    htmlElements.push("div");
    interfaces.push(["HTMLDivElement"]);
    attributes.push([]);

    htmlElements.push("a");
    interfaces.push(["HTMLAnchorElement"]);
    attributes.push(["href", "target", "download", "rel", "rev", "relList", "hreflang", "type", "text", "referrerPolicy", "origin", "protocol", "username", "password", "host", "hostname", "port", "pathname", "search", "hash"]);

    htmlElements.push("em");
    interfaces.push([]);
    attributes.push([]);

    htmlElements.push("strong");
    interfaces.push([]);
    attributes.push([]);

    htmlElements.push("small");
    interfaces.push([]);
    attributes.push([]);

    htmlElements.push("s");
    interfaces.push([]);
    attributes.push([]);

    htmlElements.push("cite");
    interfaces.push([]);
    attributes.push([]);

    htmlElements.push("q");
    interfaces.push(["HTMLQuoteElement"]);
    attributes.push(["cite"]);

    htmlElements.push("dfn");
    interfaces.push([]);
    attributes.push([]);

    htmlElements.push("abbr");
    interfaces.push([]);
    attributes.push([]);

    htmlElements.push("ruby");
    interfaces.push([]);
    attributes.push([]);

    htmlElements.push("rb");
    interfaces.push([]);
    attributes.push([]);

    htmlElements.push("rt");
    interfaces.push([]);
    attributes.push([]);

    htmlElements.push("rtc");
    interfaces.push([]);
    attributes.push([]);

    htmlElements.push("rp");
    interfaces.push([]);
    attributes.push([]);

    htmlElements.push("data");
    interfaces.push(["HTMLDataElement"]);
    attributes.push(["value"]);

    htmlElements.push("time");
    interfaces.push(["HTMLTimeElement"]);
    attributes.push(["dateTime"]);

    htmlElements.push("code");
    interfaces.push([]);
    attributes.push([]);

    htmlElements.push("var");
    interfaces.push([]);
    attributes.push([]);

    htmlElements.push("samp");
    interfaces.push([]);
    attributes.push([]);

    htmlElements.push("kbd");
    interfaces.push([]);
    attributes.push([]);

    htmlElements.push("sub");
    interfaces.push([]);
    attributes.push([]);

    htmlElements.push("sup");
    interfaces.push([]);
    attributes.push([]);

    htmlElements.push("i");
    interfaces.push([]);
    attributes.push([]);

    htmlElements.push("b");
    interfaces.push([]);
    attributes.push([]);

    htmlElements.push("u");
    interfaces.push([]);
    attributes.push([]);

    htmlElements.push("mark");
    interfaces.push([]);
    attributes.push([]);

    htmlElements.push("bdi");
    interfaces.push([]);
    attributes.push([]);

    htmlElements.push("bdo");
    interfaces.push([]);
    attributes.push([]);

    htmlElements.push("span");
    interfaces.push(["HTMLSpanElement"]);
    attributes.push([]);

    htmlElements.push("br");
    interfaces.push(["HTMLBRElement"]);
    attributes.push([]);

    htmlElements.push("wbr");
    interfaces.push([]);
    attributes.push([]);

    htmlElements.push("ins");
    interfaces.push(["HTMLModElement"]);
    attributes.push(["cite", "dateTime"]);

    htmlElements.push("del");
    interfaces.push(["HTMLModElement"]);
    attributes.push(["cite", "dateTime"]);

    htmlElements.push("picture");
    interfaces.push(["HTMLPictureElement"]);
    attributes.push([]);

    htmlElements.push("source");
    interfaces.push(["HTMLSourceElement"]);
    attributes.push(["src", "type", "srcset", "sizes", "media"]);

    htmlElements.push("img");
    interfaces.push(["HTMLImageElement"]);
    attributes.push(["alt", "src", "srcset", "sizes", "crossOrigin", "useMap", "longDesc", "isMap", "width", "height", "naturalWidth", "naturalHeight", "complete", "currentSrc", "referrerPolicy"]);

    htmlElements.push("iframe");
    interfaces.push(["HTMLIFrameElement"]);
    attributes.push(["src", "srcdoc", "name", "sandbox", "allowFullscreen", "allowPaymentRequest", "width", "height", "referrerPolicy", "contentDocument", "contentWindow"]);

    htmlElements.push("embed");
    interfaces.push(["HTMLEmbedElement"]);
    attributes.push(["src", "type", "width", "height"]);

    htmlElements.push("object");
    interfaces.push(["HTMLObjectElement"]);
    attributes.push(["data", "type", "typeMustMatch", "name", "form", "width", "height", "contentDocument", "contentWindow", "willValidate", "validity", "validationMessage", "checkValidity", "reportValidity", "setCustomValidity"]);

    htmlElements.push("param");
    interfaces.push(["HTMLParamElement"]);
    attributes.push(["name", "value"]);

    htmlElements.push("video");
    interfaces.push(["HTMLMediaElement", "HTMLVideoElement"]);
    attributes.push(["width", "height", "videoWidth", "videoHeight", "poster", "error", "src", "srcObject", "currentSrc", "crossOrigin", "NETWORK_EMPTY", "NETWORK_IDLE", "NETWORK_LOADING", "NETWORK_NO_SOURCE", "networkState", "preload", "buffered", "load", "canPlayType", "HAVE_NOTHING", "HAVE_METADATA", "HAVE_CURRENT_DATA", "HAVE_FUTURE_DATA", "HAVE_ENOUGH_DATA", "readyState", "seeking", "currentTime", "fastSeek", "duration", "getStartDate", "paused", "defaultPlaybackRate", "playbackRate", "played", "seekable", "ended", "autoplay", "loop", "play", "pause", "controls", "volume", "muted", "defaultMuted", "audioTracks", "videoTracks", "textTracks", "addTextTrack"]);

    htmlElements.push("audio");
    interfaces.push(["HTMLMediaElement", "HTMLAudioElement"]);
    attributes.push(["error", "src", "srcObject", "currentSrc", "crossOrigin", "NETWORK_EMPTY", "NETWORK_IDLE", "NETWORK_LOADING", "NETWORK_NO_SOURCE", "networkState", "preload", "buffered", "load", "canPlayType", "HAVE_NOTHING", "HAVE_METADATA", "HAVE_CURRENT_DATA", "HAVE_FUTURE_DATA", "HAVE_ENOUGH_DATA", "readyState", "seeking", "currentTime", "fastSeek", "duration", "getStartDate", "paused", "defaultPlaybackRate", "playbackRate", "played", "seekable", "ended", "autoplay", "loop", "play", "pause", "controls", "volume", "muted", "defaultMuted", "audioTracks", "videoTracks", "textTracks", "addTextTrack"]);

    htmlElements.push("track");
    interfaces.push(["HTMLTrackElement"]);
    attributes.push(["kind", "src", "srclang", "label", "default", "NONE", "LOADING", "LOADED", "ERROR", "readyState", "track"]);

    htmlElements.push("map");
    interfaces.push(["HTMLMapElement"]);
    attributes.push(["name", "areas", "images"]);

    htmlElements.push("area");
    interfaces.push(["HTMLAreaElement"]);
    attributes.push(["alt", "coords", "shape", "target", "download", "rel", "relList", "hreflang", "type", "referrerPolicy", "href", "origin", "protocol", "username", "password", "host", "hostname", "port", "pathname", "search", "hash"]);

    htmlElements.push("table");
    interfaces.push(["HTMLTableElement"]);
    attributes.push(["caption", "createCaption", "deleteCaption", "tHead", "createTHead", "deleteTHead", "tFoot", "createTFoot", "deleteTFoot", "tBodies", "createTBody", "rows", "insertRow", "deleteRow"]);

    htmlElements.push("caption");
    interfaces.push(["HTMLTableCaptionElement"]);
    attributes.push([]);

    htmlElements.push("colgroup");
    interfaces.push(["HTMLTableColElement"]);
    attributes.push(["span"]);

    htmlElements.push("col");
    interfaces.push(["HTMLTableColElement"]);
    attributes.push(["span"]);

    htmlElements.push("tbody");
    interfaces.push(["HTMLTableSectionElement"]);
    attributes.push(["rows", "insertRow", "deleteRow"]);

    htmlElements.push("thead");
    interfaces.push(["HTMLTableSectionElement"]);
    attributes.push(["rows", "insertRow", "deleteRow"]);

    htmlElements.push("tfoot");
    interfaces.push(["HTMLTableSectionElement"]);
    attributes.push(["rows", "insertRow", "deleteRow"]);

    htmlElements.push("tr");
    interfaces.push(["HTMLTableRowElement"]);
    attributes.push(["rowIndex", "sectionRowIndex", "cells", "insertCell", "deleteCell"]);

    htmlElements.push("td");
    interfaces.push(["HTMLTableCellElement", "HTMLTableDataCellElement"]);
    attributes.push(["colSpan", "rowSpan", "headers", "cellIndex"]);

    htmlElements.push("th");
    interfaces.push(["HTMLTableCellElement", "HTMLTableHeaderCellElement"]);
    attributes.push(["colSpan", "rowSpan", "headers", "cellIndex", "scope", "abbr"]);

    htmlElements.push("form");
    interfaces.push(["HTMLFormElement"]);
    attributes.push(["acceptCharset", "action", "autocomplete", "enctype", "encoding", "method", "name", "noValidate", "target", "elements", "length", "submit", "reset", "checkValidity", "reportValidity"]);

    htmlElements.push("label");
    interfaces.push(["HTMLLabelElement"]);
    attributes.push(["form", "htmlFor", "control"]);

    htmlElements.push("input");
    interfaces.push(["HTMLInputElement"]);
    attributes.push(["accept", "alt", "autocomplete", "autofocus", "defaultChecked", "checked", "dirName", "disabled", "form", "files", "formAction", "formEnctype", "formMethod", "formNoValidate", "formTarget", "height", "indeterminate", "list", "max", "maxLength", "min", "minLength", "min", "multiple", "name", "pattern", "placeholder", "readOnly", "required", "size", "src", "step", "type", "defaultValue", "value", "valueAsDate", "valueAsNumber", "width", "stepUp", "stepDown", "willValidate", "validity", "validationMessage", "checkValidity", "reportValidity", "setCustomValidity", "labels", "select", "selectionStart", "selectionEnd", "selectionDirection", "setRangeText", "setSelectionRange"]);

    htmlElements.push("button");
    interfaces.push(["HTMLButtonElement"]);
    attributes.push(["form", "autofocus", "disabled", "form", "formAction", "formEnctype", "formMethod", "formNoValidate", "formTarget", "name", "type", "value", "willValidate", "validity", "validationMessage", "checkValidity", "reportValidity", "setCustomValidity", "labels"]);

    htmlElements.push("select");
    interfaces.push(["HTMLSelectElement"]);
    attributes.push(["autocomplete", "autofocus", "disabled", "form", "multiple", "name", "required", "size", "type", "options", "length", "item", "namedItem", "add", "remove", "selectedOptions", "selectedIndex", "value", "willValidate", "validity", "validationMessage", "checkValidity", "reportValidity", "setCustomValidity", "labels"]);

    htmlElements.push("datalist");
    interfaces.push(["HTMLDataListElement"]);
    attributes.push(["options"]);

    htmlElements.push("optgroup");
    interfaces.push(["HTMLOptGroupElement"]);
    attributes.push(["disabled", "label"]);

    htmlElements.push("option");
    interfaces.push(["HTMLOptionElement"]);
    attributes.push(["disabled", "form", "label", "defaultSelected", "selected", "value", "text", "index"]);

    htmlElements.push("textarea");
    interfaces.push(["HTMLTextAreaElement"]);
    attributes.push(["autocomplete", "autofocus", "cols", "dirName", "disabled", "form", "maxLength", "minLength", "name", "placeholder", "readOnly", "required", "rows", "wrap", "type", "defaultValue", "value", "textLength", "type", "defaultValue", "value", "textLength", "willValidate", "validity", "validationMessage", "checkValidity", "reportValidity", "setCustomValidity", "labels", "select", "selectionStart", "selectionEnd", "selectionDirection", "setRangeText", "setSelectionRange"]);

    htmlElements.push("output");
    interfaces.push(["HTMLOutputElement"]);
    attributes.push(["form", "name", "type", "defaultValue", "value", "willValidate", "validity", "validationMessage", "checkValidity", "reportValidity", "setCustomValidity", "labels"]);

    htmlElements.push("progress");
    interfaces.push(["HTMLProgressElement"]);
    attributes.push(["value", "max", "position", "labels"]);

    htmlElements.push("meter");
    interfaces.push(["HTMLMeterElement"]);
    attributes.push(["value", "min", "max", "low", "high", "optimum", "labels"]);

    htmlElements.push("fieldset");
    interfaces.push(["HTMLFieldSetElement"]);
    attributes.push(["disabled", "form", "name", "type", "elements", "willValidate", "validity", "validationMessage", "checkValidity", "reportValidity", "setCustomValidity"]);

    htmlElements.push("legend");
    interfaces.push(["HTMLLegendElement"]);
    attributes.push(["form"]);

    htmlElements.push("details");
    interfaces.push(["HTMLDetailsElement"]);
    attributes.push(["open"]);

    htmlElements.push("summary");
    interfaces.push([]);
    attributes.push([]);

    htmlElements.push("dialog");
    interfaces.push(["HTMLDialogElement"]);
    attributes.push(["open", "returnValue", "show", "showModal", "close"]);

    htmlElements.push("script");
    interfaces.push(["HTMLScriptElement"]);
    attributes.push(["src", "type", "charset", "async", "defer", "crossOrigin", "text", "nonce"]);

    htmlElements.push("noscript");
    interfaces.push([]);
    attributes.push([]);

    htmlElements.push("template");
    interfaces.push(["HTMLTemplateElement"]);
    attributes.push(["content"]);

    htmlElements.push("canvas");
    interfaces.push(["HTMLCanvasElement"]);
    attributes.push(["width", "height", "getContext", "probablySupportsContext", "toDataURL", "toBlob"]);

    for (var i = 0; i < htmlElements.length; i++)
        a: {
            test.testDescriptions.push("<" + htmlElements[i] + ">");
            var htmlElement = document.createElement(htmlElements[i]);
            var elementInterfaces = interfaces[i];
            var elementAttributes = attributes[i];
            if (htmlElement instanceof HTMLUnknownElement) {
                test.results.push(false);
                break a;
            }
            for (var j = 0; j < elementInterfaces.length; j++) {
                if (elementInterfaces[j] in window)
                    if (htmlElement instanceof window[elementInterfaces[j]])
                        continue;
                test.results.push(false);
                break a;
            }
            for (var j = 0; j < elementAttributes.length; j++) {
                if (elementAttributes[j] in htmlElement)
                    continue;
                test.results.push(false);
                break a;
            }
            test.results.push(true);
        }
    return test;
}