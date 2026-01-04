import { Router } from 'express';
import {
  getServicios,
  createServicio,
  updateServicio,
  deleteServicio
} from '../controllers/servicios.controller.js';

const router = Router();

router.get('/', getServicios);
router.post('/', createServicio);
router.put('/:id', updateServicio);
router.delete('/:id', deleteServicio);

export default router;
