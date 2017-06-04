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
	var cart = new Cart(goodsMap);
	cart.printBuyList();
}