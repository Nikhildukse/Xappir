import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());  // Allow cross-origin requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    return res.send('hello');
});

// Use Routes
import routes from './routes/index.js';
app.use(routes);

app.listen(PORT, () => console.log(`server running on ${PORT}`));
