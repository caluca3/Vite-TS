import { Router } from "express";
import passport from "passport";
import { Strategy } from "passport-google-oauth20";

export const oauthRouter = Router();

passport.use(
  new Strategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_PRIVATE_ID,
      callbackURL: "http://localhost:3001/api/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      //TODO llamar al controlador findorcreate user
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return cb(err, user);
      });
    }
  )
);

oauthRouter.get("/ejem", async (req, res) => {
  res.json({
    msg: "Hello world",
  });
});

const scopes = ["email"];

//!http://localhost:3001/api/auth/ejem
//* http://localhost:3001 + get '/ '
oauthRouter.get("/google", passport.authenticate("google", { scope: scopes }));

oauthRouter.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);
