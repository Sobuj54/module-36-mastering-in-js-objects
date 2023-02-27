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
const exam = student.exam();
console.log(exam);

const badamAli = {
  name: "badam",
  money: 5000,
};
// calling method from student object but using badamAli object
const exam2 = student.exam.call(badamAli);
console.log(exam2);
// calling method form student object but using badamAli s money
const treat = student.treatDey.call(badamAli, 1500, 500);
console.log(treat);
// we can do the same task with apply but in this case we need use an array to apply arguments
const treat2 = student.treatDey.apply(badamAli, [1000, 100]);
console.log(treat2);

// same thing  using bind
const badamAliTreat = student.treatDey.bind(badamAli);
const remaining = badamAliTreat(500, 50);
console.log(remaining);
