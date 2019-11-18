# 💻 Getting Started
1. Clone the repo
2. Run `cd rania-rest-api` & `npm install`
3. Make a new file in the `config` directory called `database.config.js`
4. Add this line:

`
module.exports = {
  url:
    "mongodb+srv://USERNAME:PASSWORD@481group1-gqzp2.mongodb.net/test?retryWrites=true&w=majority"
};
`

5. Contact Victor for Username/Password to enter in above
  
  __**IMPORTANT:__ do __NOT__ push `database.config.js` under any circumstances, since the repo is public it will allow anyone that clones it to modify our database.
  
6. Run `node server.js` 
