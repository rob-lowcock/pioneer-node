# Pioneer Node Server

This is the API server and websocket server for the Pioneer retro board. The corresponding frontend application can be found at [github.com/rob-lowcock/pioneer-frontend](https://github.com/rob-lowcock/pioneer-frontend).

## 🧑‍💻 Development
1. Download the repo and run `npm install`
2. Duplicate example.env and rename it to `.env`. The standard Postgres environment variables (`PGHOST`, `PGDATABSE`, `PGUSER`, `PGPASSWORD` etc.) can be used to set the database credentials.
3. Duplicate example.database.json and rename it to `database.json`, and amend it to set your development and production database credentials. This file is used to run the database migrations, so *DO NOT* deploy this file!
4. Run `npm run migrate -- up -e dev` to run the database migrations.
5. Run `npm run start` to start the development server

## 🌍 Deployment
Deployment is a bit more complicated as there are a few ways to do it. You might want to checkout [PM2](https://pm2.keymetrics.io/) and [Nginx](https://www.nginx.com/) as useful tools for this. As ever, [DigitalOcean has a useful tutorial on this](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04).

1. From your local environment, run `npm run migrate -- up -e prod` to run the database migrations.
2. Upload all files *except* the database.json file to the server.
3. On your server, set up a `.env` file for the production environment.
4. Ensure your server has an environment variable called `NODE_ENV` set to `production`.
5. Upload your built copy of [pioneer-frontend](https://github.com/rob-lowcock/pioneer-frontend) (i.e. the contents of the `dist` folder) to the public directory on your server.
6. On your server, run `npm run start` to start the production server.