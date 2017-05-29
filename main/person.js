function Person(name,age){
	this.name=name;
	this.age=age;
}
Person.prototype.introduce=function(){
    return "my name is " + this.name+".I am "+this.age+" years old.";	
	};