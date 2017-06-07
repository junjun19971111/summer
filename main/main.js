module.exports = function main(num) {
	var str = new Array[num.length];//array [row]=content
	for(var i of num){
		switch(i){
			//0->· 1->_ 2->|
			var map = new Map();//Map<"rowcol",val>
			case 0:
				map.put("00",0);map.put("01",1);map.put("02",0);
				map.put("10",2);map.put("11",0);map.put("12",2);
				map.put("20",2);map.put("21",1);map.put("22",2);
				break;
			case 1:
				map.put("00",0);map.put("01",0);map.put("02",0);
				map.put("10",0);map.put("11",0);map.put("12",2);
				map.put("20",0);map.put("21",0);map.put("22",2);
				break;
			case 2:
				map.put("00",0);map.put("01",1);map.put("02",0);
				map.put("10",0);map.put("11",1);map.put("12",2);
				map.put("20",2);map.put("21",1);map.put("22",0);
				break;	
			case 3:
				map.put("00",0);map.put("01",1);map.put("02",0);
				map.put("10",0);map.put("11",1);map.put("12",2);
				map.put("20",0);map.put("21",1);map.put("22",2);
				break;
			case 4:
				map.put("00",0);map.put("01",0);map.put("02",0);
				map.put("10",2);map.put("11",1);map.put("12",2);
				map.put("20",0);map.put("21",0);map.put("22",2);
				break;
			case 5:
				map.put("00",0);map.put("01",1);map.put("02",0);
				map.put("10",2);map.put("11",1);map.put("12",0);
				map.put("20",0);map.put("21",1);map.put("22",2);
				break;
			case 6:
				map.put("00",0);map.put("01",1);map.put("02",0);
				map.put("10",2);map.put("11",1);map.put("12",0);
				map.put("20",2);map.put("21",1);map.put("22",2);
				break;
			case 7:
				map.put("00",0);map.put("01",1);map.put("02",0);
				map.put("10",0);map.put("11",0);map.put("12",0);
				map.put("20",0);map.put("21",0);map.put("22",2);
				break;
			case 8:
				map.put("00",0);map.put("01",1);map.put("02",0);
				map.put("10",2);map.put("11",1);map.put("12",2);
				map.put("20",2);map.put("21",1);map.put("22",2);
				break;								
			case 9:
				map.put("00",0);map.put("01",1);map.put("02",0);
				map.put("10",2);map.put("11",1);map.put("12",2);
				map.put("20",0);map.put("21",0);map.put("22",2);
				break;		
		}
		for(var row = 0;row<3;row++){
			for(var col=0;col<num.length;col++){//数字的位数
				switch(map.get(row+""+col)){
					case 0:str[row]+='.');break;
					case 1:str[row]+='_';break;
					default:str[row]+='|';break;
				}//switch
			}//col for
		}//row for
	}//对输入中的每一位数字

	var result = str[0]+"\n"+str[1]+"\n"+str[2]+"\n";
	return result;
}	


	
	