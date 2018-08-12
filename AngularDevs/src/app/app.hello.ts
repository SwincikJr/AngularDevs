/*
Criação de um novo componente para exibição
*/
import { Component } from '@angular/core';
import { Obj } from './Models/Obj';

// Função simples para exemplificar como pode ser criado conteúdo dinâmico para o HTML
  function soma(a, b) {
    return a + b;
  }

  const obj = new Obj();
  obj.Nome = 'Mauro Swincik Jr';
  obj.Desc = 'Desenvolvedor';

@Component({
  selector: 'app-hello', // Esse componente pode ser invocado no HTML com <app-hello></app-hello>
  templateUrl: './app.hello.html', // Diretório do HTML do componente
  styleUrls: ['./app.hello.css'] // Estilos aplicados ao componente
})

// Nesse ponto podem ser setados os valores que serão usados no HTML com conteúdo dinâmico
export class AppHelloComponent {
  hello = 'Hello World!';
  hora = 'A resposta: ' + soma(22, 20);
  no = obj.Nome;
  des = obj.Desc;
  nota = obj.Testa();
}

// Esse módulo deve ser importado no NgModules em app.module.ts
