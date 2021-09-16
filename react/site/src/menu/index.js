import {Menu} from "./styled.js";

export default function menu(){
    return(
        <Menu>
            <div className="lado-esq"> 
                <div className="titulo"> 
                    <div className="cat"> <img src="assests/imagem/logo.svg" alt=""/> </div>
                    <div className="dev"> <span> Dev</span>Store </div>
                </div>
                <div className="back"> </div>
                <div className="gere-segu">
                    <div className="gerencia"> Gerenciamento </div>
                    <div className="icone"> <img src="assests/imagem/icone.svg" alt=""/> </div>
                    </div>
            
            <div className="produ"> produto </div>
        </div>

        </Menu>
    )
}

