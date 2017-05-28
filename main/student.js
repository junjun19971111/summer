function student(name,age,klass){
	person.call(this,name,age);
	this.klass=klass;
	this.introduce=function(){
	return "my name is " + this.name+".I am"+this.age+"years old.I'm at class"+this.klass;
	}
	
}


