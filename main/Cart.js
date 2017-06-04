module.exports = function Cart(Goods,Count){
	this.Goods = Goods;//HashMap<GoodsID,Item>
	this.Count = Count;//HashMap<GoodsID,Count>
	
	this.getCount = function(){
		return this.Count;
	};
	this.getGoods = function(){
		return this.Goods;
	};


}