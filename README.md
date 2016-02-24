You need git to clone the angular-seed repository. You can get it by: git clone git@github.com:codeschool/AngularJSSTB.git

We also use a number of node.js tools to initialize and test angular-seed. You must have node.js and its package manager (npm) installed. You can get them from http://nodejs.org/.

Clone angular-seed

Clone the angular-seed repository using [git][git]:

git clone git@github.com:codeschool/AngularJSSTB.git
cd AngularJSSTB
Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code. The tools help us manage and test the application.

We get the tools we depend upon via npm, the [node package manager][npm].
We get the angular code via bower, a [client-side code package manager][bower].
We have preconfigured npm to automatically run bower so we can simply do:

npm install
Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start this server is:

npm start
Now browse to the app at http://localhost:8000/app/index.html.

