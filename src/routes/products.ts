import {Router} from 'express';
import {getAllProductsStatic, getAllProducts} from '../controllers/products';

const router = Router();

router.get('/', getAllProducts);
router.get('/static', getAllProductsStatic);

export default router;
