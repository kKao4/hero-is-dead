import dbConnect from "@/lib/dbConnect";
import type { NextApiRequest, NextApiResponse } from "next";
import New, { NewType } from "@/models/new";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await dbConnect();
    const method = req.method;
    switch (method) {
      case "GET": {
        let { limit } = req.query;
        limit = limit ?? "0";
        const news = await New.find({}).sort({ updatedAt: "desc" });
        const newData = news[0];
        res.status(200).json({ message: "Ok", data: newData });
      }
    }
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}
