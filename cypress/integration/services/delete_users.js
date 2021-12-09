/// <reference types="cypress" />

it('Deletar um usuario dos dados', () => {
 
    cy.request({
        method: 'DELETE',
        url: 'https://www.mockachino.com/ee367c1a-bfdf-41/users',
        headers: {
            'Content-Type':'application/json',
        },
    })
    
    .then(response => {
        expect(response.status).to.eq(200)
        expect(response.body).is.not.empty
        /*console.log(response)*/
    })

})


