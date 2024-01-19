document.getElementById('check-btn').addEventListener("click", function(){
  var inputValue = document.getElementById('text-input').value;
  var resultElement = document.getElementById('result');

  if(inputValue === ""){
    alert("Please input a value");
  }
  else{
    var isPalindrome = palindrome(inputValue);
    var resultText = isPalindrome ? ' is a palindrome' : ' is not a palindrome';
    resultElement.innerHTML = '<span class="first-word">' + inputValue + '</span>' + resultText;
    console.log(resultElement.innerHTML);
  }
});

function palindrome(str) {
  // Remove special characters, spaces, and convert to lowercase
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  console.log(str);

  // Reverse the string
  let reversed = str.split('').reverse().join("");
  console.log(reversed);

  // Check if the original and reversed strings are the same (palindrome)
  return str === reversed;
}





