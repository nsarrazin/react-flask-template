# A template for working with react, flask & socketio
## Purpose
This repo contains a simple template for starting projects using the following stack :
- **React** & **Typescript** on the front-end
- **Flask** & **socketio** on the backend
- Docker with **docker-compose** and a **gunicorn** web server + **nginx** for deployment purposes.

## Installation
This project requires a working conda installation for the backend as well as npm for the client. For deployment docker and docker-compose are also needed.
```
git clone git@github.com:nsarrazin/react-flask-template.git
cd react-flask-template
npm install
```
### Development
This starts the server on http://localhost:3000/ with debug mode and it supports auto-reload for both front and backend.
```
npm run install:dev
npm run start:dev
```
### Docker
This starts the react app on http://localhost:8000/web/ using gunicorn and nginx for deployment purposes.
```
npm run build:docker
npm run start:docker
```

