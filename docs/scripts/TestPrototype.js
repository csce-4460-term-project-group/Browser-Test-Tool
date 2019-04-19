function BrowserTest() {
    this.title = "";
    this.testDescriptions = [];
    this.results = [];
    this.testDescriptionsUnsorted = [];
}
BrowserTest.prototype.title;
BrowserTest.prototype.testDescriptions;
BrowserTest.prototype.results;
BrowserTest.prototype.testDescriptionsUnsorted;
BrowserTest.prototype.sort = function () {
    if (this.testDescriptionsUnsorted) {
        var resultsSorted = [];
        for (var i = 0; i < this.testDescriptions.length; i++)
            for (var j = 0; j < this.testDescriptionsUnsorted.length; j++)
                if (this.testDescriptionsUnsorted[j] == this.testDescriptions[i]) {
                    resultsSorted.push(this.results[j]);
                    break;
                }
        this.results = resultsSorted;
    }
};
BrowserTest.prototype.promise;
function getTestPromises(Tests) {
    var promises = [];
    for (var i = 0; i < Tests.length; i++)
        if (Tests[i].promise)
            promises.push(Tests[i].promise);
    return promises;
}