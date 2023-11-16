import questoes from './dados/index.js';
import { selecionarQuestoesAleatorias, validarRespostaDoUsuario } from './service/index.js';
import { exibirPergunta, exibirResultado } from './interface/index.js';
import entradaDados from 'readline-sync'

const iniciarQuiz = () => {
    console.log("### QUIZ DE FATOS HISTÓRICOS ###");
    console.log("Seja Bem-Vindo Jogador(a)!")

    const nomeJogador = entradaDados.question("Digite seu nome: ");
    const quantidadeQuestos = 10;

    const questoesSelecionadas = selecionarQuestoesAleatorias(questoes, quantidadeQuestos);

    let pontuacaoFinal = 0;

    questoesSelecionadas.forEach((pergunta, index) => {
        const respostaUsuario = exibirPergunta(pergunta, index);
        const resultadoValidacao = validarRespostaDoUsuario(respostaUsuario, pergunta)

        if (resultadoValidacao) {
            console.log("Resposta correta!");
            pontuacaoFinal++;
        } else {
            console.log("Resposta Errada")
        }
    });
    exibirResultado(pontuacaoFinal, nomeJogador);
}

iniciarQuiz();

/*

function iniciarQuiz() {


  questoesSelecionadas.forEach((pergunta, index) => {
    const respostaUsuario = exibirPergunta(pergunta, index);
    const resultadoValidacao = validarRespostaDoUsuario(respostaUsuario, pergunta);

    if (resultadoValidacao) {
      console.log('Resposta correta!');
      pontuacaoFinal++;
    } else {
      console.log('Resposta errada!');
    }
  });

  exibirResultado(pontuacaoFinal, nomeJogador);
}

iniciarQuiz(); // Inicia o Quiz

*/