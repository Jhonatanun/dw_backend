import { supabase } from '../config/supabase.js';

export const getServicios = async (req, res) => {
  const { data, error } = await supabase
    .from('vista_servicios_detalle')
    .select('*')
    .order('fecha', { ascending: false });

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
};

export const createServicio = async (req, res) => {
  const {
    fecha,
    tipo_servicio_id,
    precio,
    costo,
    cliente_id,
    forma_pago_id,
    estado_id,
    observaciones
  } = req.body;

  if (!tipo_servicio_id || !precio || !costo || !estado_id) {
    return res.status(400).json({ message: 'Faltan datos obligatorios' });
  }

  const { error } = await supabase
    .from('servicios')
    .insert({
      fecha,
      tipo_servicio_id,
      precio,
      costo,
      cliente_id,
      forma_pago_id,
      estado_id,
      observaciones
    });

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(201).json({ message: 'Servicio creado correctamente' });
};


export const updateServicio = async (req, res) => {
  const { id } = req.params;

  const {
    fecha,
    tipo_servicio_id,
    precio,
    costo,
    cliente_id,
    forma_pago_id,
    estado_id,
    observaciones
  } = req.body;

  const { error } = await supabase
    .from('servicios')
    .update({
      fecha,
      tipo_servicio_id,
      precio,
      costo,
      cliente_id,
      forma_pago_id,
      estado_id,
      observaciones
    })
    .eq('id', id);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json({ message: 'Servicio actualizado' });
};


export const deleteServicio = async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase
    .from('servicios')
    .delete()
    .eq('id', id);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json({ message: 'Servicio eliminado' });
};
