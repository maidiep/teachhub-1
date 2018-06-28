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
    submitSearch(grade,subject)
}

//actual ajax to submit to the backend
function submitSearch(grade,subject) {
    let searchQuery = {
        grade: grade,
        subject: subject
    }
    $.ajax("/api/search/" + id, {
        type: "POST",
        data: searchQuery
      }).then(
        function() {
          console.log("SUCCESS");
        }
    );
}

//Grade parsing
function parseGrade(searchValue) {
    if(searchValue.contains("first") || searchValue.contains(" 1 ") || searchValue.contains("1st")) {
        return 1; 
    }
    else if(searchValue.contains("second") || searchValue.contains(" 2 ") || searchValue.contains("2nd")) {
        return 2;
    }
    else if(searchValue.contains("third") || searchValue.contains(" 3 ") || searchValue.contains("3rd")) {
        return 3;
    }
    else if(searchValue.contains("fourth") || searchValue.contains(" 4 ") || searchValue.contains("4th")) {
        return 4;
    }
    else if(searchValue.contains("fifth") || searchValue.contains(" 5 ") || searchValue.contains("5th")) {
        return 5;
    }
    else if(searchValue.contains("sixth") || searchValue.contains(" 6 ") || searchValue.contains("6th")) {
        return 6;
    }
    else if(searchValue.contains("seventh") || searchValue.contains(" 7 ") || searchValue.contains("7th")) {
        return 7;
    }
    else if(searchValue.contains("eighth") || searchValue.contains(" 8 ") || searchValue.contains("8th")) {
        return 8;
    }
    else if(searchValue.contains("ninth") || searchValue.contains(" 9 ") || searchValue.contains("9th")) {
        return 9;
    }
    else if(searchValue.contains("tenth") || searchValue.contains(" 10 ") || searchValue.contains("10th")) {
        return 10;
    }
    else if(searchValue.contains("eleventh") || searchValue.contains(" 11 ") || searchValue.contains("11th")) {
        return 11;
    }
    else if(searchValue.contains("twelfth") || searchValue.contains(" 12 ") || searchValue.contains("12th")) {
        return 12;
    }
    else if(searchValue.toLowerCase().contains("pre")) {
        return -1;
    }
    else if(searchValue.toLowerCase().contains("kinder")) {
        return 0;
    }
}

//function subject parsing
function parseSubject(searchValue) {
    if(searchValue.toLowerCase().contains("math")
        || searchValue.toLowerCase().contains("geom")
            || searchValue.toLowerCase().contains("calc")
                || searchValue.toLowerCase().contains("algebra")) {
        return "MATH";
    }
    else if(searchValue.toLowerCase().contains("english") 
        || searchValue.toLowerCase().contains("lit")) {
        return "ENGLISH";
    }
    else if(searchValue.toLowerCase().contains("history")) {
        return "HISTORY";
    }
    else if(searchValue.toLowerCase().contains("foreign") 
        || searchValue.toLowerCase().contains("spanish")
            || searchValue.toLowerCase().contains("french")) {
        return "FOREIGNLANGUAGE";
    }
    else if(searchValue.toLowerCase().contains("science") 
        || searchValue.toLowerCase().contains("chemistry")
            || searchValue.toLowerCase().contains("physics")
                || searchValue.toLowerCase().contains("bio")) {
        return "SCIENCE";
    }
}