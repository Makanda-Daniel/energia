import projeta from "../Img/projeta.png"
import { useLocation } from "react-router-dom"
import styles from "../Header/nav.module.css"
import { FaUser } from "react-icons/fa";
function Nav ({name}) {

    const location = useLocation ()
    const nome = location.state?.usuario
    return (
        <div>
            <header className={styles.cabeca}>
                <div> digitalEnergy </div>
                <div><FaUser /></div>
            </header>
       </div>
    )
}
export default Nav