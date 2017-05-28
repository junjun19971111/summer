module.exports = function main(name,age,klass) {
    console.log("Debug Info");
	person a=new person(name,age);
	student b=new student(name,age,klass);
	a.introduce();
	b.introduce();
};