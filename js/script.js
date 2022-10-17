
function calcular1() {
    var qnt1 = document.querySelector('input#btn1')
    var valor1 = document.querySelector('span#valor1')
    var valorT = document.querySelector('span#valorT')
    
    var qnt = Number(qnt1.value)
    
    var stringSemRS = valorT.innerHTML.replace('R$ ', '').replace(',', '.')
    var stringSemRS = Number(stringSemRS)
    
    var res = stringSemRS * qnt
    valor1.innerHTML = `R$ ${res},00`

    var total = document.querySelector('span#total')
    var valor2 = window.document.querySelector('span#valor2')

    var stringSemRS = valor2.innerHTML.replace('R$ ', '').replace(',', '.')
    var stringSemRS = Number(stringSemRS)

    var totp = res + stringSemRS
    total.innerHTML = `R$ ${totp},00`

}

function calcular2() {
    var qnt2 = window.document.querySelector('input#btn2')
    var valor2 = window.document.querySelector('span#valor2')
    var valorA = window.document.querySelector('span#valorA')

    var qnt2 = Number(qnt2.value)

    var stringSemRS = valorA.innerHTML.replace('R$ ', '').replace(',', '.')
    var stringSemRS = Number(stringSemRS)
    
    var res = stringSemRS * qnt2
    valor2.innerHTML = `R$ ${res},00`

    

    var total = document.querySelector('span#total')
    var valor1 = window.document.querySelector('span#valor1')

    var stringSemRS = valor1.innerHTML.replace('R$ ', '').replace(',', '.')
    var stringSemRS = Number(stringSemRS)

    var totp = res + stringSemRS
    total.innerHTML = `R$ ${totp},00`
}

function remover1() {
    var qntp = document.querySelector('span#valor1')//Variavel para o Price
    var qntq = document.querySelector('input#btn1')//Variavel para a Quantidade

    qntp.innerHTML = 'R$ 0,00'
    qntq.value = 0

    var total = document.querySelector('span#total')
    var valor1 = window.document.querySelector('span#valor1')
    var valor2 = window.document.querySelector('span#valor2')

    var stringSemRS = valor1.innerHTML.replace('R$ ', '').replace(',', '.')
    var stringSemRS = Number(stringSemRS)
    
    var stringSemRS2 = valor2.innerHTML.replace('R$ ', '').replace(',', '.')
    var stringSemRS2 = Number(stringSemRS2)

    var totp = stringSemRS + stringSemRS2
    total.innerHTML = `R$ ${totp},00`
}

function remover2() {
    var qntp = document.querySelector('span#valor2')//Variavel para o Price
    var qntq = document.querySelector('input#btn2')//Variavel para a Quantidade

    qntp.innerHTML = 'R$ 0,00'
    qntq.value = 0

    var total = document.querySelector('span#total')
    var valor1 = window.document.querySelector('span#valor1')
    var valor2 = window.document.querySelector('span#valor2')

    var stringSemRS = valor1.innerHTML.replace('R$ ', '').replace(',', '.')
    var stringSemRS = Number(stringSemRS)
    
    var stringSemRS2 = valor2.innerHTML.replace('R$ ', '').replace(',', '.')
    var stringSemRS2 = Number(stringSemRS2)

    var totp = stringSemRS + stringSemRS2
    total.innerHTML = `R$ ${totp},00`
}

function purchace() {
    window.alert('comprpuuuuu')
}