require("dotenv").config();
const FB_APP_ID = process.env.FACEBOOK_ID;
const FB_SECRET = process.env.FACEBOOK_Secret;
const GO_APP_ID = process.env.GOOGLE_ID;
const GO_SECRET = process.env.GOOGLE_Secret;

module.exports = {
  facebookAuth: {
    appID: FB_APP_ID,
    appSecret: FB_SECRET,
    callbackURL: "http://localhost:5150/auth/facebook/callback"
  },
  googleAuth: {
    appID: GO_APP_ID,
    appSecret: GO_SECRET,
    callbackURL: "http://localhost:5150/auth/google/callback"
  }
};
