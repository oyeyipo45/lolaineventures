"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var _default = {
  MONGODB: process.env.MONGODB_URL,
  SECRET: process.env.SECRET,
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID
};
exports["default"] = _default;