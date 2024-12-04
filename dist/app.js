"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const init_models_1 = require("./model/init-models");
const sequelize_1 = require("./database/sequelize");
const product_routes_1 = __importDefault(require("./routes/product-routes"));
const common_routes_1 = __importDefault(require("./routes/common_routes"));
const PORT = process.env.PORT || 3001;
const app = (0, express_1.default)();
// app.use(cors())
// app.use(express.json())
(0, init_models_1.initModels)(sequelize_1.sequelize);
// routes
app.use('/', product_routes_1.default);
app.use('/', common_routes_1.default);
app.listen(PORT, () => {
    console.log(`server is running on PORT:`, PORT);
});
