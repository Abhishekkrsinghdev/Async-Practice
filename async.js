function demo() {
  // return new Promise((resolve,reject)=>{
  //     //resolve(10);
  //     //reject(20);
  // })
  return Promise.reject(10);
}

async function consume() {
  try {
    try {
      const value = await demo();
      console.log("Inside try------- ", value);
      return 5;
    } catch (errorValue) {
      console.log("Inside error-----------", errorValue);
      throw { err: "Throwing error" };
    }
  } catch (errorValue) {
    console.log("catching error of cathhhhhhh", errorValue);
  }
}
consume();
/**Here we can also put the consume funcn call inside another async funcn to handle its errors as follow
 * async function consume1(){
 *      try{
 *          let res=await consume();
 *         }
 *       catch(error){
 *          console.log("error")
 *      }
 *
 * }
 *
 *
 */

/**Here I have mixed both async await as well as promise the above consume is using async await its error
 * is using promise
 * */

// consume().then((value)=>{
//     console.log("successful execution-----",value);
// },(errorValue)=>{
//     console.log("errrrrrrrrrrr",errorValue);
// });

/**
 * 
 * Here .catch syntax can also be used 
 */
