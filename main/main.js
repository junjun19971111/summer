module.exports = function main(name,age,klass) {
    console.log("Debug Info");
	Person a=new Person(name,age);
	Student b=new Student(name,age,klass);
	a.introduce();
	b.introduce();
};