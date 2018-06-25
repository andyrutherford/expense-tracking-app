const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Shaq',
            age: 40
        });
        reject('Something went wrong!!');
    }, 3000);

});

console.log('before');

//FIRST SYNTAX OF THEN CATCH

promise.then((data) => {
    console.log('1', data);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('this is my other promise');
        }, 3000);
    });
}).then((str) => {
    console.log('does this run?', str);
}).catch((e) => {
    console.log('Error: ', e);
});

//ALTERNATE SYNTAX OF THEN CATCH
// promise.then((data) => {
//     console.log(data);
// }, (e) => {
//     console.log('Error: ', e);
// }); 

console.log('after');