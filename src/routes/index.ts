import { Router } from 'express'
import { list, makeMultiplicationTable } from '../controllers'

const router = Router()

router.get('/', list)
router.get('/tabuada/do/:num', makeMultiplicationTable)

export { router }