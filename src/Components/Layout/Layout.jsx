import Nav from "../Header/Nav"
import Conteudo from "../Corpo/Conteudo"
function Layout () {

    return(
        <div>
            <header>
                <Nav/>   
            </header> 
            <main>
                 <Conteudo/>  
            </main>
            <footer>
                
            </footer>
        </div>
    )
}

export default Layout