var mainScript = (function() {

  // Sets Default 'connected' property to no in both arrays
  var _addConnectedDefaultValue = function(array) {
    var newArray = array.map(function(obj) {
      obj["connected"] = "no";
      return obj;
    })
    return newArray;
  }

  // Deep comparison of two objects
  var _isEqual = function(objOne, objTwo) {
    return JSON.stringify(objOne) === JSON.stringify(objTwo);
  };

  // Creates the connected search results array
  var _createConnectedSearchResults = function(searchResultsArray, connectionsResultsArray) {

    // Sets connected property to 'no' in all Objects of both arrays
    var searchResultsArrayNew = _addConnectedDefaultValue(searchResultsArray);
    var connectionsResultsArrayNew = _addConnectedDefaultValue(connectionsResultsArray);

    // Iterates through each item searchResultsArrayNew and searches for
    // match in connectionResultsArrayNew
    var connectedSearchResultsArray = searchResultsArrayNew.map(function(objS) {
      connectionsResultsArrayNew.forEach(function(objC) {
        if (_isEqual(objS, objC)) {
          return objS["connected"] = "yes";
        }
      })
      return objS;
    })

    console.log(connectedSearchResultsArray);
    return connectedSearchResultsArray;
  };

  // Make the functions accessible outside the module
  return {
    addConnectedDefaultValue: _addConnectedDefaultValue,
    createConnectedSearchResults: _createConnectedSearchResults,
    isEqual: _isEqual
  }
})();

module.exports = mainScript;
