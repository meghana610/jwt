import jwt from "jsonwebtoken";

const secretKey = "12345";

//  In production, store in .env

// Function to encrypt data into JWT


function encryptData() {

  const data = { name: "Meghana",  age: 20 };

  const token = jwt.sign(data, secretKey, { expiresIn: "10m" });

  console.log("Encrypted Token:", token);

}

encryptData() 

