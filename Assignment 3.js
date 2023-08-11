setInterval(function() {
  avg();
}, 100);

var table = document.getElementById("table");

function avg() {

  var total = 0;
  var count = 0;

  for (var r = 1; r < table.rows.length; r++) {
    for (var c = 2; c < table.rows[r].cells.length - 1; c++) {
      if (table.rows[r].cells[c].innerHTML != "-") {
        if (isNaN(table.rows[r].cells[c].innerHTML)) {
          table.rows[r].cells[c].innerHTML = "-";
          alert("No letters allowed");
        }
        if (table.rows[r].cells[c] == "") {
          table.rows[r].cells[c] = "-";
        }
      }

      if (table.rows[r].cells[c].innerHTML == "-") {
        table.rows[r].cells[c].style = "background:yellow";
        total += 0;
      } else if (table.rows[r].cells[c].innerHTML != "") {
        total += parseInt(table.rows[r].cells[c].innerHTML);
        table.rows[r].cells[c].style = "background:white";
      }
      if (parseInt(table.rows[r].cells[c].innerHTML) < 0) {
        alert("no negatives, remove the - sign before typing your grade.");
        table.rows[r].cells[c].innerHTML = "-";
      } else if (parseInt(table.rows[r].cells[c].innerHTML) > 100) {
        table.rows[r].cells[c].innerHTML = "-";
        alert("Only allows numbers 1 -> 100");
      }
    }

    table.rows[r].cells[7].innerHTML = Math.round(parseInt(total / 5)) + "%";
    if (parseInt(table.rows[r].cells[7].innerHTML) < 40) {
      table.rows[r].cells[7].style = "background:red";
      table.rows[r].cells[7].style.color = "white";
    } else {
      table.rows[r].cells[7].style = "background:white";
    }
    total = 0;
    
    table.rows[r].cells[7].addEventListener("click", toggleGrade); // Add event listener here
    table.rows[r].cells[7].addEventListener("click", toggleGrade);

  }
}
avgButton.onClick = avg();

var gradeType = "percent";

//the toggleGrade function should now properly convert the percentage grade to a 
//letter grade when the grade type is "letter".
//but for somi reason unkown to me its not appearing

function toggleGrade() {
  if (gradeType === "percent") {
    gradeType = "letter";
  } else if (gradeType === "letter") {
    gradeType = "four-point";
  } else {
    gradeType = "percent";
  }
  for (var r = 1; r < table.rows.length; r++) {
    var percentGrade = parseInt(table.rows[r].cells[7].innerHTML);
    if (gradeType === "percent") {
      table.rows[r].cells[7].innerHTML = percentGrade + "%";
    } else if (gradeType === "letter") {
      table.rows[r].cells[7].innerHTML = getLetterGrade(percentGrade);
    } else {
      table.rows[r].cells[7].innerHTML = getFourPointGrade(percentGrade);
    }
  }
}
function getLetterGrade(percentGrade) {
  if (percentGrade >= 93) {
    return "A";
  } else if (percentGrade >= 90) {
    return "A-";
  } else if (percentGrade >= 87) {
    return "B+";
  } else if (percentGrade >= 83) {
    return "B";
  } else if (percentGrade >= 80) {
    return "B-";
  } else if (percentGrade >= 77) {
    return "C+";
  } else if (percentGrade >= 73) {
    return "C";
  } else if (percentGrade >= 70) {
    return "C-";
  } else if (percentGrade >= 67) {
    return "D+";
  } else if (percentGrade >= 63) {
    return "D";
  } else if (percentGrade >= 60) {
    return "D-";
  } else {
    return "F";
  }
}

function getFourPointGrade(percentGrade) {
  if (percentGrade >= 93) {
    return "4.0";
  } else if (percentGrade >= 90) {
    return "3.7";
  } else if (percentGrade >= 87) {
    return "3.3";
  } else if (percentGrade >= 83) {
    return "3.0";
  } else if (percentGrade >= 80) {
    return "2.7";
  } else if (percentGrade >= 77) {
    return "2.3";
  } else if (percentGrade >= 73) {
    return "2.0";
  } else if (percentGrade >= 70) {
    return "1.7";
  } else if (percentGrade >= 67) {
    return "1.3";
  } else if (percentGrade >= 63) {
    return "1.0";
  } else if (percentGrade >= 60) {
    return "0.7";
  } else {
    return "0.0";
  }
}