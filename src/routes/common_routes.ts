import express from 'express'
import { getCustomersData } from '../controller/customer-controller'
import { registerCustomer } from '../controller/auth-controller'

const router = express.Router()

router.get("/api/customers", getCustomersData as any)
router.post("/api/register", registerCustomer as any)

export default router;  