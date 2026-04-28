
import "./Cons.css";
import { useState, useEffect } from "react";
function Cardconsumo (){
      const [consumo, setConsumo] = useState(0);
  const [mes, setMes] = useState("");

  useEffect(() => {
    // Simulação (depois ligas ao backend)
    setConsumo(120);

    const meses = [
      "Janeiro","Fevereiro","Março","Abril","Maio","Junho",
      "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"
    ];
    const hoje = new Date();
    setMes(meses[hoje.getMonth()]);
  }, []);

  const precoKwh = 100;
  const valor = consumo * precoKwh;

  return (
    <div className="card">

      <div className="topo">
        <h3>Consumo do Mês</h3>
        <span>{mes}</span>
      </div>

      <div className="consumo">
        <p>Total</p>
        <h1>{consumo} kWh</h1>
      </div>

      <div className="valor">
        <p>Estimativa</p>
        <h2>{valor.toLocaleString()} Kz</h2>
      </div>

      <div className="status positivo">
        ↑ Consumo controlado
      </div>

    </div>
  );
}



export default Cardconsumo