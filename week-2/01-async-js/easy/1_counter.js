let counter = 1;

let interval = setInterval(()=>{
    counter === 11 ? clearInterval(interval) : console.log(counter)
    counter++
}, 1000)