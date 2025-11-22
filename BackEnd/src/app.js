import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import aiRoutes from './routes/ai.routes.js';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello world');
});

app.use('/ai', aiRoutes);

export default app;
