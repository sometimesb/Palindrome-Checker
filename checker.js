// Function to check if a given string is a palindrome
function palindrome(str) {
  // Remove special characters, spaces, and convert to lowercase
  str = str.replace(/[_\s,.\-()]/g, "").toLowerCase();
  console.log(str);

  // Reverse the string
  let reversed = str.split('').reverse().join("");
  console.log(reversed);

  // Check if the original and reversed strings are the same (palindrome)
  if(str === reversed){
    return true;
  }
  
  // If not a palindrome
  return false;
}

// Example usage of the palindrome function with a test string
palindrome("0_0 (: /-\ :) 0-0");
