window.onload = init;
//Bind out events here
function init() {
  document.getElementById("searchButton").onclick = searchBoy;
}

//Submit button
function searchBoy(e) {
  e.preventDefault();
  let searchValue = document.getElementById("searchBox").value;
  let grade = parseGrade(searchValue);
  let subject = parseSubject(searchValue);
  submitSearch(grade, subject);
}

//actual ajax to submit to the backend
function submitSearch(grade, subject) {
  let id = "/api/lessons?";
  id = id + "grade=" + (grade || "e") + "&";
  id = id + "subject=" + (subject || "e") + "&";
  id += "rating=e";

  $.ajax(id, {
    type: "get"
  }).then(function(res) {
    console.log(res);
    window.location.replace("." + id);
  });
}

//Grade parsing
function parseGrade(searchValue) {
  if (
    searchValue.includes("first") ||
    searchValue.includes(" 1 ") ||
    searchValue.includes("1st")
  ) {
    return 1;
  } else if (
    searchValue.includes("second") ||
    searchValue.includes(" 2 ") ||
    searchValue.includes("2nd")
  ) {
    return 2;
  } else if (
    searchValue.includes("third") ||
    searchValue.includes(" 3 ") ||
    searchValue.includes("3rd")
  ) {
    return 3;
  } else if (
    searchValue.includes("fourth") ||
    searchValue.includes(" 4 ") ||
    searchValue.includes("4th")
  ) {
    return 4;
  } else if (
    searchValue.includes("fifth") ||
    searchValue.includes(" 5 ") ||
    searchValue.includes("5th")
  ) {
    return 5;
  } else if (
    searchValue.includes("sixth") ||
    searchValue.includes(" 6 ") ||
    searchValue.includes("6th")
  ) {
    return 6;
  } else if (
    searchValue.includes("seventh") ||
    searchValue.includes(" 7 ") ||
    searchValue.includes("7th")
  ) {
    return 7;
  } else if (
    searchValue.includes("eighth") ||
    searchValue.includes(" 8 ") ||
    searchValue.includes("8th")
  ) {
    return 8;
  } else if (
    searchValue.includes("ninth") ||
    searchValue.includes(" 9 ") ||
    searchValue.includes("9th")
  ) {
    return 9;
  } else if (
    searchValue.includes("tenth") ||
    searchValue.includes(" 10 ") ||
    searchValue.includes("10th")
  ) {
    return 10;
  } else if (
    searchValue.includes("eleventh") ||
    searchValue.includes(" 11 ") ||
    searchValue.includes("11th")
  ) {
    return 11;
  } else if (
    searchValue.includes("twelfth") ||
    searchValue.includes(" 12 ") ||
    searchValue.includes("12th")
  ) {
    return 12;
  } else if (searchValue.toLowerCase().includes("pre")) {
    return -1;
  } else if (searchValue.toLowerCase().includes("kinder")) {
    return 0;
  }
  return null;
}

//function subject parsing
function parseSubject(searchValue) {
  if (
    searchValue.toLowerCase().includes("math") ||
    searchValue.toLowerCase().includes("geom") ||
    searchValue.toLowerCase().includes("calc") ||
    searchValue.toLowerCase().includes("algebra")
  ) {
    return "MATH";
  } else if (
    searchValue.toLowerCase().includes("english") ||
    searchValue.toLowerCase().includes("lit")
  ) {
    return "ENGLISH";
  } else if (searchValue.toLowerCase().includes("history")) {
    return "HISTORY";
  } else if (
    searchValue.toLowerCase().includes("foreign") ||
    searchValue.toLowerCase().includes("spanish") ||
    searchValue.toLowerCase().includes("french")
  ) {
    return "FOREIGNLANGUAGE";
  } else if (
    // searchValue.toLowerCase().includes("science") ||
    searchValue.toLowerCase().includes("chemistry") ||
    searchValue.toLowerCase().includes("physics") ||
    searchValue.toLowerCase().includes("bio")
  ) {
    return "SCIENCE";
  } else if (searchValue.toLowerCase().includes("computerscience")) {
    return "compsci";
  }
  return null;
}

function signOutFn() {
  var auth2 = gapi.auth2.getAuthInstance();
  if (auth2) {
    auth2.signOut().then(function() {
      console.log("User signed out.");
      location.reload();
    });
  }
}
