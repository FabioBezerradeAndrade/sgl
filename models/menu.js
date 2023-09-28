import readline from 'readline-sync';
import { opcaoMenu } from '../main.js';

function menu() {
    console.log('***** SISTEMA DE ACERVO DE LIVROS ****');
    console.log('***************** MENU ***************');
    console.log('0 - Sair do sistema');
    console.log('1 - Listar todos Livros');
    console.log('2 - Cadastrar um novo Livro');
    console.log('3 - Buscar Livro');
    console.log('4 - Alterar cadastro de um Livro');
    console.log('5 - Excluir um cadastro de Livro');
    console.log('**************************************');
}

function subMenu() {
    let opcao = opcaoMenu;
    switch (opcao) {
        case 2:
            console.clear()
            console.log('********* CADASTRO DE LIVROS *********');
            console.log('**************** OPCAO ***************');
            console.log('1 - Fazer um novo cadastro');
            break;
        case 3:
            console.clear()
            console.log('************ BUSCAR LIVRO ************');
            console.log('**************** OPCAO ***************');
            console.log('1 - Fazer uma nova busca');
            break;
        case 4:
            console.clear()
            console.log('***** ALTERAR CADASTRO DE UM LIVRO ***');
            console.log('**************** OPCAO ***************');
            console.log('1 - Fazer uma nova alteracao');
            break;
        case 5:
            console.clear()
            console.log('***** EXCLUIR CADASTRO DE UM LIVRO ***');
            console.log('**************** OPCAO ***************');
            console.log('1 - Fazer uma nova exclucao');
            break;
        default:

            break;
    }
    console.log('2 - Voltar');
    console.log('**************************************');
}

function menuAlterarLivro() {
    console.log('***** ALTERAR CADASTRO DE UM LIVRO ***');
    console.log('**************** OPCAO ***************');
    console.log('1 - Alterar titulo');
    console.log('2 - Alterar Autor');
    console.log('3 - Alterar numero de paginas');
    console.log('**************************************');
}

function cont() {
    console.log('**************************************');
    readline.question('Aperte "Enter" para continuar!!!');
}

export {menu , subMenu , cont , menuAlterarLivro};