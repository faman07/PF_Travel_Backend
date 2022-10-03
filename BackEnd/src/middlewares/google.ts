import passport from 'passport'
var GoogleStrategy = require('passport-google-oauth20').Strategy;
import {config} from "dotenv"
config()

const emails = ["willygarciaz@gmail.com","alxzbrno@gmail.com"]

passport.use(
    "auth-google",
    new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/"
  },
  function(accessToken: any, refreshToken: any, profile: any, cb: any) {
    const response = emails.includes(profile.emails[0].value) 

    if (response) {
        cb (null, profile)
    } else {
        emails.push(profile.emails[0].value)
        cb (null, profile)
    }
  }
));