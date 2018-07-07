window.onload = init;
//Initialize all of our fields
function init() {
  document.getElementById("filterSubmit").onclick = clickboy;

  if (localStorage.getItem("email") === null) {
    $(".likeBtn").css("pointer-events", "none");
    $(".likeBtn").removeAttr("href");
  }

  $("#filterSubmit").on("click", function(e) {
    clickboy(e);
  });

  $(".likeBtn").on("click", function() {
    let recordId = $(this).attr("data-recordId");
    console.log(recordId);

    $.ajax({
      url: "/api/lesson/" + recordId + "/like",
      type: "GET"
    }).then(function(likeResponse) {
      console.log(likeResponse);
      $("#ratingQuantity" + recordId).text(likeResponse.ratingQuantity);
    });
  });
}

//good ol' click boy
function clickboy(e) {
  e.preventDefault();
  let subject = $("#subjectSelect").val();
  let grade = $("#gradeSelect")
    .val()
    .trim();

  console.log(subject);
  console.log(grade);

  /*
        AND THIS IS WHERE I WOULD PUT MY STAR RATINGS IF I HAD ANY
        let stars = document.getElementById("starSelect").value;
    */

  grade = parseGrade(grade);
  subject = parseSubject(subject);

  console.log(subject);
  console.log(grade);

  submitSearch(grade, subject);
}

function parseGrade(searchValue) {
  if (
    searchValue.includes("tenth") ||
    searchValue.includes("10") ||
    searchValue.includes("10th")
  ) {
    return 10;
  } else if (
    searchValue.includes("eleventh") ||
    searchValue.includes("11") ||
    searchValue.includes("11") ||
    searchValue.includes("11th")
  ) {
    return 11;
  } else if (
    searchValue.includes("twelfth") ||
    searchValue.includes("12") ||
    searchValue.includes("12th")
  ) {
    return 12;
  } else if (
    searchValue.includes("first") ||
    searchValue.includes("1") ||
    searchValue.includes("1st")
  ) {
    return 1;
  } else if (
    searchValue.includes("second") ||
    searchValue.includes("2") ||
    searchValue.includes("2nd")
  ) {
    return 2;
  } else if (
    searchValue.includes("third") ||
    searchValue.includes("3") ||
    searchValue.includes("3rd")
  ) {
    return 3;
  } else if (
    searchValue.includes("fourth") ||
    searchValue.includes("4") ||
    searchValue.includes("4th")
  ) {
    return 4;
  } else if (
    searchValue.includes("fifth") ||
    searchValue.includes("5") ||
    searchValue.includes("5th")
  ) {
    return 5;
  } else if (
    searchValue.includes("sixth") ||
    searchValue.includes("6") ||
    searchValue.includes("6th")
  ) {
    return 6;
  } else if (
    searchValue.includes("seventh") ||
    searchValue.includes("7") ||
    searchValue.includes("7th")
  ) {
    return 7;
  } else if (
    searchValue.includes("eighth") ||
    searchValue.includes("8") ||
    searchValue.includes("8th")
  ) {
    return 8;
  } else if (
    searchValue.includes("ninth") ||
    searchValue.includes("9") ||
    searchValue.includes("9th")
  ) {
    return 9;
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

//actual ajax to submit to the backend
function submitSearch(grade, subject) {
  console.log("Searchin with ", grade, subject);
  if (grade === null) {
    grade = "";
  }
  if (subject === null) {
    subject = "";
  }
  let searchQuery =
    "/api/lessons?" + "grade=" + grade + "&" + "subject=" + subject;

  $.ajax(searchQuery, {
    type: "GET"
  }).then(function(res) {
    // console.log(res);
    console.log("SUCCESS");
    console.log(window.location);
    window.location.replace(searchQuery);
  });
}
