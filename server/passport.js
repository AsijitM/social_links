const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_CLIENT_ID =
  '118837517327-9f5n51vfq12fia490gl6cohr7afen688.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
      //For MongoDB
      // const user = {
      //     username: profile.displayName,
      //     avatar: profile.photos[0];
      // };

      // user.save();
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});
