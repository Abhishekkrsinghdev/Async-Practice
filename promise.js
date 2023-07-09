function demo(){
    // return new Promise((resolve,reject)=>{
    //     //resolve(10);
    //     //reject(20);
    // });
    return Promise.resolve(10);
}

demo().then(
    function onsuccess(value){
        console.log(value);
        // return 10;
        
    },
    function onError(errorValue){
        console.log("Inside first error -------",errorValue);
        //throw {error:"Throwing error from first then "};
    }
).then(
    (value)=>{
        console.log("inside second then ------",value)
    },
    (errorValue)=>{
        console.log("error thrown from first then -------",errorValue);
    }

)