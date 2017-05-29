document.write("<script type='text/javascript' src='person.js'></script>");
document.write("<script type='text/javascript' src='student.js'></script>");
module.exports = function main(name,age,klass) {
    console.log("Debug Info");
	var a=new Person(name,age);
	var b=new Student(name,age,klass);
	a.introduce();
	b.introduce();
};