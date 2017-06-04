const Item = require("../main/Item.js");
const Cart = require("../main/Cart.js");

module.exports = function main(goodsArray) {
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
	var goods = new Set();
	var cola = new Item('ITEM000000','可口可乐','3.00'); 
	var spirit = new Item('ITEM000001','雪碧','3.00');
	var battery = new Item('ITEM000004','电池','2.00');
	goods.add(cola);
	goods.add(spirit);
	goods.add(battery);
	var cart = new Cart(goods,goodsMap);
	cart.printBuyList();
}