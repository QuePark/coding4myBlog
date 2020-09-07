const userDefault = {
  name: "didn't have name",
  age: 0,
  isAdult: function () {return this.age > 19},
  printInfo: function () {
    console.log(`${this.name} ${this.isAdult ? "can" : "can't"} drink a soju`);
  }
}
const me = Object.create(userDefault);
me.name = 'gray';
me.age = 28;
me.isAdult = me.isAdult();
me.printInfo();

const you = Object.create(userDefault);
you.name = 'elen';
you.age = 17;
you.isAdult = you.isAdult();
you.printInfo();
