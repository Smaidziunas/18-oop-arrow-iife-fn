class Student {
  //statine savybe yra prideta prie pacios klases o ne prie objekto
  static studList = document.getElementById("studs");
  static stCount = 0;
  // constructor vyksta sukuriant nauja objekta su new
  constructor(argName, argYear, argHomeTown) {
    console.log("student created");
    // this.studList = document.getElementById("studs");
    this.name = argName;
    this.year = argYear;
    this.town = argHomeTown;
    this.printStudent();
    this.courses = [];
    Student.stCount++;
  }

  getMathMarks() {
    return this.courses[0].avg();
  }

  sayHi() {
    // sudentas iskonsolina ir pasisako apie save.
    /// sveiki as James is London ir esu 2 kurse
    const helloString = `Sveiki as ${this.name} is ${this.town} ir esu ${this.year} kurse`;
    console.log(helloString);
    return helloString;
  }

  printStudent() {
    const liEl = document.createElement("li");
    liEl.textContent = this.sayHi();
    Student.studList.append(liEl);
  }

  addCourse(subject) {
    this.courses.push(subject);
    console.log(subject.title, "was added to", this.name);
  }

  // removeCourse() -
  removeCourse(subject) {
    // pasitikrinti ar yra toks dalykas kursuose
    if (this.courses.includes(subject)) {
      // jei yra pasalinam ir pransam su console
      this.courses = this.courses.filter(
        (oneSubject) => oneSubject !== subject
      );
      console.log(`${subject} was removed from ${this.name}`);
    } else {
      // jei nera pranesam kad tokio nera
      console.log(`${this.name} does not have ${subject} subject `);
    }
  }
}
