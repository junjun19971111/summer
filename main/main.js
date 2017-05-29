module.exports = function main(numArray) {
    console.log("Debug Info");
	numArray.forEach(function (element,index,array){
		if(Count == 0 ){
			MAX = Number(element);
			MIN = Number(element);
			alert(MAX);
		}
		if(Number(element)>Number(MAX)){
			MAX=element;
		}
		if(Number(element)<Number(MIN)){
			MIN=element;
		}
		Count++;
		Sum+=element;
	});
	var Average=Number(Sum)/Number(Count);
	return "o) 最小值 = "+MIN+"\n"+"o) 最大值 = "+MAX+"\n"+"o) 平均数量 = "Count+"\n"+"o) 平均值 = "+Average.toFixed(2);
	}
};