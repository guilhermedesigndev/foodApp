function createRows(data, columns) {
  const rows = Math.floor(data.length / columns); // [A]
  let lastRowElements = data.length - rows * columns; // [B]

  const dataMirror = data.slice();
  while (lastRowElements !== columns) {
    // [C]
    dataMirror.push({
      // [D]
      id: `empty-${lastRowElements}`,
      empty: true,
    });
    lastRowElements += 1; // [E]
  }

  return dataMirror; // [F]
}

/**
*  [A]: Calculando o número base de linhas que teremos
  [B]: Calculando a quantidade de itens que irá sobrar na última linha
  [C]: Enquanto o número de itens na última linha não for igual ao número desejado de colunas
  [D]: Iremos adicionar elementos vazios no array disponibilizado
  [E]: Incrementamos o contador
  [F]: Retornamos o novo array preenchido
*/

export default createRows;
