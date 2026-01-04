import 'dotenv/config'; 
import cors from 'cors';
import express from 'express';

import serviciosRoutes from './routes/servicios.routes.js';
import catalogosRoutes from './routes/catalogos.routes.js';
import clientesRoutes from './routes/clientes.routes.js';
import gastosRoutes from './routes/gastos.routes.js';

const app = express();

/* 🔥 CORS SIEMPRE ANTES DE LAS RUTAS 🔥 */
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());


app.use('/api/servicios', serviciosRoutes);
app.use('/api/catalogos', catalogosRoutes);
app.use('/api/clientes', clientesRoutes);
app.use('/api/gastos', gastosRoutes);

app.get('/', (req, res) => {
  res.json({ ok: true, message: 'API funcionando 🚀' });
});

export default app;

