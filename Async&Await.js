/*

Step-1 : Write all the code which takes time in async function . Async function always returns
Promise. 

Step-2 :Write await key before the network calling code that is before fetch and axios . await 
stops all the  code within the async function untill the particular line executes.

step-3:since the return statement in the async function return promise use .then() .catch() on the 
function call
*/

const getAsyncFunction = async() => {
    const response = await fetch("jsonData/csk.json")

    // To throw custom error
    if(response.status !== 200){
        throw new Error("Cannot fetch")
    }

    const data = await response.json()
    // console.log(data)
    return data // it return promise so use .then().catch() on the function call
}
getAsyncFunction()
.then(data => {
    console.log("Resolved.....",data)
})
.catch(err => {
    console.log(err.message)
})