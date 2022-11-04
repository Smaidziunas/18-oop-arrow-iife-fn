"use strict";
console.log("main.js");

// const st1 = new Student('James', 2, 'Lodon');
// console.log('st1 ===', st1);
// const math1 = new Subject('Math', [5, 6, 7]);

// st1.addCourse(math1);
// console.log('st1.courses[1].avg() ===', st1.courses[1].avg());

const studentsArr = [
  new Student("James", 2, "Lodon"),
  new Student("Jane", 1, "Lodon"),
  new Student("Mike", 3, "California"),
  new Student("Serbentautas", 1, "Zapyskio"),
];
console.log("studentsArr ===", studentsArr);

let sub1 = new Subject("Math", [5, 6, 7]);
studentsArr[0].addCourse(sub1);
sub1 = new Subject("Math", [8, 6, 7]);
studentsArr[1].addCourse(sub1);
sub1 = new Subject("History", [8, 6, 7]);
studentsArr[1].addCourse(sub1);
sub1 = new Subject("Math", [8, 6, 9]);
studentsArr[2].addCourse(sub1);
sub1 = new Subject("Math", [9, 10, 9]);
studentsArr[3].addCourse(sub1);

const studMathMarks = studentsArr.map((st) => {
  // console.log('st.courses[0] ===', st.courses[0]);
  return st.getMathMarks();
});
console.log("studMathMarks ===", studMathMarks);
