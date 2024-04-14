import express from "express";
const app = express();
const port = 3000;

app.use(express.static("public"));

const jokes = [
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Parallel lines have so much in common. It’s a shame they’ll never meet.",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "Why don’t scientists trust atoms? Because they make up everything!",
  "I only know 25 letters of the alphabet. I don’t know y.",
];

app.get("/", (req, res) => {
  const random = Math.floor(Math.random() * jokes.length);
  const joke = jokes[random];
  res.render("index.ejs", { joke: joke });
});

app.listen(port, (req, res) => {
  console.log(`Listening server on the port ${port}`);
});
