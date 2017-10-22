## Deployer

deployer is a really simple NodeJS api webhook to take care of deploying your applications.

### Installation

#### Minimum requirements:
  - node: >= 5.0

You need to install manually by following a few steps:

1. Fetch a copy of this repository.
   ````
     Ex: 
       $ git clone git@github.com:brnbp/deployer.git && cd deployer
   ````

2. Navigate to the folder where you fetched the repository and install dependencies:
   ````
    $ yarn 
    or
    $ npm install
   ````
   
3. Install PM2 to manage node process and start him
    ````
      $ npm install -g pm2 && pm2 startup systemd
    ````

4. Confg PM2 Startup
    ````
      $ env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u root --hp /home/root
    ````

5. Configure your nginx/apache server for the deployer application proxying to folder
   ````
      $ chmod +x spt
   ````

5. Give server.js Permissions
    ````
        $ cd /var/www/deployer && chmod +x ./server.js
    ````
    
6. Start server.js with PM2
    ````
        $ cd /var/www/deployer &&  pm2 start server.js --name=deployer
    ````
    
7. You should be able to fire deploy events through your server ip + deployer port and the /fire endpoint
    ````
      $ curl 127.0.0.1:3004/fire
    ````
