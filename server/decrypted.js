import jwt from "jsonwebtoken";
// Function to decrypt JWT back to original data

function decryptData()
{
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTWVnaGFuYSIsImFnZSI6MjAsImlhdCI6MTc1NTU5NzU4MSwiZXhwIjoxNzU1NTk4MTgxfQ.PNFlitK2x4PsG2dLqJX7-lTsEdRNpYyslCLhvFSxq6A"
let secretKey = "12345";

const decoded = jwt.verify(token, secretKey);
  console.log("Decrypted Data:", decoded);

}

decryptData();