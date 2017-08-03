
# Node Authentication API using Passport OAuth Strategies
### using Facebook, Twitter and Google Logins

### TECHNOLOGIES/NPM MODULES
1. passport
2. passport-facebook
3. passport-google-oauth20
4. passport-twitter
5. PostgreSQL
6. pg-promise
7. bluebird
8. express-session

## SETTING UP CREDENTIALS

### AT FACEBOOK
1. Go here: https://developers.facebook.com/
2. Go to "Add a New App"
3. Go to Settings > Basic
4. Under App Domains, put in your App Domain or localhost
5. Add Platform > Website
6. App Review > Make your App public
7. Go to Dashboard > Click Show to get your App ID (Client ID) and App Secret (Client Secret)

### AT TWITTER
1. Go here: https://apps.twitter.com/
2. Go to Create New App
3. Once you finish you will get a Consumer Key and Consumer Secret

### AT GOOGLE
1. Go to the Google Developers Console: https://console.developers.google.com/
2. Create a Project
3. Go to Credentials > Create Credentials > OAuth Client ID > Web application
4. Once you Create, you will receive a Client ID and Client Secret
5. Lastly, go to Library > Social APIs > Google+ API (enable this API)

### DOCUMENTATION
1. Passport-Facebook: https://github.com/jaredhanson/passport-facebook
2. Passport-Twitter: https://github.com/jaredhanson/passport-twitter
3. Passport-Google: https://github.com/jaredhanson/passport-google-oauth2

### DOWNLOAD PROJECT & INSTALL
1. Git clone this project
2. Open up Terminal or Command line
3. Navigate to the directory where the project was cloned to
4. Run this command: psql -f ./config/db/schema.sql
5. This command will create a PostgreSQL database along with the tables
6. Setup environment variables:
    * Create .env file in your project root with these two variables
```
DATABASE_URL=postgres://localhost:5432/oauthsocial_app
SECRET_KEY=r![\xfdPo\xa0\x07G\xf2\xf9_zsWKB\x0e4+"+*\xbe

FB_CLIENT_ID=xxxxxxxxxxxxxxxxxxxx
FB_CLIENT_SECRET=xxxxxxxxxxxxxxxxxxxx
FB_CALLBACK=................/facebook/callback

TW_CONSUMER_KEY=xxxxxxxxxxxxxxxxxxxx
TW_CONSUMER_SECRET=xxxxxxxxxxxxxxxxxxxx
TW_CALLBACK=................/twitter/callback

G_CLIENT_ID=xxxxxxxxxxxxxxxxxxxx
G_CLIENT_SECRET=xxxxxxxxxxxxxxxxxxxx
G_CALLBACK=................/google/oauth2callback
```
7. To run the application, you need to install the dependencies, run this command: npm install --save
8. To start the application, run this command: npm start
9. The application will run at: localhost:3000, if that port is already in use, run this command: PORT=1738 npm start
10. This command will start the server at: localhost:1738