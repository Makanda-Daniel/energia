import CardStory from "../Cards/CardStory"
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./story.module.css"

 function clic() {
    alert(" SERVIÇO INDISPONÍVEL, TENTE MAIS TARDE")
 }

function Story () {
    return(
        <main>
            <nav>
                <h2>Histórico</h2>
                <span onClick={clic}><FaRegTrashAlt /> Limpar</span>
            </nav>
            <section>
              <CardStory mes="5 de janeiro, 2026" valor={17.693} conta={146} leitura={3000.5444} />
              <CardStory mes="17 fevereiro, 2026" valor={20.678} conta={345} leitura={2000.4326} />
              <CardStory  mes="18 março, 2026" valor={67.678} conta={945} leitura={8000.9326}  />
              <CardStory  mes="20 abril, 2026"  valor={11.777} conta={120} leitura={1000.2226}/>
            </section> <br /> <br /> <br /> <br />
        </main>


    )

}
export default Story