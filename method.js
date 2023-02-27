const student = {
  name: "sobuj",
  money: 5000,
  study: "math",
  subjects: ["calculus", "geometry", "algebra"],
  //   function inside an object is know as method
  exam: function () {
    //console.log(this.name, "is participating in exam");
    return this.name + " is participating in exam";
  },
  improveExam: function (subject) {
    return `${this.name} is retaking exam on ${subject}`;
  },
  treatDey: function (amount, tips) {
    this.money = this.money - amount - tips;
    return this.money;
  },
};

const output = student.exam();
console.log(output);

const reExam = student.improveExam("calculus");
console.log(reExam);

const moneyAfterTreat = student.treatDey(500, 50);
console.log(moneyAfterTreat);
