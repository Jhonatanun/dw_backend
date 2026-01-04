import express from 'express';
import { supabase } from '../config/supabase.js';

const router = express.Router();

/**
 * Tipos de servicio
 */
router.get('/tipos-servicio', async (req, res) => {
  const { data, error } = await supabase
    .from('tipos_servicio')
    .select('id, nombre')
    .order('nombre');

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
});

/**
 * Estados de servicio
 */
router.get('/estados-servicio', async (req, res) => {
  const { data, error } = await supabase
    .from('estados_servicio')
    .select('id, nombre')
    .order('nombre');

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
});

/**
 * Formas de pago
 */
router.get('/formas-pago', async (req, res) => {
  const { data, error } = await supabase
    .from('formas_pago')
    .select('id, nombre')
    .order('nombre');

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
});

export default router;
