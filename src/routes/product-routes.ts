import express from "express";
import { getOcProducts } from "../controller/product-controller";

const router = express.Router();

router.get("/api/products", getOcProducts as any)

export default router