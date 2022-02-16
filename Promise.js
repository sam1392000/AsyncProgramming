/* To simplify call back we hava promises its syntax is simple which return promise
    return new Promise() -> which takes two arguments resolve and reject
*/

const PromiseFunction = (resource) => {
    return new Promise((resolve,reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener("readystatechange" , () => {
        if(request.readyState===4 && request.status === 200  ){
            const data = JSON.parse(request.responseText) // to convert json string to json. responseText return json string
            // if the data is retrieved successfully then the data is resolved that data is returned
            resolve(data)
        }else if(request.readyState === 4){
            // if the data is not retrieved successfully then the data is rejected
            reject(">>>>>>>>> Something went wrong >>>>>>>")
        }
            
        })
        request.open("GET",resource)
        request.send()
    })
}

PromiseFunction("jsonData/mi.json").then(data => {
    console.log(data)
}).catch(Err => {
    console.log(Err);
})