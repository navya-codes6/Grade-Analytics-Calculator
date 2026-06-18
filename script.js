let courseCount = 1;

function hideAllPages() {
    document.getElementById("overallGpaPage").classList.add("hidden");
    document.getElementById("courseGradePage").classList.add("hidden");
    document.getElementById("resultsSection").classList.add("hidden");
}

function showOverallGpaPage() {
    hideAllPages();
    document.getElementById("overallGpaPage").classList.remove("hidden");
}

function showCourseGradePage() {
    hideAllPages();
    document.getElementById("courseGradePage").classList.remove("hidden");
}

function goBack() {
    hideAllPages();
    document.getElementById("results").innerHTML = "";
}

function showInstitutionSuggestions() {
    let input = document.getElementById("institutionName").value.toLowerCase();
    let suggestionsBox = document.getElementById("institutionSuggestions");

    suggestionsBox.innerHTML = "";

    if (input === "") {
        suggestionsBox.classList.add("hidden");
        return;
    }

    for (let key in gradingSystems) {
        let institutionName = gradingSystems[key].name;

        if (institutionName.toLowerCase().includes(input)) {
            let suggestion = document.createElement("div");
            suggestion.className = "suggestionItem";
            suggestion.textContent = institutionName;

            suggestion.onclick = function () {
                selectInstitution(key);
            };

            suggestionsBox.appendChild(suggestion);
        }
    }

    if (suggestionsBox.innerHTML === "") {
        suggestionsBox.classList.add("hidden");
    } else {
        suggestionsBox.classList.remove("hidden");
    }
}

function selectInstitution(key) {
    let institutionInput = document.getElementById("institutionName");
    let gradingDropdown = document.getElementById("gradingSystem");
    let message = document.getElementById("selectedInstitutionMessage");

    institutionInput.value = gradingSystems[key].name;
    gradingDropdown.value = key;

    message.innerHTML = "✅ " + gradingSystems[key].name + " grading system selected.";

    document.getElementById("institutionSuggestions").classList.add("hidden");
}

function getSelectedGradingSystem() {
    let selectedKey = document.getElementById("gradingSystem").value;
    return gradingSystems[selectedKey];
}

function addQuickCourse() {
    let container = document.getElementById("quickCoursesContainer");

    let course = document.createElement("div");
    course.className = "quickCourse";

    course.innerHTML =
        '<input type="text" class="quickCourseName" placeholder="Course name">' +
        '<input type="number" class="quickCourseGrade" placeholder="Grade %">' +
        '<button onclick="deleteQuickCourse(this)" class="deleteBtn">🗑️</button>';

    container.appendChild(course);
}

function deleteQuickCourse(button) {
    let courses = document.querySelectorAll(".quickCourse");

    if (courses.length > 1) {
        button.parentElement.remove();
    } else {
        alert("At least one course is required.");
    }
}

function addAssessment(button) {
    let course = button.closest(".course");
    let container = course.querySelector(".assessmentsContainer");

    let assessment = document.createElement("div");
    assessment.className = "assessment";

    assessment.innerHTML =
        '<input type="text" class="assessmentName" placeholder="Assessment name">' +
        '<input type="number" class="score" placeholder="Score">' +
        '<input type="number" class="outOf" placeholder="Out of">' +
        '<input type="number" class="weight" placeholder="Weight %">' +
        '<button onclick="deleteAssessment(this)" class="deleteBtn">🗑️</button>';

    container.appendChild(assessment);
}

function deleteAssessment(button) {
    let course = button.closest(".course");
    let assessments = course.querySelectorAll(".assessment");

    if (assessments.length > 1) {
        button.parentElement.remove();
    } else {
        alert("At least one assessment is required.");
    }
}

function addCourse() {
    courseCount++;

    let container = document.getElementById("coursesContainer");

    let course = document.createElement("div");
    course.className = "course";

    course.innerHTML =
        '<div class="courseHeader">' +
            '<h3>Course ' + courseCount + '</h3>' +
            '<button onclick="deleteCourse(this)" class="deleteBtn">🗑️</button>' +
        '</div>' +

        '<input type="text" class="courseName" placeholder="Course name">' +

        '<h4>Assessments</h4>' +
        '<div class="assessmentsContainer">' +
            '<div class="assessment">' +
                '<input type="text" class="assessmentName" placeholder="Assessment name">' +
                '<input type="number" class="score" placeholder="Score">' +
                '<input type="number" class="outOf" placeholder="Out of">' +
                '<input type="number" class="weight" placeholder="Weight %">' +
                '<button onclick="deleteAssessment(this)" class="deleteBtn">🗑️</button>' +
            '</div>' +
        '</div>' +

        '<button onclick="addAssessment(this)">+ Add Assessment</button>' +

        '<h4>Target Final Grade</h4>' +
        '<input type="number" class="targetGrade" placeholder="Desired final grade %">' +
        '<input type="number" class="finalWeight" placeholder="Final exam weight %">';

    container.appendChild(course);
}

function deleteCourse(button) {
    let courses = document.querySelectorAll(".course");

    if (courses.length > 1) {
        button.closest(".course").remove();
    } else {
        alert("At least one course is required.");
    }
}

function calculateOverallGpa() {
    let system = getSelectedGradingSystem();
    let courses = document.querySelectorAll(".quickCourse");
    let results = document.getElementById("results");

    let totalGpa = 0;
    let totalPercent = 0;
    let count = 0;
    let output = "";

    for (let i = 0; i < courses.length; i++) {
        let name = courses[i].querySelector(".quickCourseName").value;
        let grade = Number(courses[i].querySelector(".quickCourseGrade").value);

        if (grade > 0) {
            let gpa = convertToGpa(grade, system);
            let letter = getLetterGrade(grade, system);

            totalGpa += gpa;
            totalPercent += grade;
            count++;

            output += "<div class='resultCard'>";
            output += "<h3>" + (name || "Course " + (i + 1)) + "</h3>";
            output += "Grade: " + grade.toFixed(2) + "%<br>";
            output += "Letter Grade: " + letter + "<br>";
            output += "GPA: " + gpa.toFixed(2) + " / " + system.scale;
            output += "</div>";
        }
    }

    if (count === 0) {
        results.innerHTML = "Please enter at least one course grade.";
    } else {
        let overallGpa = totalGpa / count;
        let averagePercent = totalPercent / count;
        let overallLetter = getLetterGrade(averagePercent, system);

        output += "<div class='resultCard'>";
        output += "<h3>Overall Summary</h3>";
        output += "Grading System: " + system.name + "<br>";
        output += "Average Percentage: " + averagePercent.toFixed(2) + "%<br>";
        output += "Overall Letter Grade: " + overallLetter + "<br>";
        output += "Overall GPA: " + overallGpa.toFixed(2) + " / " + system.scale;
        output += "</div>";

        results.innerHTML = output;
    }

    document.getElementById("resultsSection").classList.remove("hidden");
}

function calculateCourseGrades() {
    let system = getSelectedGradingSystem();
    let courses = document.querySelectorAll(".course");
    let results = document.getElementById("results");

    let output = "";

    for (let i = 0; i < courses.length; i++) {
        let courseName = courses[i].querySelector(".courseName").value;
        let assessments = courses[i].querySelectorAll(".assessment");

        let earnedWeightedGrade = 0;
        let totalWeight = 0;

        for (let j = 0; j < assessments.length; j++) {
            let score = Number(assessments[j].querySelector(".score").value);
            let outOf = Number(assessments[j].querySelector(".outOf").value);
            let weight = Number(assessments[j].querySelector(".weight").value);

            if (outOf > 0 && weight > 0) {
                let percent = (score / outOf) * 100;
                earnedWeightedGrade += percent * (weight / 100);
                totalWeight += weight;
            }
        }

        if (totalWeight > 0) {
            let currentGrade = (earnedWeightedGrade / totalWeight) * 100;
            let projectedGrade = earnedWeightedGrade;
            let letter = getLetterGrade(currentGrade, system);
            let gpa = convertToGpa(currentGrade, system);

            output += "<div class='resultCard'>";
            output += "<h3>" + (courseName || "Course " + (i + 1)) + "</h3>";
            output += "Grading System: " + system.name + "<br>";
            output += "Current Grade: " + currentGrade.toFixed(2) + "%<br>";
            output += "Completed Weight: " + totalWeight.toFixed(2) + "%<br>";
            output += "Projected Course Grade So Far: " + projectedGrade.toFixed(2) + "%<br>";
            output += "Letter Grade: " + letter + "<br>";
            output += "GPA: " + gpa.toFixed(2) + " / " + system.scale + "<br>";

            let targetGrade = Number(courses[i].querySelector(".targetGrade").value);
            let finalWeight = Number(courses[i].querySelector(".finalWeight").value);

            if (targetGrade > 0 && finalWeight > 0) {
                let currentNonFinalWeight = 100 - finalWeight;
                let neededFinal = (targetGrade - currentGrade * (currentNonFinalWeight / 100)) / (finalWeight / 100);

                output += "Needed on Final: " + neededFinal.toFixed(2) + "%<br>";
            }

            output += "</div>";
        }
    }

    if (output === "") {
        results.innerHTML = "Please enter at least one valid assessment.";
    } else {
        results.innerHTML = output;
    }

    document.getElementById("resultsSection").classList.remove("hidden");
}

function getLetterGrade(grade, system) {
    for (let i = 0; i < system.grades.length; i++) {
        if (grade >= system.grades[i].min) {
            return system.grades[i].letter;
        }
    }

    return "F";
}

function convertToGpa(grade, system) {
    for (let i = 0; i < system.grades.length; i++) {
        if (grade >= system.grades[i].min) {
            return system.grades[i].gpa;
        }
    }

    return 0;
}