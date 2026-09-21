import crypto from "crypto"
const algorithm="aes-256-cbc"
const key=Buffer.from(process.env.ENCRYPTION_KEY,"hex")
export default function encrypt(text){
    const iv=crypto.randomBytes(16)
    const cipher=crypto.createCipheriv(algorithm,key,iv)
    let encrypted=cipher.update(text,"utf8","hex")
    encrypted+=cipher.final("hex")
    
    return{
        iv:iv.toString("hex"),
        encryptedData:encrypted
    }
}

