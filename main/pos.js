module.exports = function Pos(Goods,Count){
	this.Goods = Goods;//HashMap<GoodsID,Item>
	this.Count = Count;//HashMap<GoodsID,Count>
	this.printInventory = function(){
		var totals = Number(0);
		var str = "***<没钱赚商店>购物清单***\n";
		Count.forEach(function(value,key,map){
			var item = Goods.get(key);
			var goodsNO = item.getNO();	
			var num = Count.get(goodsNO);
			var total = Number(num)*Number(item.getPrice());
			totals += Number(total);
			str += "名称："+item.getName()+"，数量："+num+"瓶，单价："+item.getPrice()+"(元)，小计："+total.toFixed(2)+"(元)\n";
		});
		str += "----------------------\n总计："+totals+"(元)\n**********************";
		return str;
	};	


}