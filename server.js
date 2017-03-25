var promise  = require('bluebird');

function getData(shouldResolve) {
    return new promise(function(resolve, reject) {
        // perform your asynchronous operation
        setTimeout(function() {
            if(shouldResolve) {
                resolve({ message: 'I love Airbnb' });
            } else {
                reject({message: 'oops something went wrong!!!'})
            }
        }, 3000);
    });
}

getData(false).then(function(data) {
    console.log(data);
}).catch(function(data){
    console.log(data);
});

