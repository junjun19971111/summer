module.exports = function main(num) {
	var str = new Array(num.length);//array [row]=content
	var numMap = new map();
	for(var i=0;i<=9;i++){
		var each = new map();//Map<"rowcol",val>
		switch(i){
			case 0:
				each.put("00",0);each.put("01",1);each.put("02",0);
				each.put("10",2);each.put("11",0);each.put("12",2);
				each.put("20",2);each.put("21",1);each.put("22",2);
				break;
			case 1:
				each.put("00",0);each.put("01",0);each.put("02",0);
				each.put("10",0);each.put("11",0);each.put("12",2);
				each.put("20",0);each.put("21",0);each.put("22",2);
				break;
			case 2:
				each.put("00",0);each.put("01",1);each.put("02",0);
				each.put("10",0);each.put("11",1);each.put("12",2);
				each.put("20",2);each.put("21",1);each.put("22",0);
				break;	
			case 3:
				each.put("00",0);each.put("01",1);each.put("02",0);
				each.put("10",0);each.put("11",1);each.put("12",2);
				each.put("20",0);each.put("21",1);each.put("22",2);
				break;
			case 4:
				each.put("00",0);each.put("01",0);each.put("02",0);
				each.put("10",2);each.put("11",1);each.put("12",2);
				each.put("20",0);each.put("21",0);each.put("22",2);
				break;
			case 5:
				each.put("00",0);each.put("01",1);each.put("02",0);
				each.put("10",2);each.put("11",1);each.put("12",0);
				each.put("20",0);each.put("21",1);each.put("22",2);
				break;
			case 6:
				each.put("00",0);each.put("01",1);each.put("02",0);
				each.put("10",2);each.put("11",1);each.put("12",0);
				each.put("20",2);each.put("21",1);each.put("22",2);
				break;
			case 7:
				each.put("00",0);each.put("01",1);each.put("02",0);
				each.put("10",0);each.put("11",0);each.put("12",0);
				each.put("20",0);each.put("21",0);each.put("22",2);
				break;
			case 8:
				each.put("00",0);each.put("01",1);each.put("02",0);
				each.put("10",2);each.put("11",1);each.put("12",2);
				each.put("20",2);each.put("21",1);each.put("22",2);
				break;								
			case 9:
				each.put("00",0);each.put("01",1);each.put("02",0);
				each.put("10",2);each.put("11",1);each.put("12",2);
				each.put("20",0);each.put("21",0);each.put("22",2);
				break;		
		}
		numMap.put(i,each);
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


	
	