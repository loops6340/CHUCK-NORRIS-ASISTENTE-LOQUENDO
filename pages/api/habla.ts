// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { createReadStream } from 'fs'
type Data = {
  response: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
 
    const response = await axios({
      url: `https://cache-a.oddcast.com/tts/genB.php?EID=2&LID=2&VID=6&TXT=${req.query.txt!}&EXT=mp3&FNAME=&ACC=15679&SceneID=2692835&HTTP_ERR=`,
      responseType: "stream"
    })
  //  const stream = createReadStream(response.data)
    res.setHeader("Content-Type","audio/mpeg")
    res.status(200).send(response.data)
 
}