//retira do html o id de categoria//
var categoria = document.getElementById('categoria')
//retira do html o id acesso//
var ecesso = document.getElementById('acesso')
//seleciona o elemento com o seu id no html//
var acessoEntrada = document.getElementById("acesso-entrada")
// seleciona o elemento de saida em id html//
var acessoSaida = document.getElementById("acesso saida")
// seleciona o elemento com o seu id unidade para guardar a informação//
var divUnidades = document.getElementById('unidades')
// seleciona o elemento informar resultado na pagina html//
var inputResultado = document.getElementById('informarResultado')
//seleciona um novo valor de opção dos textos e valor//
new Option("optionText", "optionValue")

function limparOptionsEntrada() {
    acessoEntradaEntrada.options.length = 0
  }
  function limparOptionsSaida() {
    acessoSaidadeSaida.options.length = 0
  }
  function limparResultado(){
      inputInformarResultado.value = ''
}

function criarunidadeEntrada() {
    // Verifica se a categoria selecionada é 'comprimento'
    if (categoria.value == 'comprimento') {
      // Adiciona opções ao select de unidade de entrada relacionadas a comprimento
      unidadeEntrada.options.add(new Option("Metros", "metros"))
      unidadeEntrada.options.add(new Option("Centímetros", "centimetros"))
      unidadeEntrada.options.add(new Option("Polegadas", "polegadas"))
    }
    // Verifica se a categoria selecionada é 'peso'
    else if (categoria.value == 'peso') {
      // Adiciona opções ao select de unidade de entrada relacionadas a peso
      unidadeEntrada.options.add(new Option("Quilogramas", "quilogramas"))
      unidadeEntrada.options.add(new Option("Gramas", "gramas"))
      unidadeEntrada.options.add(new Option("Libras", "libras"))
    }
    // Verifica se a categoria selecionada é 'temperatura'
    else if (categoria.value == 'temperatura') {
      // Adiciona opções ao select de unidade de entrada relacionadas a temperatura
      unidadeEntrada.options.add(new Option("Celsius", "celsius"))
      unidadeEntrada.options.add(new Option("Fahrenheit", "fr"))
      unidadeEntrada.options.add(new Option("Kelvin", "kelvin"))
    }
  }