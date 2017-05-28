module.exports = function main(str) {
    console.log("Debug Info");
	var sum = 0;
	for(var i in str){
	sum+=str[i];
	}
	return sum;
	
};