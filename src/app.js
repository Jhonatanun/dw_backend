import 'dotenv/config'; 
import cors from 'cors';
import express from 'express';

import serviciosRoutes from './routes/servicios.routes.js';
import catalogosRoutes from './routes/catalogos.routes.js';
import clientesRoutes from './routes/clientes.routes.js';
import gastosRoutes from './routes/gastos.routes.js';

const app = express();

/* 🔥 CORS SIEMPRE ANTES DE LAS RUTAS 🔥 */
const allowedOrigins = [
  'http://localhost:5173',
  'https://domiwash.netlify.app'
];

app.use(cors({
  origin: (origin, callback) => {
    // Permitir llamadas sin origin (Postman, curl, etc.)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));


app.use(express.json());

app.use((req, res, next) => {
  console.log(`➡️ ${req.method} ${req.url}`);
  next();
});



app.use('/api/servicios', serviciosRoutes);
app.use('/api/catalogos', catalogosRoutes);
app.use('/api/clientes', clientesRoutes);
app.use('/api/gastos', gastosRoutes);

app.get('/', (req, res) => {
  res.json({ ok: true, message: 'API funcionando 🚀' });
});

export default app;

