let counter = 1;
let timeout = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            counter === 10 ? resolve() : timeout()
            console.log(counter)
            counter++
        }, 1000)
    })
}

timeout()