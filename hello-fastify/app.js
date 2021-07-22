const Fastify = require("fastify");
const BOOKS_DATA = require("./data.json");
const app = Fastify();

app.get("/books", async (req, res, next) => {
  res.send(BOOKS_DATA);
});

app.get("/books/1", async (req, res, next) => {
  res.send(BOOKS_DATA[0]);
});

app.get("/books/0", async (req, res, next) => {
  res.send(undefined);
});

app.post("/books", async (req, res, next) => {
  res.send({
    success: true,
    title: req.body.title
  });
});

app.listen(3000, () => {
  console.log(`Fastify server running at port 3000`);
});