const crypto = require('crypto');
const axios = require('axios');
const url = "http://127.0.0.1:3000/register"

// RandomString

generateRandomString = function(length) {
  return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
}

// Request

let data = {
    username: 'start',
    password: 'stat'
};

const options = {
  headers: { 'Content-Type': 'application/json' }
};

startSpammer = function() {
    data.username = generateRandomString(10)
    data.password = generateRandomString(20)

    axios.post(url, data, options)
    .then(response => {
        console.log("Napad je uspesno prosao.")
    })
    .catch(error => {
        console.error('Greška:', error);
    });
}

setInterval(function() {
    startSpammer()
}, 1)