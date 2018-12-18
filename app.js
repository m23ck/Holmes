const Instagram = require("node-instagram").default;

const instagram = new Instagram({
    //get these 3 values by registering for an instagram developer account and then creating a new app.
    clientId: '...',
    clientSecret: '...',
    accessToken: '..',
  });

  instagram.get('users/self', (err, data) => {
    if (err) {
      // an error occured
      console.log(err);
    } else {
        console.log(data); //data.data.*whatever you want of the object*
    }
  });