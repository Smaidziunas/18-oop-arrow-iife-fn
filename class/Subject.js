class Subject {
  constructor(argName, argMarks) {
    this.title = argName;
    this.marks = argMarks;
  }

  avg() {
    const avg =
      this.marks.reduce((total, sk) => total + sk, 0) / this.marks.length;
    return avg;
  }
}
