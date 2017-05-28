function person(name,age){
	this.name=name;
	this.age=age;
	this.introduce=function(){
    return "my name is " + this.name+".I am"+this.age+"years old.";	
	}
};