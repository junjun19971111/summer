module.exports = function main(num) {
	var str = new Array(num.length);//array [row]=content
	var numMap = new Map();
	for(var i=0;i<=9;i++){
		var each = new Map();//Map<"rowcol",val>
		switch(i){
			case 0:
				each.set("00",0);each.set("01",1);each.set("02",0);
				each.set("10",2);each.set("11",0);each.set("12",2);
				each.set("20",2);each.set("21",1);each.set("22",2);
				break;
			case 1:
				each.set("00",0);each.set("01",0);each.set("02",0);
				each.set("10",0);each.set("11",0);each.set("12",2);
				each.set("20",0);each.set("21",0);each.set("22",2);
				break;
			case 2:
				each.set("00",0);each.set("01",1);each.set("02",0);
				each.set("10",0);each.set("11",1);each.set("12",2);
				each.set("20",2);each.set("21",1);each.set("22",0);
				break;	
			case 3:
				each.set("00",0);each.set("01",1);each.set("02",0);
				each.set("10",0);each.set("11",1);each.set("12",2);
				each.set("20",0);each.set("21",1);each.set("22",2);
				break;
			case 4:
				each.set("00",0);each.set("01",0);each.set("02",0);
				each.set("10",2);each.set("11",1);each.set("12",2);
				each.set("20",0);each.set("21",0);each.set("22",2);
				break;
			case 5:
				each.set("00",0);each.set("01",1);each.set("02",0);
				each.set("10",2);each.set("11",1);each.set("12",0);
				each.set("20",0);each.set("21",1);each.set("22",2);
				break;
			case 6:
				each.set("00",0);each.set("01",1);each.set("02",0);
				each.set("10",2);each.set("11",1);each.set("12",0);
				each.set("20",2);each.set("21",1);each.set("22",2);
				break;
			case 7:
				each.set("00",0);each.set("01",1);each.set("02",0);
				each.set("10",0);each.set("11",0);each.set("12",0);
				each.set("20",0);each.set("21",0);each.set("22",2);
				break;
			case 8:
				each.set("00",0);each.set("01",1);each.set("02",0);
				each.set("10",2);each.set("11",1);each.set("12",2);
				each.set("20",2);each.set("21",1);each.set("22",2);
				break;								
			case 9:
				each.set("00",0);each.set("01",1);each.set("02",0);
				each.set("10",2);each.set("11",1);each.set("12",2);
				each.set("20",0);each.set("21",0);each.set("22",2);
				break;		
		}
		numMap.set(i,each);
	}
	for(var i of num){
		var myeach = numMap.get(i);
		for(var row = 0;row<3;row++){
			for(var col=0;col<num.length;col++){//数字的位数
				switch(myeach.get(row+""+col)){
					case 0:str[row]+='.';break;
					case 1:str[row]+='_';break;
					default:str[row]+='|';break;
				}//switch
			}//col for
		}//row for
	}//对输入中的每一位数字

	var result = str[0]+"\n"+str[1]+"\n"+str[2]+"\n";
	return result;
}	


	
	