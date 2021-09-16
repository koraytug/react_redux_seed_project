import * as express from "express";
import * as bodyParser from "body-parser";
import CustomerRouter from "./routes/customer.route";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
if (process.env.NODE_ENV !== "production") dotenv.config();

const app = express.default();

const PORT = process.env.PORT || 4000;


const allowedOrigins = ["http://localhost:3000"];

const options: cors.CorsOptions = {
    origin: allowedOrigins
};
app.use(cors(options));

// app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended: true}));

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, "react_seed_client/build")));
//     app.get("*", (req, res) => {
//         res.sendFile(path.join(__dirname, "react_seed_client/build", "index.html"));
//     });
// }

app.get("/", (req, res) => {
    res.send("Hello");
});
const customerRouter = new CustomerRouter();

app.use("/", customerRouter.customerRouter);

app.listen(PORT, () => {

    console.log(`listening on port: ${PORT}`);
});
