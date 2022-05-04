import signupPage from '../pages/SignupPage.js'
import signupFactory from '../factories/SignupFactory'

describe('signupPage', ()=> {

    // beforeEach(function(){
    //     cy.fixture('deliver').then((d) => {
    //         this.deliver = d
    //     })

    // })

    it('User should be delivery', function(){

        var deliver = signupFactory.deliver()
        
        const expectmessage = "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato."

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.modalContentShoulBe(expectmessage)
        
    });

    it('Incorrect document', function() {

        var deliver = signupFactory.deliver()
        deliver.cpf = '000000141AA'

        const expectalert = "Oops! CPF inválido"

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.alertMessageShoulBe(expectalert)
        
    });

    it('Incorrect email', function() {

        var deliver = signupFactory.deliver()
        deliver.email = 'ginatycarol.email.com'

        const expectalert = "Oops! Email com formato inválido."

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.alertMessageShoulBe(expectalert)
        
    });
    
    context('Required fields', function(){

        var messages = [
            {field:'name', output:'É necessário informar o nome'},
            {field:'cpf', output:'É necessário informar o CPF'},
            {field:'email', output:'É necessário informar o email'},
            {field:'postalcode', output:'É necessário informar o CEP'},
            {field:'number', output:'É necessário informar o número do endereço'},
            {field:'delivery_method', output:'Selecione o método de entrega'},
            {field:'cnh', output:'Adicione uma foto da sua CNH'}
        ]

        before(function(){
            signupPage.go()
            signupPage.submit()
        })

        messages.forEach(function(msg){
            it(`${msg.field} is required`, function(){
                signupPage.alertMessageShoulBe(msg.output)
            })
        })
    })

})