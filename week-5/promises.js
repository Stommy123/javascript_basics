const promiseToCleanRoom = new Promise((resolve, reject) => {
    const isClean = true
    // const isClean = false
    // if (isClean) resolve('Clean')
    // else reject('Whoops I forgot')
    isClean ? resolve('Clean') : reject('Whoops I forogt')
})

promiseToCleanRoom.then(result => console.log(`the room is ${result}`)).catch(error => console.log(`My excuse is: '${error}' `))