import { app } from "./app";
import { DbConnect } from "./database/db.config";

DbConnect().then(() => {
    app.listen(process.env.BACKEND_PORT || 3000, () => {
        console.log(`Backend started on http://localhost:${process.env.BACKEND_PORT}`);
    },)
})
.catch((err) => {
    console.log("Database is not connected", err);
})