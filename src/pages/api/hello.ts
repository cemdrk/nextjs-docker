import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const Handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.json({ msg: "Hello" });
};
export default Handler;
