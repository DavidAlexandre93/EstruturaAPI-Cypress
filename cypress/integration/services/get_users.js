/// <reference types="cypress" />


describe('Deve buscar resultado de comparacao de dados', () => {
    it('busca o resultado de comparacao de dados',  () => {
      cy.request({
        method: 'GET',
        url: 'https://www.mockachino.com/ee367c1a-bfdf-41/users'
      }).then((response) => {
        expect(response.status).to.equal(200);
      
        expect(response.body.users[0].nome).to.equal('David')
        expect(response.body.users[0].sobrenome).to.equal('Alexandre')
        expect(response.body.users[0].datanascimento).to.equal('24-11-1993')
        
      })
    })
  })


  describe('Deve buscar propriedades da api', () => {
    it('busca resultado das propriedades da api', () => {
      cy.request({
        method: 'GET',
        url: 'https://www.mockachino.com/ee367c1a-bfdf-41/users'
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.users[0]).to.have.property('nome')
        expect(response.body.users[0]).to.have.property('sobrenome')
        expect(response.body.users[0]).to.have.property('datanascimento')

      })
    })
  })


  it('Deve buscar propriedade e valor nos dados', () => {
    cy.request({
        method: 'GET',
        url: 'https://www.mockachino.com/ee367c1a-bfdf-41/users',
    }).then(response => {
      expect(response.status).to.equal(200);
      expect(response.body.users[0]).has.property('nome','David')
      expect(response.body.users[0]).has.property('sobrenome','Alexandre')
      expect(response.body.users[0]).has.property('datanascimento','24-11-1993')
        
        /*console.log(response)*/
    })
  
  })




