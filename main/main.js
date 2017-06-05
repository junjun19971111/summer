module.exports = function main(emailAddr,suffixArr) {
	var splits = emailAddr.split('@');
	var suffix = splits[splits.length-1];
	var result = false;
	suffixArr.forEach(function(elem){
		if(elem == suffix)
			result = true;
		});
		return result;
	}	

	
	