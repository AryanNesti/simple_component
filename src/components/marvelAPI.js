const CryptoJS = require('crypto-js');

const ts = 1;
const publicKey = "Key";
const privateKey = "Key";

const concatenatedString = ts + privateKey + publicKey;

export const marvelApiKey = publicKey;
export const marvelHash = CryptoJS.MD5(concatenatedString).toString();

