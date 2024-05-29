let condicao = true;
let vagasDisponiveis = [];

do {
    let escolha = parseInt(prompt("Escolha uma das opções:\n1 - Listar Vagas Disponíveis.\n2 - Criar uma Nova Vaga\n3 - Visualizar uma Vaga\n4 - Inscrever um Candidato em uma Vaga\n5 - Excluir uma Vaga\n6 - Sair"));

    switch (escolha) {
        case 1:
            if (vagasDisponiveis.length != 0) {
                let listaVagas = "Vagas Disponíveis:\n";
                for (let i = 0; i < vagasDisponiveis.length; i++) {
                    listaVagas += (i + 1) + ". " + vagasDisponiveis[i].nome + " - " + vagasDisponiveis[i].candidatos.length + " candidato(s)\n";
                }
                alert(listaVagas);
            } else {
                alert("Não há vagas listadas no momento");
            }
            break;
        case 2:
            let nome = prompt("Diga o nome da Empresa-Vaga");
            let descricao = prompt("Forneça uma descrição sobre a Vaga");
            let diaDataLimite = prompt("Informe o dia da data limite em 2 dígitos");
            let mesDataLimite = prompt("Informe o mês da data limite em 2 dígitos");
            let anoDataLimite = prompt("Informe o ano da data limite em 4 dígitos");
            let dataLimite = diaDataLimite + "/" + mesDataLimite + "/" + anoDataLimite;

            let confirmacao = parseInt(prompt("Confirma a adição da vaga de nome " + nome + " com descrição: " + descricao + " e data limite de inscrição: " + dataLimite + "\nDigite 1 - Sim ou 2 - Não"));
            if (confirmacao == 1) {
                let vaga = {
                    nome: nome,
                    descricao: descricao,
                    dataLimite: dataLimite,
                    candidatos: []
                };
                vagasDisponiveis.push(vaga);
            } else {
                alert("Você cancelou a operação");
            }
            break;
        case 3:
            let vagaSolicitada = parseInt(prompt("Informe o índice da vaga que deseja ver:"));
            if (vagaSolicitada - 1 < vagasDisponiveis.length) {
                let vaga = vagasDisponiveis[vagaSolicitada - 1];
                let detalhesVaga = "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData Limite: " + vaga.dataLimite + "\nCandidatos: " + vaga.candidatos.join(", ");
                alert(detalhesVaga);
            } else {
                alert("Este índice não corresponde a nenhuma vaga");
            }
            break;
        case 4:
            let nomeCandidato = prompt("Digite o nome do Candidato:");
            let vagaCandidato = parseInt(prompt("Digite o índice da vaga que deseja candidatar:"));
            if (vagaCandidato - 1 < vagasDisponiveis.length) {
                let confirma = parseInt(prompt("Deseja adicionar " + nomeCandidato + " à vaga " + vagasDisponiveis[vagaCandidato - 1].nome + "?\n1 - Sim\n2 - Não"));
                if (confirma == 1) {
                    vagasDisponiveis[vagaCandidato - 1].candidatos.push(nomeCandidato);
                } else {
                    alert("Você cancelou a operação.");
                }
            } else {
                alert("Este índice não corresponde a nenhuma vaga");
            }
            break;
        case 5:
            let vagaExcluir = parseInt(prompt("Digite o número da Vaga que deseja excluir:"));
            if (vagaExcluir - 1 < vagasDisponiveis.length) {
                let confirmaExclusao = parseInt(prompt("Deseja excluir a vaga " + vagasDisponiveis[vagaExcluir - 1].nome + "?\n1 - Sim\n2 - Não"));
                if (confirmaExclusao == 1) {
                    vagasDisponiveis.splice(vagaExcluir - 1, 1);
                } else {
                    alert("Você cancelou a operação.");
                }
            } else {
                alert("Este índice não corresponde a nenhuma vaga");
            }
            break;
        case 6:
            condicao = false;
            break;
        default:
            alert("Digite uma opção válida.");
    }

} while (condicao != false);
