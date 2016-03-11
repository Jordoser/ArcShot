// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '1110249605662560', // your App ID
        'clientSecret'  : '671c0dad38f30bca7babcae2685c7b3d', // your App Secret
        'callbackURL'   : 'http://localhost:8888/auth/facebook/callback'
    }
};