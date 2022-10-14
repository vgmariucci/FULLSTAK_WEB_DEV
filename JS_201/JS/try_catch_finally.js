console.log("Successfully loaded try_catch_finally.js");

const num = 10; // const variables cannot be changed. So, the try block will cause an error.

try{
    
    num = num + 20;

} catch(error){
    console.warn("ERROR", error);
} finally{
    console.log("The final number is", num);
}

