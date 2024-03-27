const corsAnywhere = require('cors-anywhere');

const host = 'localhost';
const port = 3000;

corsAnywhere.createServer({
  originWhitelist: [], 
  requireHeaders: [], 
  removeHeaders: [] 
}).listen(port, host, () => {
  console.log(`CORS Anywhere server is running on ${host}:${port}`);
});
