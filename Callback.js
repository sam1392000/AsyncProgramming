// Lets keep the xmlHttpRequest in a function

const xmlHttpfunction = (callback) => { // get function as parameter
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange" , () => {
        if(request.readyState===4 && request.status === 200  ){
           callback(undefined , request.responseText)
        }else if(request.readyState === 4){
            callback("something went wrong!!!!" , undefined)
        }
            
        })
    request.open("GET","https://jsonplaceholder.typicode.com/todos")
    request.send()
}

xmlHttpfunction((error , response) => {
    // console.log("data received...") // this is callback function
    if(error === undefined){
        console.log(response)
    }else{
        console.log(error)
    }
});

// call function inside the another function is called as callback