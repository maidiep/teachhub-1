window.onload = init;
//Initialize all of our fields
function init() {
  document.getElementById("filterSubmit").onclick = clickboy;
  $("#filterSubmit").on("click", function(e) {
    clickboy(e);
  });
}

//good ol' click boy
function clickboy(e) {
  e.preventDefault();
  let subject = $("#subjectSelect").val();
  let grade = $("#gradeSelect").val();

  console.log(subject);
  console.log(grade);

  /*
        AND THIS IS WHERE I WOULD PUT MY STAR RATINGS IF I HAD ANY
        let stars = document.getElementById("starSelect").value;
    */
  submitSearch(grade, subject);
}

//actual ajax to submit to the backend
function submitSearch(grade, subject) {
  console.log("Searchin with ", grade, subject);
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
