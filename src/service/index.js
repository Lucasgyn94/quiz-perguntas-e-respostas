import entradaDados from 'readline-sync'


export function selecionarQuestoesAleatorias(questoes, quantidadeQuestoes) {
    return questoes.sort(() => Math.random() - 0.5).slice(0, quantidadeQuestoes);
  }
  
export function validarRespostaDoUsuario(respostaDoUsuario, pergunta) {
    return respostaDoUsuario === pergunta.resposta;
}
