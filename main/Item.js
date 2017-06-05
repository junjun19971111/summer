module.exports = function Item(NO,Name,Price,Unit){
	this.NO=NO;
	this.Name=Name;
	this.Price=Price;
	this.Unit = Unit
	this.getNO = function(){
		return this.NO;
	};
	this.getName = function(){
		return this.Name;
	};
	this.getPrice = function(){
		return this.Price;
	};
	this.getUnit = function(){
		return this.Unit;
	};
	
}