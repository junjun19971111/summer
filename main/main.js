module.exports = function main(num) {

	var str = new Array(3);
	for(var i=0;i<3;i++){
		str[i] = "";
	}//array [row]=content
	var numMap = new Map();
	var numArr = num.split("");
	for(var i=0;i<=9;i++){
		var map = new Map();//Map<"rowcol",val>
		switch(i){
			case 0:
				map.set("00",0);map.set("01",1);map.set("02",0);
				map.set("10",2);map.set("11",0);map.set("12",2);
				map.set("20",2);map.set("21",1);map.set("22",2);
				break;
			case 1:
				map.set("00",0);map.set("01",0);map.set("02",0);
				map.set("10",0);map.set("11",0);map.set("12",2);
				map.set("20",0);map.set("21",0);map.set("22",2);
				break;
			case 2:
				map.set("00",0);map.set("01",1);map.set("02",0);
				map.set("10",0);map.set("11",1);map.set("12",2);
				map.set("20",2);map.set("21",1);map.set("22",0);
				break;	
			case 3:
				map.set("00",0);map.set("01",1);map.set("02",0);
				map.set("10",0);map.set("11",1);map.set("12",2);
				map.set("20",0);map.set("21",1);map.set("22",2);
				break;
			case 4:
				map.set("00",0);map.set("01",0);map.set("02",0);
				map.set("10",2);map.set("11",1);map.set("12",2);
				map.set("20",0);map.set("21",0);map.set("22",2);
				break;
			case 5:
				map.set("00",0);map.set("01",1);map.set("02",0);
				map.set("10",2);map.set("11",1);map.set("12",0);
				map.set("20",0);map.set("21",1);map.set("22",2);
				break;
			case 6:
				map.set("00",0);map.set("01",1);map.set("02",0);
				map.set("10",2);map.set("11",1);map.set("12",0);
				map.set("20",2);map.set("21",1);map.set("22",2);
				break;
			case 7:
				map.set("00",0);map.set("01",1);map.set("02",0);
				map.set("10",0);map.set("11",0);map.set("12",2);
				map.set("20",0);map.set("21",0);map.set("22",2);
				break;
			case 8:
				map.set("00",0);map.set("01",1);map.set("02",0);
				map.set("10",2);map.set("11",1);map.set("12",2);
				map.set("20",2);map.set("21",1);map.set("22",2);
				break;								
			case 9:
				map.set("00",0);map.set("01",1);map.set("02",0);
				map.set("10",2);map.set("11",1);map.set("12",2);
				map.set("20",0);map.set("21",0);map.set("22",2);
				break;		
		}
		numMap.set(i,map);
	}
	for(var i in numArr){
		var myeach = numMap.get(Number(numArr[i]));
		for(var row = 0;row<3;row++){
			for(var col=0;col<3;col++){
				switch(myeach.get(row+""+col)){
					case 0:str[row]+='.';break;
					case 1:str[row]+='_';break;
					default:str[row]+='|';break;
				}//switch
			}//col for
			str[row]+=" ";
		}//row for
	}
	for(var index=0;index<3;index++){
		str[index]=str[index].substring(0,str[index].length-1);
	}
	var result = str[0]+"\n"+str[1]+"\n"+str[2]+"\n";
	return result;
}	


	
	