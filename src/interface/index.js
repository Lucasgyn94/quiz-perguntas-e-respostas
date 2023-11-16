import entradaDados from 'readline-sync';

export function exibirPergunta(pergunta, index) {
    console.log(`\n${index + 1}: ${pergunta.pergunta}`);
    const respostaUsuario = entradaDados.question('Digite a resposta (ano): ');
    return respostaUsuario;
}

export function exibirResultado(pontuacaoFinal, nomeJogador) {
    let mensagem = '';

    if (pontuacaoFinal <= 3) {
        mensagem = 'OH NÃO! Tente mais uma vez.';
    } else if (pontuacaoFinal <= 6) {
        mensagem = 'BOM TRABALHO! Pratique um pouco mais.';
    } else if (pontuacaoFinal <= 9) {
        mensagem = 'MUITO BOM! Você acertou a maioria.';
    } else {
        mensagem = 'EXCELENTE! Você é um verdadeiro expert.';
    }

    console.log(`\nJogador(a): ${nomeJogador}`);
    console.log(`Pontuação final: ${pontuacaoFinal} acertos`);
    console.log(mensagem);
}