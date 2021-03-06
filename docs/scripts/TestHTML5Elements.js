function TestHTML5Elements() {
	var test = new BrowserTest();
    test.title = "Elements";
	var arrayOfElements = ["html", "head", "title", "base", "link", "meta", "style", "body", "article", "section", "nav", "aside", "h1", "h2", "h3", "h4", "h5", "h6", "header", "footer", "p", "address", "hr", "pre", "blockquote", "ol", "ul", "li", "dl", "dt", "dd", "figure", "figcaption", "main", "div", "a", "em", "strong", "small", "s", "cite", "q", "dfn", "abbr", "ruby", "rb", "rt", "rtc", "rp", "data", "time", "code", "var", "samp", "kbd", "sub", "sup", "i", "b", "u", "mark", "bdi", "bdo", "span", "br", "wbr", "ins", "del", "picture", "source", "img", "iframe", "embed", "object", "param", "video", "audio", "track", "map", "area", "table", "caption", "colgroup", "col", "tbody", "thead", "tfoot", "tr", "td", "th", "form", "label", "input", "button", "select", "datalist", "optgroup", "option", "textarea", "output", "progress", "meter", "fieldset", "legend", "details", "summary", "dialog", "script", "noscript", "template", "canvas"];
	for (var i = 0; i < arrayOfElements.length; i++) {
		test.testDescriptions.push("<" + arrayOfElements[i] + ">");
		if (document.createElement(arrayOfElements[i]) instanceof HTMLUnknownElement)
			test.results.push(false);
		else
			test.results.push(true);
	}
	return test;
}