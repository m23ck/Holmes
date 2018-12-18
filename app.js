const Instagram = require("node-instagram").default;

//With the current instagram api you can only query the details of the
//account who has the access token and the users you invite to your sandbox. :(

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