const Item = require("../main/Item.js");
module.exports = function Cart(Goods,Count){
	this.Goods = Goods;//HashMap<GoodsID,Item>
	this.Count = Count;//HashMap<GoodsID,Count>
	this.printBuyList = function(){
		var totals = Number(0);
		console.log("***<没钱赚商店>购物清单***");
		for(var key in Count){	
			var item = Goods.get(Count[key]);
			var goodsNO = item.getNO();	
			var num = Count.get(goodsNO);
			var total = Number(num)*Number(item.getPrice());
			totals += Number(total);
			console.log("名称："+item.getName()+"，数量："+num+"瓶，单价："+item.getPrice()+"(元)，小计："+total.toFixed(2)+"(元)");
		}
		console.log("----------------------\n总计："+totals+"(元)\n**********************");
	}


}