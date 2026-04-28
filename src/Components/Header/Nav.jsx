
import styles from "../Header/nav.module.css"
import { FaUser } from "react-icons/fa";
function Nav () {

    
  
    return (
        <div>
            <header className={styles.cabeca}>
                <div> digitalEnergy </div>
                <div className={styles.icone}><FaUser /></div>
            </header>
       </div>
    )
}
export default Nav