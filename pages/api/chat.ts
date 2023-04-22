// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {chat$} from '../../characterai'
type Data = {
  response: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.method === "POST") {
  chat$.subscribe(async (chat: any) => {
    const response:any = await chat.sendAndAwaitResponse(req.body.texto, true)

    res.status(200).json({ response: response.text })
  })
  }
}
