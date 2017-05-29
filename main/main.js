require("/main/person.js");
require("/main/student.js");
module.exports = function main(name,age,klass) {
    console.log("Debug Info");
	var a=new Person(name,age);
	var b=new Student(name,age,klass);
	a.introduce();
	b.introduce();
};