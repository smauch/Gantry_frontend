# Frontend for Smart Robotics Project

## About the Project
In collaboration with Dunkermotoren, students from the linkit university group have developed a robot system for trade fairs that demonstrates the interaction of computer vision and highly dynamic linear actuators.

Randomly moved small chocolate bars of different flavours are recognised and handed over to the trade fair visitor with a gantry gripping system.

![DSC05275](https://user-images.githubusercontent.com/34418781/214542775-1b7d7d20-e885-47ce-8268-d5d87fd6e749.jpg)

### Watch the project video
https://www.youtube.com/watch?v=5CfFuI3hKgs

## Dev

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.24.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/home`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

# Docker
docker build -t mauchsam/messemodell-webapp:latest .
docker push mauchsam/messemodell-webapp:latest
docker run -p 8080:80 mauchsam/messemodell-webapp:latest
