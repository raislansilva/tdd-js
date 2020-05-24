import { expect } from 'chai'
import { FizzBuzz, add } from '../src/main'

/*import {calc,sum,sub,div,mult} from '../src/main'*/

/*var expect = require('chai').expect
var calc =  require('../src/main.js')/*/
/*describe('Main',() => {
   var arr=[1,2,3,4,5];

   context('valdidando array',() =>{

      it('tamanho do array', () =>{
        expect(arr).to.have.lengthOf(5)
      })
   
      it('elemento não existe no array', () =>{
        expect(arr).to.not.include(10)
      })
   
      it('tipo array', () =>{
       expect(arr).to.be.a('array')
      })
   })
   
})*/


/* Teste da calculadora */ 
/*describe('Calc',() => {
 
    describe('smoke tests',() =>{
 
    
      it('verificar se o metodo sum existe', () =>{
         expect(sum).to.exist;
         expect(sum).to.be.a('function');
       })

      it('verificar se o metodo sub existe', () =>{
        expect(sub).to.exist;
        expect(sub).to.be.a('function');
      })

      it('verificar se o metodo div existe', () =>{
        expect(div).to.exist;
        expect(div).to.be.a('function');
      })

      it('verificar se o metodo mult existe', () =>{
        expect(mult).to.exist;
        expect(mult).to.be.a('function');
      })

    })



    describe('Sum',() =>{
      it('resultado da soma de 2+2=4', () =>{
        expect(sum(2,2)).to.be.equal(4);
       
      })
    })


    describe('Sub',() =>{
      it('resultado da subtração de 2-4=2', () =>{
        expect(sub(2,4)).to.be.equal(-2);
       
      })
    })


    describe('Div',() =>{
      it('resultado da divisão de 10/2=5', () =>{
        expect(div(10,0)).to.be.equal("Não é possível a divisão por zero!");
       
      })
    })


    describe('Mult',() =>{
      it('resultado da multiplicação de 2*2=4', () =>{
        expect(mult(2,2)).to.be.equal(4);
       
      })
    })
    
 })*/


 /* teste add*/
  describe("Add", ()=>{
    it('return num',() =>{
      expect(add(12)).to.be.equal(12)
    })
  })


 /* Teste fuzzbuzz */
 describe('FizzBuzz',()=>{
    it('multiplo de 3', () =>{
      expect(FizzBuzz(3)).to.be.equal('Fizz');
      expect(FizzBuzz(6)).to.be.equal('Fizz');
    
    })

    it('multiplo de 5', () =>{
      expect(FizzBuzz(5)).to.be.equal('Buzz');
      expect(FizzBuzz(10)).to.be.equal('Buzz');
    
    })

    it('multiplo de 3 e 5', () =>{
      expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
      expect(FizzBuzz(30)).to.be.equal('FizzBuzz');
    
    })

    it('multiplo de nada', () =>{
      expect(FizzBuzz(7)).to.be.equal(7);
    
    })

    it('Igual a zero', () =>{
      expect(FizzBuzz(0)).to.be.equal(0);
    
    })
 })