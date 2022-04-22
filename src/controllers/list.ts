import { Request, Response } from 'express'

export const list = (req: Request, res: Response) => {

  const num : Array<Number> = []

  for(let i=1; i <=100; i++) {
    num.push(i)
  }

  return res.render('home', { num })
}