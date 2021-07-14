import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    res.setHeader("Set-Cookie", "id=roket;Max-Age=3600;HttpOnly,Secure");
    res.statusCode = 200;
    res.json({ result: true });
  }
}
