import express from "express"

const app = express()
const port: number = 3000
app.get('/', (req: any, res: any) => {
    res.send('The sedulous hyena ate the antelope!');
  });
  app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
  });