//console.log(this);

const student = {
  name: "sobuj",
  money: 5000,
  study: "math",
  subjects: ["calculus", "geometry", "algebra"],
  //   function inside an object is know as method
  exam: function () {
    // this inside a method means the object
    console.log(this);
    //console.log(this.name, "is participating in exam");
    return this.name + " is participating in exam";
  },
  examArrow: () => {
    console.log(this);
  },
  improveExam: function (subject) {
    return `${this.name} is retaking exam on ${subject}`;
  },
  treatDey: function (amount, tips) {
    this.money = this.money - amount - tips;
    return this.money;
  },
};
student.exam();
student.examArrow();

function clickHandler() {
  // this will show the window
  console.log(this);
}

document.getElementById("click2").addEventListener("click", function () {
  // this will the html of the taken id
  console.log(this);
});
