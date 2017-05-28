module.exports = function main(a) {
    console.log("Debug Info");
	var baiwei = a%100;
	var shiwei = (a/10)%10;
	var gewei = a/100;
    return baiwei+shiwei+gewei;
};