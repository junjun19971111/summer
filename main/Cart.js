const Item = require("../main/Item.js");

module.exports = function Cart(Count){
	var goods = new Set();
	var cola = new Item('ITEM000000','可口可乐','3.00'); 
	var spirit = new Item('ITEM000001','雪碧','3.00');
	var battery = new Item('ITEM000004','电池','2.00');
	goods.add(cola);
	goods.add(spirit);
	goods.add(battery);

	this.Count=Count;//HashMap<GoodsID,Count>
	this.printBuyList = function(){
		var totals = Number(0);
		console.log("***<没钱赚商店>购物清单***");
		for(var item of goods){
			var goodsNO = item.getNO();	
			var num = Count.get(goodsNO);
			var total = Number(num)*Number(item.getPrice());
			totals += Number(total);
			console.log("名称："+item.getName()+"，数量："+num+"瓶，单价："+item.getPrice()+"(元)，小计："+total.toFixed(2)+"(元)");
		}
		console.log("----------------------\n总计："+totals+"(元)\n**********************");
	}


}