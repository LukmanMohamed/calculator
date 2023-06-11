# Calculator Web Application

By: Lukman Mohamed

## The Front-End

The front-end of the application uses Angular, specifically Angular 16. You will need NPM and Angular in order to run the application.
After acquiring NPM and Angular, you can use the following commands to download the necessary packages.

```
cd calculator-web-application
npm install
```

## The Backend

The back-end of the application uses Node.js, Express and MongoDB. You will need all three in order to run the back-end. Node.js and Express can be acquired using the following command assuming you have already installed NPM.

```
cd server
npm install
```

You will have to acquire MongoDB from their [website](https://www.mongodb.com/docs/manual/installation/). 

## How to run the application

How to run the front-end (calculator-web-application):

```
cd calculator-web-application
ng serve --port 8081
```

How to run the back-end (server):

```
cd server
node server.js
```

Make sure your instance of MongoDB is running and pointed to a valid location for storing documents.

## Next Steps / What I Would Have Done Given More Time

​	To be clear, I covered the basic functionality of the task within my application. You can save, edit and delete mathematical expressions as well as evaluate them given substitutions for their variables. What I would have done given more time is improve the error handling and write unit tests for the application. What follows is a breakdown of those next steps based on the segment of code that would be improved.

| Change                       | Description                                                  |      |
| ---------------------------- | ------------------------------------------------------------ | ---- |
| Adding / Modifying Equations | There is currently no check that the provided expression is a valid mathematical expression. Implementing this change would be easy as the library I used for math provides such functionality but the actual validation would require me to change the form type which would necessitate more code and thus more time for testing. |      |
| Unit Tests                   | The two areas of the application most suited for unit tests is the controller/route code for handling REST API requests and the database schema. Given more time, I would add at least one test for each API requests and a few tests for ensuring data can be stored and retrieved from the database. |      |
| Substituting Values          | Similarly to modifying equations, there are no checks on the substitutions for a given mathematical expression. Values could be missing or non-numeric and the application will not warn the user. Fixing this would go best with changing the form type and implementing custom validators into the code. |      |