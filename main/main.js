const Pos = require("../main/pos.js");
const Item = require("../main/Item.js");

module.exports = function printInventory(goodsArray) {
		var Goods = new Map();
		var cola = new Item('ITEM000000','可口可乐','3.00'); 
		var spirit = new Item('ITEM000001','雪碧','3.00');
		var battery = new Item('ITEM000004','电池','2.00');
		Goods.set('ITEM000000',cola);
		Goods.set('ITEM000001',spirit);
		Goods.set('ITEM000004',battery);

		var goodsMap = new Map();
		for(var element of goodsArray){
			if(goodsMap.has(element)){
				var num = Number(goodsMap.get(element));
				num++;
				goodsMap.set(element,num);
			}else{
				goodsMap.set(element,1);	
			}
		}
		var pos = new Pos(Goods,goodsMap);
		var result = pos.printInventory();
		console.log(result);
	}
	
	