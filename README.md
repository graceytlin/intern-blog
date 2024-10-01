This web app was created using React to showcase my learnings and work as a summer intern in 2021.

A static version of this website can be found at https://graceytlin.github.io/intern-blog/

To run this web app locally, you must:
- Clone this repo
- Install dependencies ```npm install```
- Run the application ```npm run```



Previously, this website featured a question submission page utilising Ably API and emailjs, which can be seen in ```pages/QuestionsPage```
1) Create a .env file in the root folder
2) Add your Ably API key by adding the line<br/>

    <b>REACT_APP_ABLY_API_KEY=<i>YOUR_ABLY_API_KEY</i></b> (replacing <i>YOUR_ABLY_API_KEY</i> with your API key).
    
4) Add the following lines replacing the ids from your emailjs account:

    <b>REACT_APP_EMAILJS_SERVICEID=<i>YOUR_SERVICE_ID</i></b><br/>
    <b>REACT_APP_EMAILJS_TEMPLATEID=<i>YOUR_TEMPLATE_ID</i></b><br/>
    <b>REACT_APP_EMAILJS_USERID=<i>YOUR_USER_ID</i></b>
