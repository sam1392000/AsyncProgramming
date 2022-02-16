/*
Fetch api is inbuilt in js
Fetch api return promise by default
To get data from the response use .json() method
*/

fetch("jsonData/mi.json")
    .then(data => { // data is a object in that object we have method called json() , which is used to get data
         /*
          * data.json() -> is used to get data from object .
          * It return promise.
          * So we return promise so that we can use another then and get the data
          *  */ 
        return data.json()

    })
    .then(data => { // use this then to get the data
        console.log(data)
    })
    .catch(Err => {
        console.log(Err);
    })