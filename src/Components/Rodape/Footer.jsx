import styles from "./footer.module.css"
import { Link } from "react-router-dom"
import { IoHomeOutline } from "react-icons/io5";
import { SlEnergy } from "react-icons/sl";
import { GoHistory } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";

function Footer () {
    return (
        <>
        
        <footer className= {styles.rodape}>
            <ul>
                <Link to="/" >
                <div>
                    
                    <span><IoHomeOutline /></span>
                    <p>inicio</p>
                </div>
                </Link>


                <Link to="/Calculo" >
                <div>
                    <span><SlEnergy /></span>
                    <p>Calcular</p>
                </div>
                </Link>


                <Link  to="/Story" >
                <div>
                    <span><GoHistory /></span>
                    <p>Historia</p>
                </div>
                </Link>


                <Link to="/Perfil">
                <div>
                    <span><FaRegUser /></span>
                    <p>perfil</p>
                </div>
                </Link>
               
               
               <Link to="/Conf">
                <div>
                    <span><CiSettings /></span>
                    <p>definição</p>
                </div>
                </Link>
            </ul>
        </footer>


        </>
    )
}

export default Footer