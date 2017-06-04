module.exports = function Cart(Goods,Count){
	this.Goods=Goods;//Set<Item>
	this.Count=Count;//HashMap<GoodsID,Count>
	this.printBuyList = function(){
		var totals = Number(0);
		Console.log("***<没钱赚商店>购物清单***");
		for(var item of Goods){
			var goodsNO = item.getNO();	
			var num = Count.get(goodsNO);
			var total = Number(num)*Number(item.getPrice());
			totals + = Number(total);
			Console.log("名称："+item.getName()+"，数量："+num"瓶，单价："+item.getPrice().toFixed(2)+"(元)，小计："+total.toFixed(2)+"(元)\n");
		}
		Console.log("----------------------\n总计："+totals+"(元)\n**********************");
	}


}