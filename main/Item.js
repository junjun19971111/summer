module.exports = function Item(NO,Name,Price){
	this.NO=NO;
	this.Name=Name;
	this.Price=Price;
	this.getNO = function(){
		return this.NO;
	};
	this.getName = function(){
		return this.Name;
	};
	this.getPrice = function(){
		return this.Price;
	};
	
}