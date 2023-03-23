// complete the given function

function palindrome(str){
	str = str.toLowerCase();
	let start =0;
	let end = str.length-1;
	while (start<=end) {
	if(str.charAt(start)===str.charAt(end)){
		start++;
		end--;
	}
	else{
		return false;
	}
	
}
	return true;	
}
module.exports = palindrome
