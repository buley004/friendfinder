# friendfinder

Deployed Heroku application can be found at `https://blooming-fjord-48540.herokuapp.com/` 

This application allows users to fill out a survey and find their closest match based on a database of users who have filled out the same survey.  The survey consists of 10 questions, with each question being rated from 1-5.  The user's answers are compared to each existing user in the database, and the user's new best friend is displayed.  The user's data is added to the database, allowing for new incoming users to find them.

The friend database is stored at `/app/data/friends.js`, and new friends can be added here.  The database can be viewed at `/api/friends`.  Pages are displayed using Express server routing.  
