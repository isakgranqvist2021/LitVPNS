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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductsController = void 0;
const models_1 = require("../../models");
const getProductsController = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const documents = yield models_1.ProductModel.find({});
        return res.status(200).json({
            message: null,
            success: true,
            statusCode: 200,
            data: documents,
        });
    }
    catch (err) {
        return res.status(404).json({
            message: err,
            success: false,
            statusCode: 400,
            data: null,
        });
    }
});
exports.getProductsController = getProductsController;
