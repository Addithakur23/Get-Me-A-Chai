import crypto from "crypto"
import encrypt from "./encrypted.js"
const algorithm="aes-256-cbc"
const key=Buffer.from(process.env.ENCRYPTION_KEY,"hex")
export default function decrypt(encryptedData,iv){
        const decipher=crypto.createDecipheriv(algorithm,key,Buffer.from(iv,"hex"))
        let decrypted=decipher.update(encryptedData,"hex","utf8")
        decrypted+=decipher.final("utf8")
        return decrypted 
    }