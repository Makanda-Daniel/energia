import styles from "./conf.module.css"
import { IoCardOutline } from "react-icons/io5";
import { CiLight } from "react-icons/ci";
import { IoIosRadioButtonOn } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";



function Conf (){
    return(

        <main className={styles.conf}>
            <h2>Configurações</h2>
            <section>
                <span>Preferências</span>
                <div className={styles.card}>
                    <div className={styles.item}><IoCardOutline /></div>
                    <div>Preço por kwh</div>
                    <div className={styles.preco}>125 kz</div>
                    <div  className={styles.item}><CiLight /></div>
                    <div>Tema Claro</div>
                    <div><IoIosRadioButtonOn /></div>
                </div>
            </section>

            <section>
                <span>Dados</span>
                <div className={styles.card}>
                    <div className={styles.red}><FaRegTrashAlt /> </div>
                    <div>Limpar todos os dados</div>
                    <div>^</div>

                </div>
            </section> <br /> <br /> <br /> <br />

        </main>


    )
}

export default Conf