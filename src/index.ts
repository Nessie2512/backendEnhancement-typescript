import http from "node:http";
import app from "./app.ts";
const Port =  process.env.PORT || 3000;


const server = http.createServer(app);

server.listen(Port, () => {
  console.log(`Server running at http://localhost:${Port}/`);
}); 
