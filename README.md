# Getting Started with This React App

## Related to backend
- Url: [Backend Repo](https://github.com/enmanuel23x/docker_test_backend)
## Running the React App
- ### Production Mode (Docker)
    - Create Docker image `docker build -t frontend:latest .`
    - Run Docker image `docker run -p 3000:3000 -d frontend:latest`

- ### Development mode
    - #### `npm start`
        Runs the app in the development mode.\
        Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

    - #### `npm run build`
        Builds the app for production to the `build` folder.\
        It correctly bundles React in production mode and optimizes the build for the best performance.