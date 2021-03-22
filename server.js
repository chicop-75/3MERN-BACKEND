import { app } from './app';
const normalizePort = val => {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};
const port = normalizePort(8080);
const server = app.listen(port, () => {
    console.log(`The API 3MERN project server is running on port ${port}`);
});

