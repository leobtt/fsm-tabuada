import {list, makeMultiplicationTable} from './index'
import sinon from 'sinon'

describe('index controller', ()=> {
  it('renders home', () => {
    let req : any = {}
    let res : any= {
      render: function(){}
    }

    const num : any = []

    for(let i=1; i <=100; i++) {
      num.push(i)
    }

    const mock = sinon.mock(res)
    mock.expects('render').once().withArgs('home', { num })
    list(req, res)
  })
})


describe('multiplication Table', ()=> {
  it('renders multiplication table', () => {
    let req : any = {
      params: {
        num: 10
      }
    }
    let res : any= {
      render: function(){}
    }

    const multiplicationTable: any = [] 

  for (let i= 0; i<= 100; i++) {
    multiplicationTable.push({
      multiplied: Number(req.params.num),
      times: i,
      result: Number(req.params.num) * i,
    })
  }

    const mock = sinon.mock(res)
    mock.expects('render').once().withArgs('table', { multiplicationTable, num: req.params.num })
    makeMultiplicationTable(req , res)
  })
})