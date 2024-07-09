/*
try catch syntax
    try{
    
    }
    catch(error){
    
    }
*/


function divide(a, b) {
    if (b===0) {
      throw new Error('Division by zero');
    }
    return a/b;
  }
  try {
    let result =divide(4, a);
    console.log(result);
  } catch (error) {
    console.log('An error occurred:', error.message); // Output: An error occurred: Division by zero
  }
  
