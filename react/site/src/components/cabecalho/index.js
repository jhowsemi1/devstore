import { Cabecalho } from "./styled.js";

export default function cabeca() {
    return (
        <Cabecalho> 
            <div className="mae-cab">
                  <div className="cab"> 
                    <img src="assests/imagem/usuario.svg" alt=""/>
                    <img src="assests/imagem/men.svg" alt=""/>
                    <div className="usuario"> Olá, Bruno de Oliveira  </div>
                </div>
                  <div className="cabe">                
                  <div className="icone-bol">
                      <div className="bola"> <button> <img src="assests/imagem/sair.svg" alt=""/>  </button> </div> 
                      <div className="bola"> <button> <img src="assests/imagem/recarregar.svg" alt=""/> </button> </div> 
                  </div>
                </div>  
              </div>
        </Cabecalho>
    )
}