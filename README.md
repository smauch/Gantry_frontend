# DunkermotorenMessemodel

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.24.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/home`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

# Docker
docker build -t mauchsam/messemodell-webapp:latest .
docker push mauchsam/messemodell-webapp:latest
docker run -p 8080:80 mauchsam/messemodell-webapp:latest