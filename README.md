<div align="center">
  <h2> TicketManagement </h2>  
</div>

<div align="center">
  <h3> Languages/Tools: </h3>
  <a href="https://www.w3schools.com/nodejs/default.asp"><img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"></a>     <!-- NodeJS -->
  <a href="https://react.dev/learn"><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"></a>                                  <!-- React -->
  <a href="https://reactrouter.com/en/main"><img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/></a>            <!-- React Router -->
  <a href="https://www.w3schools.com/js/default.asp"><img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"></a>       <!-- JavaScript -->
  <a href="https://expressjs.com/"><img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white"></a>                          <!-- Express -->
  <a href="https://www.mongodb.com/fr-fr"><img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"></a>                        <!-- MongoDB -->
  <a href="https://www.w3schools.com/html/default.asp"><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"></a>                <!-- HTML -->
  <a href="https://www.w3schools.com/css/default.asp"><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"></a>                   <!-- CSS -->
</div> <hr>

A full-stack web application used by registered users to manage support tickets, and to see logs from running services.   
Frontend fully done in React, while Backend is using NodeJS and Express.   
All the data are stored in a MongoDB database hosted locally on a Debian server.   
All the logs files of our services are stored locally on the Debian Server, and are accessed by our Backend app.

>[!NOTE]
>React Version: 18.0.0  
>React DOM Version: 18.0.0   
>NodeJS Version: 22.3.0  

<h2> Installation: </h2>

>[!TIP]
>Installation Tutorial:      
>I: Clone the github repo: `git clone https://github.com/KelyanDev/TicketManagement`   
>II: Go into one of the folders (either frontend or backend)  
>III: nstall all dependecies: `npm install`    
>IV: Launch the app: `npm start`  
>Once you've done that, just repeat the process from step II in the other folder   

For this to work, you'll need to have NodeJS on your System, aswell as npm (for packages / starting) and git (for cloning repo)   

>[!WARNING]
>The Database part will obviously not work, as you'll need a MongoDB database for that (either hosted locally or on Atlas).    
>You'll need to setup MongoDB on your own if you want the app to fully work   
>Same for the logs, you most likely won't have the services on your computer
