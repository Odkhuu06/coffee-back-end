import express, { Request, Response } from "express";

const app = express();
const port = 3002;
app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
    res.send('hi')
})
app.listen(port, async () => {
  console.log(`http://localhost:${port}`);
});