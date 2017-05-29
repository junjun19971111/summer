module.exports = function main(numArray) {
   var Count=0;
   var MAX,MIN;
   var Sum=0;
    if(numArray == null){
		numArray = new Set([6, 9, 15, -2, 92, 11]);
	}
	for(var element of numArray){
		if(Count == 0 ){
			MAX = Number(element);
			MIN = Number(element);
		}
		if(Number(element)>Number(MAX)){
			MAX=element;
		}
		if(Number(element)<Number(MIN)){
			MIN=element;
		}
		Count++;
		Sum+=element;
	}
	var Average=Number(Sum)/Number(Count);
	console.log("o) 最小值 = "+MIN+"\n"+"o) 最大值 = "+MAX+"\n"+"o) 元素数量 = "+Count+"\n"+"o) 平均值 = "+Average.toFixed(2));
}