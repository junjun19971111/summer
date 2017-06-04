const Item = require("../main/Item.js");
module.exports = function Pos(Count){
	this.Count = Count;//HashMap<GoodsID,Count>
	this.printInventory = function(){
		var Goods = new Map();
		var cola = new Item('ITEM000000','可口可乐','3.00'); 
		var spirit = new Item('ITEM000001','雪碧','3.00');
		var battery = new Item('ITEM000004','电池','2.00');
		Goods.set('ITEM000000',cola);
		Goods.set('ITEM000001',spirit);
		Goods.set('ITEM000004',battery);
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