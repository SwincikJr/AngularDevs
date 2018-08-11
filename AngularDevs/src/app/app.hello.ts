/*
Criação de um novo componente para exibição
*/
import { Component } from '@angular/core';

// Função simples para exemplificar como pode ser criado conteúdo dinâmico para o HTML
  function soma(a, b) {
    return a + b;
  }

@Component({
  selector: 'app-hello', // Esse componente pode ser invocado no HTML com <app-hello></app-hello>
  templateUrl: './app.hello.html', // Diretório do HTML do componente
  styleUrls: ['./app.hello.css'] // Estilos aplicados ao componente
})

// Nesse ponto podem ser setados os valores que serão usados no HTML com conteúdo dinâmico
export class AppHelloComponent {
  hello = 'Hello World!';
  hora = soma(2, 2);
}

// Esse módulo deve ser importado no NgModules em app.module.ts
