import { Request, Response } from 'express'


type TmultiplicationTable = Array<{
  multiplied: number,
  times: number,
  result: number
}>

export const makeMultiplicationTable = (req: Request, res: Response) => {
  const { num } = req.params
  const multiplicationTable: TmultiplicationTable = [] 

  for (let i= 0; i<= 100; i++) {
    multiplicationTable.push({
      multiplied: Number(num),
      times: i,
      result: parseFloat(num + i),
    })
  }

  return res.render('home', { multiplicationTable })
}