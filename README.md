# Chat-app
This application is the beck end art of the Chat applicaiton assignment.

# Information about the overall solution
Two separate applications built
 - spring boot backend api https://github.com/hussain21j/chat-app
 - angular 7 based UI application https://github.com/hussain21j/ng-chat-app
### Technologies used
 - spring boot -
 - Web socket(spring STOMP - Simple text oriented Messaging protocol, Sockjs)
 - Spring data
 - JUnit, Mockito, Spring rest Template
 - angular 7

# How to run the application
- Download the jar from the drop box
- The jar comprises both the api and build of the angular UI application as its static part
- open the command prompt or terminal, and go to the directory where tha jar is present
- use the command to run the jar file `java -jar chat-app-1.0.jar`
- once you see the success full message of spring boot, the application will start on port 8080
- open your browser , fill the address bar with url `http://localhost:8080/` and hit enter
- the application is available :)

# How to build the artifact / jar file
- Clone the git repository
- Go inside the project directory , root path
- build the artifact using `mvn clean install`
- thar jar would be built in target directory with name `chat-app-1.0.jar`