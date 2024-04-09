const express = require("express");
const app = express();

const things = [
  { id: 0, category: "Fruits", name: "Pomme", color: "Rouge" },
  { id: 1, category: "Animaux", name: "Chien", breed: "Labrador" },
  { id: 2, category: "Instruments", name: "Guitare", type: "Acoustique" },
  { id: 3, category: "Pays", name: "Japon", capital: "Tokyo" },
  { id: 4, category: "Fruits", name: "Banane", color: "Jaune" },
  { id: 5, category: "Voitures", name: "Tesla", model: "Model 3" },
  {
    id: 6,
    category: "Films",
    name: "Inception",
    director: "Christopher Nolan",
  },
  { id: 7, category: "Animaux", name: "Chat", breed: "Siamois" },
  { id: 8, category: "Livres", name: "Harry Potter", author: "J.K. Rowling" },
  { id: 9, category: "Fruits", name: "Orange", color: "Orange" },
  { id: 10, category: "Fruits", name: "Orange", color: "Orange" },
  { id: 444444444, category: "ygvbhujnk", name: "yfcvgbhj", color: "jbdehz" },
  { id: 444444444, category: "Fruits", name: "Orange", color: "Orange" },
];

app.get("/things", (req, res) => {
  const limit = req.query.limit;
  const category = req.query.category;

  let result = things;

  if (category) {
    result = result.filter((thing) => thing.category === category);
  }

  if (limit) {
    res.json(result.slice(0, limit));
  } else {
    res.json(result.slice(0, 10));
  }
});

app.get("/things/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const thing = things.find((element) => element.id === id);
  res.json(thing);
  // res.json(thing.name);
  // res.json(thing["name"])
});

const port = 3310;
app.listen(port);
