function calculateGrade() {
    let name = document.getElementById("studentName").value;

    let mark1 = Number(document.getElementById("mark1").value);
    let mark2 = Number(document.getElementById("mark2").value);
    let mark3 = Number(document.getElementById("mark3").value);

    let total = mark1 + mark2 + mark3;
    let average = total / 3;

    let grade = "";

    if (average >= 90) {
        grade = "A";
    } else if (average >= 85) {
        grade = "A-";
    } else if (average >= 70) {
        grade = "B+";
    } else if (average >= 65) {
        grade = "B-";
    } else if (average >= 60) {
        grade = "C+";
    } else if (average >= 55) {
        grade = "C";
    } else if (average >= 50) {
        grade = "C-";
    } else if (average >= 48) {
        grade = "D+";
    } else if (average >= 45) {
        grade = "D";
    } else {
        grade = "F";
    }

    document.getElementById("report").innerHTML =
        "Student: " + name + "<br>" +
        "Total Marks: " + total + "<br>" +
        "Average: " + average.toFixed(2) + "%<br>" +
        "Grade: " + grade;
}