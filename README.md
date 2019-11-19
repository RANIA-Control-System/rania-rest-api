# 💻 Getting Started
1. Clone the repo
2. Run `cd rania-rest-api` & `npm install`
3. Make a new directory called `config` and inside a new file called `database.config.js`
4. Add this line:

```
module.exports = {
  url:
    "mongodb+srv://USERNAME:PASSWORD@481group1-gqzp2.mongodb.net/test?retryWrites=true&w=majority"
};
```

5. Contact Victor for Username/Password to enter in above
  
  __**IMPORTANT:__ do __NOT__ push `database.config.js` under any circumstances, since the repo is public it will allow anyone that clones it to modify our database.
  
6. Run `node server.js` 
7. Visit `http://localhost:3000/` in your browser. If everything worked successfully you should see: `{"message":"This is an example request."}`

# 🗂 Directory Structure & How to Contribute
```
rania-rest-api/
    └── node_modules/
    └── server.js
    └── config/
        └── database.config.js
    └── app/
        └── controllers/
            └── <COLLECTION NAME>.controller.js
        └── models/
            └── <COLLECTION NAME>.model.js
        └── routes/
            └── <COLLECTION NAME>.routes.js
```
This is a quick overview of how the api should be structured. I've structured out the patient collection, so if you look at all the files called `patient.<TYPE>.js` you should get an idea of how things work.

## 💾 Models 
These define the schema of the database using mongooose. These are all based on collections that are either in the database already or on the spreadsheet in the team drive. It should be fairly straigtforward to add new models.

## 🛣 Routes
These define the actions that can be done from the RANIA app or any connected devices (GET, POST, UPDATE, DELETE). Keep in mind I have examples for all of the standard ones in `patient.routes.js`, however more or less may be needed depending on what an application may need to fetch.

## 🕹 Controllers
This is where the bulk of the backend work is. These expand on the routes and contain all the logic for fetching and saving data. Again, see `patient.controller.js` for an example on how to write the code for these functions.
