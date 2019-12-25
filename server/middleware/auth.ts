import jwt from "jsonwebtoken";

import { JWT_PRIVATE_KEY } from "../config";

export const auth = (req: any, res: any, next: any) => {
  // extract token
  const token = req.header("x-auth-token");

  if (!token) return res.status(401).send("Access denied, no token provided");

  try {
    const decoded = jwt.verify(token, JWT_PRIVATE_KEY);
    req.user = decoded;

    next();
  } catch (ex) {
    res.status(400).send("Invalid token");
  }
};
