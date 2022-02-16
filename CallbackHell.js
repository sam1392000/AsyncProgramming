// Lets keep the xmlHttpRequest in a function

const xmlHttpfunction = (resource,callback) => { // get function as parameter
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange" , () => {
        if(request.readyState===4 && request.status === 200  ){
            const data = JSON.parse(request.responseText) // to convert json string to json. responseText return json string
           callback(undefined , data)
        }else if(request.readyState === 4){
            callback("something went wrong!!!!" , undefined)
        }
            
        })
    request.open("GET",resource)
    request.send()
}


// The below funcrion is called as call back hell since many callback has been called inside
xmlHttpfunction("jsonData/csk.json",(error , response) => {
    if(error === undefined){
        console.log(response)
        xmlHttpfunction("jsonData/mi.json",(error,response) => {
            if(error === undefined){
                console.log(response)
                xmlHttpfunction("jsonData/rcb.json",(error,response) => {
                    if(error === undefined){
                        console.log(response)
                    }
                    else{
                        console.log(error)
                    }
                })
            }
            else{
                console.log(error)
            }
        })
    }else{
        console.log(error)
    }
});

/*
call function inside the another function is called as callback
Task is to print all csk player then mi players then rcb players


*/