const gradingSystems = {
    standard4: {
        name: "Standard 4.0",
        scale: 4.0,
        grades: [
            { letter: "A+", min: 95, gpa: 4.0 },
            { letter: "A", min: 90, gpa: 4.0 },
            { letter: "A-", min: 85, gpa: 3.7 },
            { letter: "B+", min: 80, gpa: 3.3 },
            { letter: "B", min: 75, gpa: 3.0 },
            { letter: "B-", min: 70, gpa: 2.7 },
            { letter: "C+", min: 65, gpa: 2.3 },
            { letter: "C", min: 60, gpa: 2.0 },
            { letter: "C-", min: 55, gpa: 1.7 },
            { letter: "D+", min: 52, gpa: 1.3 },
            { letter: "D", min: 50, gpa: 1.0 },
            { letter: "F", min: 0, gpa: 0.0 }
        ]
    },

    ualberta: {
        name: "University of Alberta",
        scale: 4.0,
        grades: [
            { letter: "A+", min: 95, gpa: 4.0 },
            { letter: "A", min: 90, gpa: 4.0 },
            { letter: "A-", min: 85, gpa: 3.7 },
            { letter: "B+", min: 80, gpa: 3.3 },
            { letter: "B", min: 75, gpa: 3.0 },
            { letter: "B-", min: 70, gpa: 2.7 },
            { letter: "C+", min: 65, gpa: 2.3 },
            { letter: "C", min: 60, gpa: 2.0 },
            { letter: "C-", min: 55, gpa: 1.7 },
            { letter: "D+", min: 52, gpa: 1.3 },
            { letter: "D", min: 50, gpa: 1.0 },
            { letter: "F", min: 0, gpa: 0.0 }
        ]
    },

    macewan: {
        name: "MacEwan University",
        scale: 4.0,
        grades: [
            { letter: "A+", min: 95, gpa: 4.0 },
            { letter: "A", min: 90, gpa: 4.0 },
            { letter: "A-", min: 85, gpa: 3.7 },
            { letter: "B+", min: 80, gpa: 3.3 },
            { letter: "B", min: 75, gpa: 3.0 },
            { letter: "B-", min: 70, gpa: 2.7 },
            { letter: "C+", min: 65, gpa: 2.3 },
            { letter: "C", min: 60, gpa: 2.0 },
            { letter: "C-", min: 55, gpa: 1.7 },
            { letter: "D+", min: 52, gpa: 1.3 },
            { letter: "D", min: 50, gpa: 1.0 },
            { letter: "F", min: 0, gpa: 0.0 }
        ]
    },

    umanitoba: {
        name: "University of Manitoba",
        scale: 4.5,
        grades: [
            { letter: "A+", min: 90, gpa: 4.5 },
            { letter: "A", min: 80, gpa: 4.0 },
            { letter: "B+", min: 75, gpa: 3.5 },
            { letter: "B", min: 70, gpa: 3.0 },
            { letter: "C+", min: 65, gpa: 2.5 },
            { letter: "C", min: 60, gpa: 2.0 },
            { letter: "D", min: 50, gpa: 1.0 },
            { letter: "F", min: 0, gpa: 0.0 }
        ]
    },

    uwinnipeg: {
        name: "University of Winnipeg",
        scale: 4.5,
        grades: [
            { letter: "A+", min: 90, gpa: 4.5 },
            { letter: "A", min: 85, gpa: 4.25 },
            { letter: "A-", min: 80, gpa: 4.0 },
            { letter: "B+", min: 75, gpa: 3.5 },
            { letter: "B", min: 70, gpa: 3.0 },
            { letter: "C+", min: 65, gpa: 2.5 },
            { letter: "C", min: 60, gpa: 2.0 },
            { letter: "D", min: 50, gpa: 1.0 },
            { letter: "F", min: 0, gpa: 0.0 }
        ]
    },

    utoronto: {
        name: "University of Toronto",
        scale: 4.0,
        grades: [
            { letter: "A+", min: 90, gpa: 4.0 },
            { letter: "A", min: 85, gpa: 4.0 },
            { letter: "A-", min: 80, gpa: 3.7 },
            { letter: "B+", min: 77, gpa: 3.3 },
            { letter: "B", min: 73, gpa: 3.0 },
            { letter: "B-", min: 70, gpa: 2.7 },
            { letter: "C+", min: 67, gpa: 2.3 },
            { letter: "C", min: 63, gpa: 2.0 },
            { letter: "C-", min: 60, gpa: 1.7 },
            { letter: "D+", min: 57, gpa: 1.3 },
            { letter: "D", min: 53, gpa: 1.0 },
            { letter: "D-", min: 50, gpa: 0.7 },
            { letter: "F", min: 0, gpa: 0.0 }
        ]
    },

    ubc: {
        name: "University of British Columbia",
        scale: 4.33,
        grades: [
            { letter: "A+", min: 90, gpa: 4.33 },
            { letter: "A", min: 85, gpa: 4.0 },
            { letter: "A-", min: 80, gpa: 3.67 },
            { letter: "B+", min: 76, gpa: 3.33 },
            { letter: "B", min: 72, gpa: 3.0 },
            { letter: "B-", min: 68, gpa: 2.67 },
            { letter: "C+", min: 64, gpa: 2.33 },
            { letter: "C", min: 60, gpa: 2.0 },
            { letter: "C-", min: 55, gpa: 1.67 },
            { letter: "D", min: 50, gpa: 1.0 },
            { letter: "F", min: 0, gpa: 0.0 }
        ]
    },

    ucalgary: {
        name: "University of Calgary",
        scale: 4.0,
        grades: [
            { letter: "A+", min: 95, gpa: 4.0 },
            { letter: "A", min: 90, gpa: 4.0 },
            { letter: "A-", min: 85, gpa: 3.7 },
            { letter: "B+", min: 80, gpa: 3.3 },
            { letter: "B", min: 75, gpa: 3.0 },
            { letter: "B-", min: 70, gpa: 2.7 },
            { letter: "C+", min: 65, gpa: 2.3 },
            { letter: "C", min: 60, gpa: 2.0 },
            { letter: "C-", min: 55, gpa: 1.7 },
            { letter: "D+", min: 52, gpa: 1.3 },
            { letter: "D", min: 50, gpa: 1.0 },
            { letter: "F", min: 0, gpa: 0.0 }
        ]
    },

    usask: {
        name: "University of Saskatchewan",
        scale: 4.0,
        grades: [
            { letter: "A+", min: 90, gpa: 4.0 },
            { letter: "A", min: 85, gpa: 4.0 },
            { letter: "A-", min: 80, gpa: 3.7 },
            { letter: "B+", min: 77, gpa: 3.3 },
            { letter: "B", min: 73, gpa: 3.0 },
            { letter: "B-", min: 70, gpa: 2.7 },
            { letter: "C+", min: 65, gpa: 2.3 },
            { letter: "C", min: 60, gpa: 2.0 },
            { letter: "F", min: 0, gpa: 0.0 }
        ]
    }
};