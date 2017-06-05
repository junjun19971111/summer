module.exports = function main(emailAddr,suffixArr) {
	var splits = emailAddr.split('@');
	var suffix = splits[splits.length-1];
	suffixArr.forEach(function(elem,index){
		if(elem == suffix)
			return true;
	});
	return false;
	
}
	
	