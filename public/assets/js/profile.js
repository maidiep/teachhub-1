//Initialize all of our fields
function init() {
    document.getElementById("filterSubmit").onclick = clickboy;
}

//good ol' click boy
function clickboy(e) {
    e.preventDefault();
    let subject = document.getElementById("subjectSelect").value;
    let grade = document.getElementById("gradeSelect").value;
    let fileOne = document.getElementById("exampleInputFile1");
    let fileTwo = document.getElementById("exampleInputFile2");
    /*
        AND THIS IS WHERE I WOULD PUT MY STAR RATINGS IF I HAD ANY
        let stars = document.getElementById("starSelect").value;
    */
    submitSearch(grade,subject,fileOne,fileTwo);
}

//actual ajax to submit to the backend
function submitSearch(grade,subject,stars) {
    let searchQuery = {
        grade: grade,
        subject: subject,
        fileOne: fileOne,
        fileTwo: fileTwo
    }
    $.ajax("/api/search/" + id, {
        type: "PUT",
        data: searchQuery
      }).then(
        function() {
          console.log("SUCCESS");
        }
    );
}

//Call init at the end to make sure e'rything been hoisted
init();