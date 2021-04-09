# What is Express?

a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

# Installations

npm init -y
npm i pg express
npm install --save cors

Lastly...
npm install -g nodemon

# What are these installations doing?

npm init -y -> generates an empty npm project without going through an interactive process
package.json will be installed

npm i pg express -> installs express and connection to PostgreSQL
node_modules and package-lock.json will be installed

npm install --save cors -> Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any other origins (domain, scheme, or port) than its own from which a browser should permit loading of resources.
Allows you to request data throoughout differnt applications

npm install -g nodemon -> installs nodemon. It is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected

# Other Notes

Body-parser -> body parsing middleware.Parse incoming request bodies in a middleware before your handlers
body-parser extract the entire body portion of an incoming request stream and exposes it on req.body.

Pool -> easiest way to configre back end and connect to postgreSQL
