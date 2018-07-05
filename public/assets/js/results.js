window.onload = init;
//Initialize all of our fields
function init() {
  document.getElementById("filterSubmit").onclick = clickboy;
}

//good ol' click boy
function clickboy(e) {
  e.preventDefault();
  let subject = $("#subjectSelect").val();
  let grade = $("#gradeSelect").val();
  /*
        AND THIS IS WHERE I WOULD PUT MY STAR RATINGS IF I HAD ANY
        let stars = document.getElementById("starSelect").value;
    */
  submitSearch(grade, subject);
}

//actual ajax to submit to the backend
function submitSearch(grade, subject, stars) {
  let searchQuery = {
    grade: grade,
    subject: subject,
    stars: stars
  };
  $.ajax("/api/search/" + id, {
    type: "POST",
    data: searchQuery
  }).then(function() {
    console.log("SUCCESS");
  });
}
