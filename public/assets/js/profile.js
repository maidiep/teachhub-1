window.onload = init;
//Initialize all of our fields
function init() {
  document.getElementById("submitButton").onclick = clickboy;
  $("#avatar").attr("src", localStorage.getItem("avatar"));

  if (localStorage.getItem("email") === null) {
    $("#uploadButton").attr("disabled", true);
  }

  $("a[data-toggle=tab]").click(function() {
    if (localStorage.getItem("email") !== null) {
      $.ajax({
        url: "/api/lessons/teacherId/" + localStorage.getItem("email"),
        type: "GET"
      }).then(function(response) {
        $("#nav-myupload").empty();
        for (var i = 0; i < response.length; i++) {
          $("#nav-myupload").append("<p> Name : " + response[i].name + "</p>");
          $("#nav-myupload").append(
            "<p> Subject : " + response[i].subject + "</p>"
          );
          var link = $("<button>");
          link.attr("href", response[i].materials);
          link.addClass("btn btn-warning delBtn");
          link.text("Open Link");
          $("#nav-myupload").append(link);

          var delBtn = $("<button>");
          delBtn.addClass("btn btn-warning delBtn");
          delBtn.attr("id", "del" + response[i].id);
          delBtn.attr("data-recordId", response[i].id);
          delBtn.text("Remove Lesson");
          $("#nav-myupload").append(delBtn);

          $("#nav-myupload").append(
            "<p> Grade Level : " + response[i].gradeLevel + "</p>"
          );
          $("#nav-myupload").append(
            "<p> Uploaded at : " + response[i].createdAt + "</p>"
          );
          $("#nav-myupload").append(
            "<p> Description : " + response[i].description + "</p>"
          );
          $("#nav-myupload").append("<hr>");
        }
      });
    } else {
      console.log("User not logged in");
    }
  });
}

$(".delBtn").on("click", function() {
  let recordId = $(this).attr("data-recordId");
  console.log(recordId);

  $.ajax({
    url: "/api/lesson/" + recordId,
    type: "DELETE"
  }).then(function(likeResponse) {
    console.log(likeResponse);
    location.reload();
  });
});

//good ol' click boy
function clickboy(e) {
  e.preventDefault();

  let subject = $("#subjectSelect")
    .val()
    .trim();
  let grade = $("#gradeSelect")
    .val()
    .trim();
  let description = $("#description")
    .val()
    .trim();
  let file = $("#exampleInputFile1")
    .val()
    .trim();
  let lessonName = $("#lessonName")
    .val()
    .trim();

  /*
        AND THIS IS WHERE I WOULD PUT MY STAR RATINGS IF I HAD ANY
        let stars = document.getElementById("starSelect").value;
    */

  console.log(subject);
  console.log(grade);

  grade = parseGrade(grade);
  subject = parseSubject(subject);

  console.log(subject);
  console.log(grade);

  if (
    grade === "" ||
    subject === "" ||
    description === "" ||
    file === "" ||
    lessonName === ""
  ) {
    alert("Please fill all the fields with valid values");
  }

  submitSearch(grade, subject, description, file, lessonName);
}

function parseGrade(searchValue) {
  if (
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
  } else if (
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
function submitSearch(grade, subject, description, file, lessonName) {
  let searchQuery = {
    grade: grade,
    subject: subject,
    description: description,
    materials: file,
    lessonName: lessonName,
    teacherId: localStorage.getItem("id"),
    ratingQuantity: 0
  };
  $.ajax("/api/lessons", {
    type: "PUT",
    data: JSON.stringify(searchQuery),
    contentType: "application/json",
    dataType: "json"
  }).then(function(sqlResponse) {
    console.log("SUCCESS");
    console.log(sqlResponse);
    $("input").val("");
    $("select").val("");
    $("#uploadPopUp").modal("toggle");
  });
}
