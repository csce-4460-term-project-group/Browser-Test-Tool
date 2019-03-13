function TestCSSValuesAndUnits() {
    var test = new BrowserTest();
    test.title = "Values and Units Module Level 3";
    test.testDescriptions = ["CSS-wide keywords: inital", "CSS-wide keywords: inherit", "CSS-wide keywords: unset", "Quoted Strings", "Resource Locators", "Integers", "Real Numbers", "Percentages",
        "Relative length units: 'em'", "Relative length units: 'ex'", "Relative length units: 'ch'", "Relative length units: 'rem'", "Relative length units: 'vw'", "Relative length units: 'vh'", "Relative length units: 'vmin'", "Relative length units: 'vmax'",
        "Absolute length units: 'cm'", "Absolute length units: 'mm'", "Absolute length units: 'Q'", "Absolute length units: 'in'", "Absolute length units: 'pc'", "Absolute length units: 'pt'", "Absolute length units: 'px'",
        "Angle units: 'deg'", "Angle units: 'grad'", "Angle units: 'rad'", "Angle units: 'turn'", "Duration units: 's'", "Duration units: 'ms'", "Mathematical Expressions: 'calc()'", "Attribute References: 'attr()'"];
    var properties = ["font-family", "font-family", "font-family", "font-family", "background", "z-index", "transform", "width",
        "width", "width", "width", "width", "width", "width", "width", "width",
        "width", "width", "width", "width", "width", "width", "width",
        "transform", "transform", "transform", "transform", "transition", "transition", "width", "content"];
    var values = ["initial", "inherit", "unset", "'serif'", "url()", "1", "scale(.5)", "100%",
        "1em", "1ex", "1ch", "1rem", "1vw", "1vh", "1vmin", "1vmax",
        "1cm", "1mm", "1Q", "1in", "1pc", "1pt", "1px",
        "rotate(1deg)", "rotate(1grad)", "rotate(1rad)", "rotate(1turn)", "width 1s", "width 1ms", "calc(10% - 1px)", "attr(id)"];
    for (var i = 0; i < test.testDescriptions.length; i++)
        test.results.push(Modernizr.testAllProps(properties[i], values[i]));
    return test;
}