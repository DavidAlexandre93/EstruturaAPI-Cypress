/// <reference types="cypress" />

it('Deve alterar uma simulacao', () => {

    cy.request({
       url: 'https://www.mockachino.com/ee367c1a-bfdf-41/users/',
       method: 'PUT',
       headers: {
           'Content-Type':'application/json',
       },
       body:
           {
               "nome": "Fernandes",
               "sobrenome": "Alex",
               "datanascimento": "24-11-1991"
           }
       
   })

   .then(res => {
       expect(res.status).to.be.equal(200)
       expect(res.body).has.property('nome','David')
       expect(res.body).has.property('sobrenome','Alexandre')
       expect(res.body).has.property('datanascimento','24-11-1993')
       expect(res.body).to.deep.equal({
           
               "nome": "David",
               "sobrenome": "Alexandre",
               "datanascimento": "24-11-1993"
             
       })      
   })
})

