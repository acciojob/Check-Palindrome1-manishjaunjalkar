// complete the given function

function palindrome(str){
str.toUpperCase();
	var ans = str.reverse();
	if(str==ans){
		return true;
	}
	else{
		return false;
	}
	
	
}
module.exports = palindrome
