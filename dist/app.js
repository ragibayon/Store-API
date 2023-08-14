"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
require('express-async-errors');
const connectDB_1 = __importDefault(require("./db/connectDB"));
const error_handler_1 = __importDefault(require("./middleware/error-handler"));
const not_found_1 = __importDefault(require("./middleware/not-found"));
const products_1 = __importDefault(require("./routes/products"));
const app = (0, express_1.default)();
// routes
app.get('/', (req, res, next) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">products route </a>');
});
app.use('/api/v1/products', products_1.default);
app.use(not_found_1.default);
app.use(error_handler_1.default);
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, connectDB_1.default)(process.env.MONGODB_URI);
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`App is running on ${PORT}`);
    });
});
startServer();
