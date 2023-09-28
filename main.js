import readline from 'readline-sync';
import { Livro } from './models/Livro.js';
import { menu, subMenu, cont } from './models/menu.js';
let loop = true;
let opcaoMenu, opcao;
const livro = new Livro();

do {
    do {
        console.clear();
        menu();
        opcao = readline.question('Escolha uma opcao: ');
        if (!isNaN(opcao)) {
            opcaoMenu = parseInt(opcao);
            console.log(opcaoMenu);
        } else {
            console.clear()
            console.log('Opcao invalida. Somente numeros.\n');
            cont()
        }
    } while (isNaN(opcao))
    switch (opcaoMenu) {
        case 0:
            console.clear();
            console.log('Saindo do sistema!!!');
            loop = false;
            break;
        case 1:
            if (livro.geradorID === null) {
                console.clear()
                console.log('Nao ha registro!!!');
                cont()
                console.clear()
                break
            } else {
                livro.listarLivros();
                cont()
                console.clear()
                break;
            }
        case 2:
            console.clear()
            livro.adicionarLivro();
            do {
                console.clear()
                subMenu()
                livro.novaIteracao = false;
                let opcaoMenu2 = readline.questionInt('Escolha uma opcao: ', { limitMessage: 'Digite um numero valido' });
                switch (opcaoMenu2) {
                    case 1:
                        livro.novaIteracao = true;
                        livro.adicionarLivro()
                        break;
                    case 2:
                        menu()
                        break;
                    default:
                        break;
                }
            } while (livro.novaIteracao);
            console.clear();
            break;
        case 3:
            console.clear()
            livro.procurarLivro();
            do {
                subMenu()
                livro.novaIteracao = false;
                let opcaoMenu2 = readline.questionInt('Escolha uma opcao: ', { limitMessage: 'Digite um numero valido' });
                switch (opcaoMenu2) {
                    case 1:
                        livro.novaIteracao = true;
                        livro.procurarLivro()
                        break;
                    case 2:
                        menu()
                        break;
                    default:
                        break;
                }
            } while (livro.novaIteracao);
            console.clear();
            break;
        case 4:
            console.clear()
            livro.alterarLivro();
            do {
                subMenu()
                livro.novaIteracao = false;
                let opcaoMenu2 = readline.questionInt('Escolha uma opcao: ', { limitMessage: 'Digite um numero valido' });
                switch (opcaoMenu2) {
                    case 1:
                        livro.novaIteracao = true;
                        livro.alterarLivro()
                        break;
                    case 2:
                        menu()
                        break;
                    default:
                        break;
                }

            } while (livro.novaIteracao);
            console.clear();
            break;
        case 5:
            console.clear()
            livro.excluirLivro();
            do {
                subMenu()
                livro.novaIteracao = false;
                let opcaoMenu2 = readline.questionInt('Escolha uma opcao: ', { limitMessage: 'Digite um numero valido' });
                switch (opcaoMenu2) {
                    case 1:
                        livro.novaIteracao = true;
                        livro.excluirLivro()
                        break;
                    case 2:
                        menu()
                        break;
                    default:
                        break;
                }
            } while (livro.novaIteracao);
            console.clear();
            break;
        default:

            break;
    }
} while (loop);

export { opcaoMenu };





