# FriendFinder
Web app that finds your friends adn gives you option to search with displaying a picture


The app will create express environment on a server. 
*** The app will contain the questions and the answers in arrays.

*** The app will contain point system that will collect the answers in array.
*** The app will create a profile of the person who is filling up by creating an array
*** The app will choose the best match by creating new array that holds the result of the minimum of the points between the two people [ 2,4,4,4,4,4,4] and [2,3,3,3,3,3] the result is [0,1,1,1,1,1,1,1] This result will be considered the best match if there is no other less than the sum of this array.
*** the app will popup a module that will display the object with the match . For instance Bob and his picture. The corresponding picture will be stored in a file and linked to variable.


 Paths will be created that will GET and POST on the server.

 # Used Techonologies
 ## NodeJS
 ## NPM library 
 ### NPM packages
 #### Express
 #### Paths
 #### Body- Parser
 ## JavaScript
 ## HTML, CSS 

#### Example code
```
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);
 


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
```

### Secreenshots
![alt text](images/watchbuddysurvey.png)
![alt text](images/watchbuddy.png)

### Installing
Sipmly run on NodeJS installation
```
node server.js
``` 
Kepp the folder structure as original. There are relative links that need the files referencing to them.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Northwestern Univeristy
* Phill


