var mainScript = require('./main.js');

var searchResultsArray = [{
  "username": "abc",
  "userid": 23213
}, {
  "username": "ghi",
  "userid": 9898
}, {
  "username": "def",
  "userid": 45646
}];

var connectionsResultsArray = [{
  "username": "abc",
  "userid": 23213
}, {
  "username": "ghi",
  "userid": 9898
}, {
  "username": "xyz",
  "userid": 7868
}];

mainScript.createConnectedSearchResults(searchResultsArray, connectionsResultsArray);
