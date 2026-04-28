import styles from "./conteudo.module.css"
import { SlEnergy } from "react-icons/sl";
import { GoHistory } from "react-icons/go";
import { FaArrowTrendUp } from "react-icons/fa6";
import Cardconsumo from "../Cards/Cardconsumo";
import {  Link } from "react-router-dom"
function Conteudo () {

    const clicar = () => {
        alert(" SERVIÇO INDISPONÍVEL, TENTE MAIS TARDE")
    }

    return (
        <div className={styles.tudo} >
            
            <main className={styles.container}>
                <section className={styles.perfil} >
                    <div><h1>Olá, Bem-Vindo </h1></div>
                    <article>
                        <div>
                            <span>FATURA</span> <br/>
                            <span>mês de abril</span> <br/>
                            <span className={styles.preco} >12.000 kz</span> <br/>
                            <button onClick={clicar} >Pagar Fatura</button>
                        </div>
                    </article>
                </section>


                <section className={styles.consumo} >
                    <h4>Consumo de Energia</h4>
                    <article className={styles.ft} >
                        <Cardconsumo/>
                    </article>
                    <article className={styles.card} >
                        <div>
                            <span><GoHistory /></span>
                            <p>Última leitura</p>
                            <h2>1200</h2>
                        </div>

                        <div>
                            <span className={styles.ico}>< FaArrowTrendUp/></span>
                            <p>Comparação </p>
                            <h2 className={styles.com}>-10.0kwh</h2>
                        </div>
                    </article>

                    <article className={styles.caixabt} >
                    <Link to="/Calculo" ><button> <span><SlEnergy /></span> calcular consumo </button> </Link>
                    </article>
                </section>
                

                <section className={styles.atividade} >
                    <div className= {styles.caixaA}>
                        <span>Atividade recente</span>
                        <span>ver tudo</span>
                    </div>
                    <article className={styles.caixatividade} >

                        <div className={styles.teste} >
                            <div className={styles.coluna1} ><SlEnergy /></div>
                            <div>
                                <h4>120 kWh</h4>
                            </div>
                            <div className={styles.coluna3} >120 000 kz</div>
                        </div>

                        <div className={styles.teste} >
                            <div className={styles.coluna1} ><SlEnergy /></div>
                            <div>
                                <h4>150 kWh</h4>
                            </div>
                            <div className={styles.coluna3} >160 000 kz</div>
                        </div>
                    </article>

                </section>
                <br />
                <br />
                <br />
                <br /><br /><br />
            </main>

            
           

        </div>
    )
}
export default Conteudo