import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('/Rooms');
});

export default router;
