import { Request, Response } from 'express'

export const list = (req: Request, res: Response) => {

  const numbers : Array<number> = []

  for(let i=0; i <=100; i++) {
    numbers.push(i)
  }

  return res.render('home', { numbers })
}