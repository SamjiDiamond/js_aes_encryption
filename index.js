const crypto = require('crypto');

function encryptData(data, pk, iv) {
    // Convert the data to a JSON string
    const jsonData = JSON.stringify(data);

    // Create a cipher object using AES-256-CBC
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(pk, 'utf8'), Buffer.from(iv, 'utf8'));

    // Encrypt the data
    let encrypted = cipher.update(jsonData, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    return encrypted;
}


const merchant_pk='pk_live_fyqqd3r992uo8ycxtwawsp33qhdzm71lycbv3l';
const reference='s2sref_988031157628438';

const data = {
    "number": "5399836656409195",
    "expiryMonth": "12",
    "expiryYear": "28",
    "cvv": "962"
};

// Ensure the key is 32 bytes long
const pk = merchant_pk.slice(0, 32);

// Ensure the IV is 16 chars long
const iv = reference.slice(0, 16);

console.log('IV:', iv); // Log the IV for debugging

const encryptedData = encryptData(data, pk, iv);
console.log('Encrypted Data:', encryptedData); // Log the Encrypted Value for debugging