// Adnan Akram 
function Sub(arr) {
    let sum =0;  // here subarry sum value
    let cursum = 0; // current value
    if(arr.length===0 ){ // here if condition check array length is empty  

        console.log("empty")
    }else{
       
    for(let i=0 ;i<arr.length;i++){  // check length of array 

         
        cursum +=arr[i];  // the value added in currsum
        if(cursum>sum){   // check the condition for currsum value and sum value 

            sum=cursum;
        }  
         if(cursum<0){   // check the currsum value
       
            cursum = 0
        }
    
}
}
    return sum;
    
};
console.log(Sub([1,2,3,-7,8,-9])); // static array parameter pass in the function
  

