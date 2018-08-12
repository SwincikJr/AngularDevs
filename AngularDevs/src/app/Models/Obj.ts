export class Obj {
  Nome;
  Desc;

  Testa = function() {
    if (this.Desc === 'Desenvolvedor') {
      return 'Nota 10';
    } else {
      return 'éé...';
    }
  };
}
