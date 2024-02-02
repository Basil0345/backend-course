import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    orgin: process.env.CORS_ORGIN,
    credentials: true
}));

app.use(express.json({ limit: "16kb" }))
/*parse incoming JSON requests and set limit to 16kb 
 the incoming JSON payload exceeds 16 kilobytes,
 the middleware will reject the request with a 413
 (Payload Too Large) status code.*/

app.use(express.urlencoded({ extended: true, limit: "16kb" }))  // parse incoming requests with URL-encoded payloads

app.use(express.static("public"))

app.use(cookieParser());

export { app };