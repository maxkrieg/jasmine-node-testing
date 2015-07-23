var mainScript = require('../main.js');

describe("setting connected default value", function() {

  var testArray1 = [{
    "username": "abc",
    "userid": 23213
  }, {
    "username": "ghi",
    "userid": 9898
  }, {
    "username": "def",
    "userid": 45646
  }];

  var testArray2 = [{
    "username": "abc",
    "userid": 23213,
    "connected": "no"
  }, {
    "username": "ghi",
    "userid": 9898,
    "connected": "no"
  }, {
    "username": "def",
    "userid": 45646,
    "connected": "no"
  }];

  it("should prove that the addConnectedDefaultValue is defined", function() {
    expect(mainScript.addConnectedDefaultValue).toBeDefined();
  })

  it("should add a connected: no key, value pair to the object", function() {
    expect(mainScript.addConnectedDefaultValue(testArray1)).toEqual(testArray2);
  })

})

describe("object matcher", function() {

  var testObjOne = {
    "username": "ghi",
    "userid": 9898
  };
  var testObjTwo = {
    "username": "ghi",
    "userid": 9898
  };
  var testObjThree = {
    "username": "ghi",
    "userid": 9899
  };

  it("should prove that isEqual function is defined", function() {
    expect(mainScript.isEqual).toBeDefined();
  })

  it("should prove that both objects are the same", function() {
    expect(mainScript.isEqual(testObjOne, testObjTwo)).toBe(true);
  })

  it("should prove that the objects are different", function() {
    expect(mainScript.isEqual(testObjTwo, testObjThree)).toBe(false);
  })


})

describe("array with connected property", function() {

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

  var connectedSearchResultsArray = [{
    "username": "abc",
    "userid": 23213,
    "connected": "yes"
  }, {
    "username": "ghi",
    "userid": 9898,
    "connected": "yes"
  }, {
    "username": "def",
    "userid": 45646,
    "connected": "no"
  }];


  it("should prove that createConnectedSearchResults function is defined", function() {
    expect(mainScript.createConnectedSearchResults).toBeDefined();
  })

  it("should madd accurate yes/no values for connected property", function() {
    expect(mainScript.createConnectedSearchResults(searchResultsArray, connectionsResultsArray)).toEqual(connectedSearchResultsArray);
  })


})
