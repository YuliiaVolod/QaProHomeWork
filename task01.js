//Написати свою реалізацію функції isNaN.

function myIsNaN(value) {
    return value !== value;
}
  
  console.log(myIsNaN(5/0)); 
  console.log(myIsNaN('hello'));
  console.log(myIsNaN('123'));
  console.log(myIsNaN(''));
  console.log(myIsNaN(true));
  console.log(myIsNaN(false));
  console.log(myIsNaN(undefined));
  console.log(myIsNaN(NaN));
  