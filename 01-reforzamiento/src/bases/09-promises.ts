const myPromise = new Promise<Number>((resolve, reject) => {
    setTimeout(() => {
        //resolve(100)
        reject('Something went wrong')
    }, 2000); // 2 seconds
})

myPromise.then(
    (myMoney) => {
        console.log(`My money is:  ${myMoney}`);
    })
.catch((reason) => {console.warn(reason)    
})
.finally(() => {
    console.log('Finally');
});
