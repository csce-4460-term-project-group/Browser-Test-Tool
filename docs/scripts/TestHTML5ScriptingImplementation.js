function TestHTML5ScriptingImplementation() {
    var test = new BrowserTest();
    test.title = "Scripting";
    var testScript = function (test, description, script) {
        try {
            var promise = new Function("test", "description", "return new Promise(function (resolve, reject) { " + script + " }).then(function () { test.testDescriptionsUnsorted.push(description); test.results.push(true); }).catch(function () { test.testDescriptionsUnsorted.push(description); test.results.push(false); });");
            return promise(test, description);
        } catch (e) {
            test.testDescriptionsUnsorted.push(description);
            test.results.push(false);
        }
    }
    var descriptions = ["ECMAScript 2016: Array.prototype.includes()", "ECMAScript 2016: Exponentiation Operator (**)",
        "ECMAScript 2017: Async Functions", "ECMAScript 2017: Object.entries()", "ECMAScript 2017: Object.getOwnPropertyDescriptors()", "ECMAScript 2017: Object.values()", "ECMAScript 2017: String Padding", "ECMAScript 2017: Trailing Commas in Function Parameter",
        "ECMAScript 2018: Asynchronous Iteration", "ECMAScript 2018: Object Rest/Spread Properties", "ECMAScript 2018: Promise.prototype.finally()",
        "ECMAScript 2018: RegExp Lookbehind Assertions", "ECMAScript 2018: RegExp Named Capture Groups", "ECMAScript 2018: RegExp s (dotAll) Flag", "ECMAScript 2018: RegExp Unicode Property Escapes", "ECMAScript 2018: Template Literal Revision"];
    var scripts = ["var a = [1, 2, 3]; if (a.includes(3) == true) resolve(); else reject();",//Array.prototype.includes()
        "var a = 5 ** 5; if (a == 3125) resolve(); else reject();",//Exponentiation Operator (**)
        "var promise = new Promise(function (resolve) { resolve(5); }); var a = async function () { if (await promise == 5) resolve(); else reject(); }; a();",//async function
        "const objs = { A: 1, B: 2 }; const v = Object.entries(objs)[1]; if (v.toString() == 'B,2') resolve(); else reject();",//object.entries()
        "var obj = { property: 0, set prop(x) { this.d = x; }, get prop() { return this.d; } }; obj.prop = 20; const obj2 = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj)); var o = Object.getOwnPropertyDescriptors(obj); var d = Object.getOwnPropertyDescriptors(obj2); o.prop.set(30); d.prop.set(30); if (o.prop.get() == d.prop.get()) resolve(); else reject();",//Object.getOwnPropertyDescriptors()
        "const objs = { A: 1, B: 2 }; const v = Object.values(objs); if (v.toString() == '1,2') resolve(); else reject();",//Object.values()
        "var st = '1'; var padSt = st.padStart(5, '*'); var padEn = st.padEnd(5, '*'); if (padSt == '****1' && padEn == '1****') resolve(); else reject();",//String Padding
        "function myFunc(a, b, ) { return (a + b); } var c = 2; var d = 3; if (myFunc(c, d) == '5') resolve(); else reject();",//Trailing Commas in Function Parameter
        "var asyncIterable = new Object(); asyncIterable[Symbol.asyncIterator] = async function* () { yield 5; yield 6; yield 7; }; var a = async function () { var asyncIterator = asyncIterable[Symbol.asyncIterator](); await asyncIterator.next(); await asyncIterator.next(); if ((await asyncIterator.next()).value == 7) resolve(); else reject(); }; a();",//Asynchronous Iteration
        "var a = ['string1', 'string2', 'string3', 'string4']; var [b, c, ...d] = a; if (d.toString() == ['string3', 'string4'].toString()) resolve(); else reject();",//Object Rest/Spread Properties
        "new Promise(function (resolve) { resolve(); }).finally(function () { resolve(); });",//Promise.prototype.finally()
        "var regex = /(?<=Tom)Bob/; var matches = regex.exec('JackBobTomBobJaneBob'); if (matches.index == 10) resolve(); else reject();",//RegExp Lookbehind Assertions
        "var regex = /(?<month>[A-za-z]*) (?<day>[0-9]*), (?<year>[0-9]*)/; var matches = regex.exec('June 15, 2018'); if (matches.groups.day == '15') resolve(); else reject();",//RegExp Named Capture Groups
        "var regex = /./s; var matches = regex.exec('\\n'); if (matches) resolve(); else reject();",//RegExp s (dotAll) Flag
        "var regex = /\\p{Alphabetic}/u; var matches = regex.exec('1a2b3c'); if (matches) resolve(); else reject();",//RegExp Unicode Property Escapes
        "function tag(str) { return { cooked: str[0], raw: str.raw[0] }; } if (tag`\\unicode`.cooked == null) resolve(); else reject();"//Template Literal Revision
    ];
    var promises = [];
    for (var i = 0; i < descriptions.length; i++)
        promises.push(testScript(test, descriptions[i], scripts[i]));
    test.promise = Promise.all(promises).then(function () {
        test.sort();
    });
    return test;
}