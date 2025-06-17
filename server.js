const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5500;

app.use(cors());
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static("public"));

// Preset cab fares
app.post("/getCabFare", (req, res) => {
    const fares = {
        uber: {
            go: 150,
            auto: 120,
            sedan: 180,
            xl: 250
        },
        ola: {
            mini: 140,
            auto: 110,
            prime_plus: 190,
            prime_sedan: 220
        },
        rapido: {
            auto: 100,
            cab_economy: 150,
            cab_premium: 200
        }
    };
    res.json(fares);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
