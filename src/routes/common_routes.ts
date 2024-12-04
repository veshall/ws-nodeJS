import express from 'express'
import { getCustomersData } from '../controller/customer-controller'

const router = express.Router()

router.get("/api/customers", getCustomersData as any)

export default router;