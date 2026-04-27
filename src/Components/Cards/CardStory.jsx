import styles from "./cardstory.module.css"
import { SlEnergy } from "react-icons/sl";

function CardStory ({mes, leitura, valor, conta}) {
    return(
        <section className={styles.story}>

        
        <div className={styles.caixa}>
            <div> {mes} </div>
            <div className={styles.item}> <SlEnergy /> {conta} kwh </div>
            <div> {leitura} </div>
            <div className={styles.item2}> {valor} kz </div>
        </div>
        </section>

    )
}

export default CardStory