function TestHTML5Scripting() {
    var test = new BrowserTest();
    test.title = "Scripting";
    function testScript(script) {
        try {
            var a = new Function(script);
            a();
            return true;
        } catch (e) {
            return false;
        }
    }
    var descriptions = ["ECMAScript 2016: Array.prototype.includes()", "ECMAScript 2016: Exponentiation Operator (**)",
        "ECMAScript 2017: Async Functions", "ECMAScript 2017: Object.entries()", "ECMAScript 2017: Object.getOwnPropertyDescriptors()", "ECMAScript 2017: Object.values()", "ECMAScript 2017: String Padding", "ECMAScript 2017: Trailing Commas in Function Parameter",
        "ECMAScript 2018: Asynchronous Iteration", "ECMAScript 2018: Object Rest/Spread Properties", "ECMAScript 2018: Promise.prototype.finally()",
        "ECMAScript 2018: RegExp Lookbehind Assertions", "ECMAScript 2018: RegExp Named Capture Groups", "ECMAScript 2018: RegExp s (dotAll) Flag", "ECMAScript 2018: RegExp Unicode Property Escapes", "ECMAScript 2018: Template Literal Revision"];
    var scripts = ["var a = [1, 2, 3]; a.includes(4);", "var a = 5**5;",
        "var a = async function(){};", "Object.entries([]);", "Object.getOwnPropertyDescriptors([]);", "Object.values([]);", "var a = ''; a.padStart(5, 'a');", "var a = function(b,){};",
        "var a = []; var b = a[Symbol.asyncIterator];", "var a = ['string1', 'string2', 'string3', 'string4']; var [b, c, ...d] = a;", "var a = new Promise(function () { }).finally(function () { });",
        "var regex = /(?<=Tom)Bob/; var matches = regex.exec('JackBobTomBobJaneBob');", "var regex = /(?<month>[A-za-z]*) (?<day>[0-9]*), (?<year>[0-9]*)/; var matches = regex.exec('June 15, 2018');", "var regex = /./s;", "var regex = /\\p{Alphabetic}/u;", "function tag(str) { return { cooked: str[0], raw: str.raw[0] }; } tag`\\unicode`;"];
    for (var i = 0; i < scripts.length; i++) {
        test.testDescriptions.push(descriptions[i]);
        test.results.push(testScript(scripts[i]));
    }
    return test;
}