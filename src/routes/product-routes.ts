import express from "express";
import { getOcProducts } from "../controller/product-controller";
import { getOcCountries } from "../controller/country-controller";

const router = express.Router();

router.get("/api/products", getOcProducts as any)
router.get("/api/countries", getOcCountries as any)

export default router