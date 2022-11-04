class Movie {
  constructor(argName, argYear, argDirector, argBudget, argIncome) {
    this.name = argName;
    this.year = argYear;
    this.director = argDirector;
    this.budget = argBudget;
    this.income = argIncome;
  }
  //grazina pilna filmo pavadinima
  getIntroduction() {
    const nameEl = [this.name, this.year, this.director];
    return nameEl;
  }

  // grazina suma kuria uzdirbo filmas
  getProfit() {
    const profit = this.income - this.budget;
    return profit;
  }
}

let oldMovie = new Movie("oldMovie", 1993, "rezisierius", 200e6, 300e6);
console.log("oldMovie ===", oldMovie);

oldMovie.getProfit();

console.log("oldMovieProfit ===", oldMovie.getProfit());
console.log("oldMovieNAME ===", oldMovie.getIntroduction());
