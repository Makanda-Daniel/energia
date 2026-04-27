import styles from "./calculo.module.css"
import { useState } from "react"
import Recalculo from "./Recalculo"
function Calculo () {
     const [ anterior, setAnterior] = useState ([])
     const handsubmit = async (e) => {
        e.preventDefault()
        const res = await fetch("http://localhost:5000/Projeto",{
            method: "POST",
            headers:{
                "Content-type":"application/json",
            },
            body: JSON.stringify({
                numero:anterior
            }),        
        })
        const dados = await res.json()
        setAnterior(dados)   
     }    
    return (
        <main className={styles.hcalcular}>
            <section className={styles.txt}>
                <h2>Calcular Consumo</h2>
                <p>
                    Insira as leituras do seu contador
                </p>
            </section>
            <section className={styles.forma}>
                <article>
                    <form onSubmit={handsubmit}>
                        <div>
                            <label htmlFor="">leitura anterior</label>
                            <input type="number" value={anterior} onChange={(e)=> setAnterior(e.target.value)} />
                        </div>
                        <div>
                            <button >Calcular</button> 
                        </div>
                    </form> 
                </article>
            <div>
             <Recalculo/>
           </div>
            </section>
        </main>
    )
}
export default Calculo