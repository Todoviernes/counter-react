const Contador = () => {
  const [contador, setContador] = React.useState(0);

  const up = () => setContador(contador + 1);
  const down = () => setContador(contador - 1);
  console.log(contador);
  return (
    <div>
      <h1 className={contador < 0 ? "down" : "up"}>Contador: {contador}</h1>
      <hr />
      <button onClick={up}>Aumentar</button>
      <button onClick={down}>Disminuir</button>
    </div>
  );
};
