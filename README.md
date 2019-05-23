### List of films in which this an actor starred!

This project was created in React.

I used separate components to hold the search functionality and list items. 

I stored the URL in state within App.js, and from that took the Actors name to use in a template literal for the fetch. 

From this fetch request, I stored the films the actor starred in in state within App.js, and then passed it down as a prop to the list component to create individual <li>'s. 
  
Upon entering a new URL, the list is removed and will not reoccur when entering the same URL as before. 


In the project directory, run:

'npm install && npm start'


Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
