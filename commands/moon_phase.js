const axios = require('axios');

module.exports = async function(msg, args) {
    msg.channel.send('Moon Phase');
    let url = ``;
    let response = await axios.get(url)
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
    // let json = await response.json();
    console.log(response);
};