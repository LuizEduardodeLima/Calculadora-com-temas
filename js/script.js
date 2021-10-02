//Pegando elementos responsáveis por mudar o tema da calculadora:
const theme1 = $('.theme-one');
const theme2 = $('.theme-two');
const theme3 = $('.theme-tree');
    
//Pegando o elemento tela:
let screen = $('.values');
//Guardará o primeiro número a ser operado:
let value = 0
let initialValue = 0
let secondValue = 0

let result = 0
//Para evitar zeros a esquerda:
let start = 0
let secondStart = 0

//Variável que irá mostrar os valores que estão sendo somados:
let screenMensage = $('.mensage');

//Variável que servirá para salvar a operação a ser feita na função igual:
let signal = null

//Variável para controlar apertos dos botões de operadores:
let typeOperation = null
let startOperation = 0
    
//Funções responsáveis por mudar o tema:
theme1.click(function(){
  firstTheme()
})

theme2.click(function(){
  secondTheme()
})

theme3.click(function(){
  thirdTheme()
})

//Função que pega o elemento clicado pelo usuário e seu valor:
function button_click(x){
  if (x != 0 && start == 0) {
    //Evitar que entre apenas o ponto sem o zero a esquerda:
    if (x == '.') {
      value = 0 + x.toString()
      start += 1
      screen.html(value)
    }else{
      value = x.toString()
      start += 1
      screen.html(value)
    }
  }else if (start === 1){
    value += x.toString()
    screen.html(value)
  }
}

//Função responsável por fazer as operações:
function operation(x){
  if (startOperation == 0) {
    typeOperation = x
    startOperation = 1
  }else{
    x = typeOperation
  }
  //Somar:
  if (x === '+'){
    //Salvando tipo de operação, para acaso o usuário apertar botão de igual:
    signal = '+'
    if(secondStart == 0) {
      //Salvando valor da primeira soma:
      initialValue = value
      //Setando valor que será calculado:
      screenMensage.html(initialValue + " + ")
      screen.html('0')
      //Zerando variável valor:
      value = 0
      //Incrementado variável de controle:
      secondStart += 1
      start = 0
    }else{
      secondValue = value
      initialValue = parseFloat(initialValue)
      secondValue = parseFloat(secondValue)
      result = initialValue + secondValue
      screenMensage.html(initialValue + " + " + secondValue + " = " + result)
      //Setando valor zero na tela:
      screen.html('0')
      //Setando variáveis de calculo:
      initialValue = 0
      secondValue = 0
      value = 0
      secondStart = 0
      start = 0
      typeOperation = null
      startOperation = 0
    }   
  }

  //Subtrair:
  if (x === '-'){
    //Salvando tipo de operação, para acaso o usuário apertar botão de igual:
    signal = '-'
    if(secondStart == 0 ) {
      //Salvando valor da primeira soma:
      initialValue = value
      //Setando valor que será calculado:
      screenMensage.html(initialValue + " - ")
      screen.html('0')
      //Zerando variável valor:
      value = 0
      //Incrementado variável de controle:
      secondStart += 1
      start = 0
    }else{
      secondValue = value
      initialValue = parseFloat(initialValue)
      secondValue = parseFloat(secondValue)
      result = initialValue - secondValue
      screenMensage.html(initialValue + " - " + secondValue + " = " + result)
      //Setando valor zero na tela:
      screen.html('0')
      //Setando variáveis de calculo:
      initialValue = 0
      secondValue = 0
      value = 0
      secondStart = 0
      start = 0
      typeOperation = null
      startOperation = 0
    }
  }

  //Subtrair:
  if (x === '*'){
    //Salvando tipo de operação, para acaso o usuário apertar botão de igual:
    signal = '*'
    if(secondStart == 0) {
      //Salvando valor da primeira soma:
      initialValue = value
      //Setando valor que será calculado:
      screenMensage.html(initialValue + " * ")
      screen.html('0')
      //Zerando variável valor:
      value = 0
      //Incrementado variável de controle:
      secondStart += 1
      start = 0
    }else{
      secondValue = value
      initialValue = parseFloat(initialValue)
      secondValue = parseFloat(secondValue)
      result = initialValue * secondValue
      screenMensage.html(initialValue + " * " + secondValue + " = " + result)
      //Setando valor zero na tela:
      screen.html('0')
      //Setando variáveis de calculo:
      initialValue = 0
      secondValue = 0
      value = 0
      secondStart = 0
      start = 0
      typeOperation = null
      startOperation = 0
    }
  }

  //Subtrair:
  if (x === '/'){
    //Salvando tipo de operação, para acaso o usuário apertar botão de igual:
    signal = '/'
    if(secondStart == 0) {
      //Salvando valor da primeira soma:
      initialValue = value
      //Setando valor que será calculado:
      screenMensage.html(initialValue + " / ")
      screen.html('0')
      //Zerando variável valor:
      value = 0
      //Incrementado variável de controle:
      secondStart += 1
      start = 0
    }else{
      secondValue = value
      initialValue = parseFloat(initialValue)
      secondValue = parseFloat(secondValue)
      result = initialValue / secondValue
      screenMensage.html(initialValue + " / " + secondValue + " = " + result)
      //Setando valor zero na tela:
      screen.html('0')
      //Setando variáveis de calculo:
      initialValue = 0
      secondValue = 0
      value = 0
      secondStart = 0
      start = 0
      typeOperation = null
      startOperation = 0
    }
  }
}
    
let newValue = 0
let control = 0
    
function deletar(){
  //Pegando valor atual:
  newValue = screen.html();
  //Transformando em array para apagar ultimo elemento:
  newValue = newValue.split('')
  //Apagando ultimo elemento:
  newValue.pop()
  if (newValue.length == 0){
    screen.html('0')
    value = 0
    start = 0
  }else{
    screen.html(newValue)
    value = screen.html()
  }
}

//Zerar valor da calculadora:
function reset(){
  //Limpando tela:
  screen.html('0')
  //Limpando variável que acumula os valores a serem somados:
  initialValue = 0
  //Zerando variável de controle:
  start = 0
  secondStart = 0
  screenMensage.html(' ')
}

//Função que dar o resultado:
function igual(){
  if (secondStart == 1) {
    secondValue = value
    initialValue = parseFloat(initialValue)
    secondValue = parseFloat(secondValue)
    //Realizando operação de acordo com o sinal digitado pelo usuário:
    if (signal == '+') {
      result = initialValue + secondValue
    }else if (signal == '-') {
      result = initialValue - secondValue
    }else if (signal == '*') {
      result = initialValue * secondValue
    }else if (signal == '/') {
      result = initialValue / secondValue
    }
        
    screenMensage.html(initialValue + " " + signal + " " + secondValue + " = " + result)
    //Setando valor zero na tela:
    screen.html('0')
    //Setando variáveis de calculo:
    initialValue = 0
    secondValue = 0
    value = 0
    secondStart = 0
    start = 0
  }
}
    
function firstTheme(){
  //Plano de fundo:
  $('body').css('background-color', 'hsl(222, 26%, 31%)')
  //Cores do top1, top2 e top3:
  $('.box-main').css('color', 'white')
  //Mudar cor da letra da tela:
  $('.screen').css('color', 'white')
  //Mudando plano de fundo de teclas:
  $('.box').css('background-color', 'hsl(223, 31%, 20%)')
  //Mudando cor de fundo da tela:
  $('.screen').css('background-color', 'hsl(224, 36%, 15%)')
  //Mudando plano de fundo dos botões:
  $('.button').css('background-color', 'hsl(30, 25%, 89%)')
  //Alterando cor da letra dos botões:
  $('.button').css('color', 'hsl(224, 36%, 15%)')
  //Mudando cor de fundo do botão do resultado:
  $('.button-result').css('background-color', 'darkred')
  //Alterando cor de fundo do botão deletar:
  $('.delete').css('background-color', 'hsl(225, 21%, 49%)')
  $('.delete').css('color', 'white')
  //Alterar plano de fundo botão de resetar:
  $('.button-reset').css('background-color', 'hsl(225, 21%, 49%)')
}

function secondTheme(){
  //Plano de fundo:
  $('body').css('background-color', 'hsl(0, 0%, 90%)')
  //Cores do top1, top2 e top3:
  $('.box-main').css('color', 'black')
  //Mudar cor da letra da tela:
  $('.screen').css('color', 'black')
  //Mudando plano de fundo de teclas:
  $('.box').css('background-color', 'hsl(0, 5%, 81%)')
  //Mudando cor de fundo da tela:
  $('.screen').css('background-color', 'hsl(0, 0%, 93%)')
  //Mudando plano de fundo dos botões:
  $('.button').css('background-color', 'hsl(45, 7%, 89%)')
  //Alterando cor da letra dos botões:
  $('.button').css('color', 'hsl(0, 0, 100%)')
  //Mudando cor de fundo do botão do resultado:
  $('.button-result').css('background-color', 'hsl(25, 98%, 40%)')
  //Alterando cor de fundo do botão deletar:
  $('.delete').css('background-color', 'hsl(185, 58%, 25%)')
  //Alterar plano de fundo botão de resetar:
  $('.button-reset').css('background-color', 'hsl(185, 58%, 25%)')
}

function thirdTheme(){
  //Plano de fundo:
  $('body').css('background-color', 'hsl(268, 75%, 9%)')
  //Cores do top1, top2 e top3:
  $('.box-main').css('color', 'hsl(52, 100%, 62%)')
  //Mudar cor da letra da tela:
  $('.screen').css('color', 'hsl(52, 100%, 62%)')
  //Mudando plano de fundo de teclas:
  $('.box').css('background-color', 'hsl(268, 71%, 12%)')
  //Mudando cor de fundo da tela:
  $('.screen').css('background-color', 'hsl(268, 71%, 12%)')
  //Mudando plano de fundo dos botões:
  $('.button').css('background-color', 'hsl(281, 89%, 26%)')
  //Alterando cor da letra dos botões:
  $('.button').css('color', 'hsl(52, 100%, 62%)')
  //Mudando cor de fundo do botão do resultado:
  $('.button-result').css('background-color', 'hsl(176, 100%, 44%)')
  //Cor da letra do botão de resultado:
  $('.button-result').css('color', 'black')
  //Alterando cor de fundo do botão deletar:
  $('.delete').css('background-color', 'hsl(285, 91%, 52%)')
  $('.delete').css('color', 'white')
  //Alterar plano de fundo botão de resetar:
  $('.button-reset').css('background-color', 'hsl(285, 91%, 52%)')
}

//Efeito neon:
let piscar = 0
setInterval(function(){
  if (piscar == 0) {
    $('.dev').css('color', 'black')
    piscar += 1
  }else{
    $('.dev').css('color', 'white')
    piscar -= 1
  }
}, 1000)