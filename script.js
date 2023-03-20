// complete the given function

function palindrome(str){
var ans = str.reverse();
	if(ans ==str){
		return true;
	}
	return false;
}
module.exports = palindrome
