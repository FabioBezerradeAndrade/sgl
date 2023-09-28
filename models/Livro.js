import readline from 'readline-sync';
import { menuAlterarLivro, cont } from './menu.js';

class Livro {
    constructor() {
        this.geradorID = null;
        this.livros = [];
        this.found = false;
        this.novaIteracao = false;
        this.opcaoMenu;
        this.numPaginas;
    }
    gerarID() {
        return Math.floor(Math.random() * 10000) + 1; //// Gera um número inteiro aleatório entre 1 e 10000 (ou o intervalo desejado)
    }

    adicionarLivro() {
        console.clear();
        console.log('********* CADASTRO DE LIVROS *********');
        this.geradorID = this.gerarID();
        let tituloLivro, autorLivro, numPaginas;

        tituloLivro = readline.question('Digite o titulo / nome do Livro: ');
        autorLivro = readline.question('Digite o Autor: ');

        while (true) {
            numPaginas = readline.questionInt('Entre com o numero de paginas: ', { limitMessage: 'Digite um numero valido' });
            if (!isNaN(numPaginas)) {
                numPaginas = parseInt(numPaginas);
                break;
            } else {
                console.log('Digite um número válido!. ');
            }
        }
        const livro = {
            titulo: tituloLivro,
            autor: autorLivro,
            paginas: numPaginas,
            id: this.geradorID,
        };
        this.livros.push(livro);
        console.clear();
        console.log(`Cadastro do Livro realizado!!!`);
        console.log(`Titulo: ${tituloLivro}`);
        console.log(`\t-Autor: ${autorLivro}`);
        console.log(`\t-Paginas: ${numPaginas}`);
        console.log(`\t-ID: ${this.geradorID}`);
        cont();
    }

    listarLivros() {
        console.clear()
        console.log('********* TODOS LIVROS CADASTRADOS *********');
        for (const l of this.livros) {
            console.log('_______________________________________________');
            console.log(`ID: ${l.id} => Titulo: ${l.titulo}`);
            console.log(`\t- Autor: ${l.autor}`);
            console.log(`\t- Pag: ${l.paginas}`);
        }
    }

    procurarLivro() {
        console.clear()
        this.found = false;
        let searchLivro;
        console.log('********** BUSCAR LIVRO *********');
        searchLivro = readline.question('Digite TÍTULO, AUTOR ou ID do livro: ');
        console.clear()

        for (const l of this.livros) {
            const searchLower = searchLivro.toLowerCase(); // Converter a entrada do usuário para minúsculas
            const tituloLower = l.titulo.toLowerCase(); // Converter o título do livro para minúsculas
            const autorLower = l.autor.toLowerCase(); // Converter o autor do livro para minúsculas
            if (l.id == searchLivro || autorLower == searchLower || tituloLower == searchLower) {
                this.found = true;
                console.log('************ ENCONTRADO(S) ***********');
                console.log(`ID: ${l.id} => Titulo: ${l.titulo}`);
                console.log(`\t- Autor: ${l.autor}`);
                console.log(`\t- Pag: ${l.paginas}`);
            }
        }

        if (!this.found) {
            console.clear()
            console.log('Livro não encontrado');
        }
        cont()

    }

    alterarLivro() {
        console.clear()
        this.found = false;
        console.log('***** ALTERAR CADASTRO DE UM LIVRO ***');
        const change = readline.questionInt('➥ Digite o ID do livro a ser alterado: ', { limitMessage: 'Digite um numero valido' });
        for (const l of this.livros) {
            if (l.id == change) {
                this.found = true;
                console.clear()
                console.log('Registro atual: ');
                console.log(`Titulo: ${l.titulo}`);
                console.log(`\t- Autor: ${l.autor}\n\t- número de pag: ${l.paginas}`);
                menuAlterarLivro()

                let opcaoAlterarLivro = readline.questionInt('Digite opcao desejada: ')
                if (!isNaN(opcaoAlterarLivro)) {
                    switch (opcaoAlterarLivro) {
                        case 1:
                            l.titulo = readline.question('Digite o titulo: ');
                            break;
                        case 2:
                            l.autor = readline.question('Digite o nome do Autor(a): ');
                            break;
                        case 3:
                            l.paginas = readline.questionInt('Digite quantidade de paginas: ', { limitMessage: 'Digite um numero valido' });
                            break;
                        case 4:
                            console.clear()
                            this.subMenu()
                        default:
                            break;
                    }
                } else {
                    return;

                }

                console.clear()
                console.log('***** ALTERAR CADASTRO DE UM LIVRO ***');
                console.log('Dados alterados: \n');
                console.log(`Titulo: ${l.titulo}`);
                console.log(`\t- Autor: ${l.autor}`);
                console.log(`\t- pag: ${l.paginas}`);
                cont()
                console.clear()
            }




        }
        if (!this.found) {
            console.log('Livro não encontrado!!!');
            cont()
            console.clear()
        }
    }

    excluirLivro() {
        console.clear()
        this.found = false;
        console.log('***** EXCLUIR CADASTRO DE UM LIVRO ***');
        const excluirLivro = readline.questionInt('➥ Digite o ID do Livro a ser excluido: ', { limitMessage: 'Digite um numero valido' });
        for (const l of this.livros) {
            if (l.id == excluirLivro) {
                this.found = true;
                console.clear()
                console.log('Voce realmente deseja excluir o cadastro do Livro: ');
                console.log(`Titulo: ${l.titulo}`);
                console.log(`\t- Autor: ${l.autor}`);
                console.log(`\t- pag: ${l.paginas}`);
                console.log('******************* OPCAO ********************');
                console.log('\n- "S" para confirmar exclucao!!!\n');
                console.log('- Qualquer outra tecla para cancelar!!!\n');
                console.log('**********************************************');
                let confirmar = readline.question('Escolha uma opcao: ');
                if (confirmar == 's' || confirmar == 'S') {
                    console.clear()
                    const indice = this.livros.indexOf(l)
                    console.log(`O registro do "${l.titulo}" foi excluido!!!`);
                    this.livros.splice(indice, 1)
                    cont()
                    console.clear()
                } else {
                    console.clear()
                    console.log('Exclução cancelada');
                    cont()
                    return;
                }
            }
        }

        if (!this.found) {
            console.log('Registro nao encontrado!!!');
            cont()
            console.clear()
        }
    }
}

export { Livro };