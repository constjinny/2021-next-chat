import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Set-Cookie", "id=roket;Max-Age=0;HttpOnly,Secure");
  res.statusCode = 200;
  res.json({ result: true });
}
