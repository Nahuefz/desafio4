import express from "express";

const app = express();
const server = app.listen(8080, () => console.log("Listening on Express"));

let frase = "Frase incial";

app.get("/api/frase", (req, res) => {
  res.send({ frase });
});

app.get("/api/palabras/:pos", (req, res) => {
  let pos = req.params.pos;
  if (isNaN(pos))
    res.status(400).send({ status: "error", error: "Invalid type in pos" });
  let parsedPos = parseInt(pos);
  const words = frase.split(" ");
  if (parsedPos < 1 || parsedPos > words.length)
    return res
      .status(400)
      .send({ status: "error", error: "Index Out Of Bounds" });
  res.send({ word: words[parsedPos - 1] });
});
