module.exports = function Cart(Goods,Count){
	this.Goods=Goods;//Set<Item>
	this.Count=Count;//HashMap<GoodsID,Count>
	this.printBuyList = function(){
		var totals = Number(0);
		Console.log("***<ûǮ׬�̵�>�����嵥***");
		for(var item of Goods){
			var goodsNO = item.getNO();	
			var num = Count.get(goodsNO);
			var total = Number(num)*Number(item.getPrice());
			totals + = Number(total);
			Console.log("���ƣ�"+item.getName()+"��������"+num"ƿ�����ۣ�"+item.getPrice().toFixed(2)+"(Ԫ)��С�ƣ�"+total.toFixed(2)+"(Ԫ)\n");
		}
		Console.log("----------------------\n�ܼƣ�"+totals+"(Ԫ)\n**********************");
	}


}