import { Conteiner } from "./styled.js";
import  Cabe from "../components/cabecalho/index";
import Menu from "../menu/index";

import { useState, useEffect} from "react";

import Api from "../../src/service/api"


const api = new Api()

export default function Home(){

     const [cadastro, setCadastro] = useState([]);
     const [nome , setNome] =useState("");
     const [categoria , setCategoria] =useState("");
     const [avaliacao , setAvaliacao] =useState("");
     const [precode , setPrecode] =useState([]);
     const [precopor , setPrecopo] =useState([]);
     const [estoque , setEstoque] =useState([]);
     const [link , setLink] =useState([]);
     const [descricao , setDescricao] =useState([]);
     const [idAlterando, setIdAlterando] = useState(0);

     async function listar() {
         
         let r = await api.listar();
         setCadastro(r)
     }

     async function inserir() {

        if(idAlterando == 0) { 
            let r = await api.inserir(nome, categoria, precode, precopor, avaliacao, descricao, estoque, link );

            if(r.erro)
               alert(r.erro);
            else
              alert("produto inserido");

        } else {
            let r = await api.alterar(idAlterando, nome, categoria, precode, precopor, avaliacao, descricao, estoque, link );
            
            if (r.erro)
              alert(r.erro);
            else
              alert("produto alterado!");

        
        }
        limparCampos()
        listar();
     }

     function limparCampos(){
        setNome("")
        setCategoria("")
        setAvaliacao("")
        setPrecode("")
        setPrecopo("")
        setEstoque("")
        setLink("")
        setDescricao("")
        setIdAlterando(0)

     }

     async function remover(id) {
         let r = await api.remover(id);
         alert("aluno removido")

         listar()
     }

     async function editar(item) {
      setNome(item.nm_produto)
      setCategoria(item.ds_categoria)
      setAvaliacao(item.vl_avaliacao)
      setPrecode(item.vl_preco_de)
      setPrecopo(item.vl_preco_por)
      setEstoque(item. qtd_estoque)
      setLink(item.img_produto)
      setDescricao(item. ds_produto)
      setIdAlterando(item.id_produto)
     }

    useEffect(() => {
        listar();
    },[])
    


 return (
  <Conteiner> 
   
   <Menu/>

   <div class="lado-direi"> 
      <Cabe/>
          
            <div className="segundo"> 
              <div className="produtos">
                  <div className="semi">
                      <div className="barra-produ"> <img src="assests/imagem/barra.svg" alt=""/> </div>
                      <h2> {idAlterando === 0 ? "Novo Produto" : "Alterando Produto" + idAlterando } </h2>
                  </div>
              </div>

               <div className="campo-res">
                   <div className="parti-1"> 
                        <div class="forms">
                            <div className="nome"> Nome: </div>
                            <input type="text" value={nome} onChange={e => setNome(e.target.value)} /> 
                        </div>
                    
                        <div className="forms">
                            <div className="preco" > Preço DE : </div>
                            <input type="text" value={precode} onChange={e => setPrecode(e.target.value)}/>
                        </div>
                     </div>

                     <div className="parti-2"> 
                        <div className="forms">
                            <div className="categoria">  Categoria: </div>
                            <input type="text" value={categoria} onChange={e => setCategoria(e.target.value)}/>
                        </div>
                   
                  
                        <div className="forms">
                            <div className="por"> Por:  </div>
                            <input type="text" value={precopor} onChange={e => setPrecopo(e.target.value)}/>
                        </div>
                     </div>

                     <div className="parti-3"> 
                    <div className="forms">
                        <div className="avaliacao"> Avaliacao </div>
                        <input type="text" value={avaliacao} onChange={e => setAvaliacao(e.target.value)}/>
                    </div>
                
                    <div className="forms"> </div>
                        <div className="estoque"> Estoque: </div>
                        <input type="text"value={estoque} onChange={e => setEstoque(e.target.value)}/>
                    </div>
                </div>

                <div className="parte-4"> 
                    <div className="forms">
                        <div className="link"> Link imagem: </div>
                        <input type="text" value={link} onChange={e => setLink(e.target.value)}/>
                    </div>
                  </div>

                    <div className="segundo-2">
                        <div className="forms">
                            <div className="descricao"> Descricao: </div>
                            <textarea rows="5" cols="79" value={descricao} onChange={e => setDescricao(e.target.value)}> </textarea>
                         </div>

                         <div className="but-prod">   
                            <button onClick={inserir}> {idAlterando == 0 ? "cadastrar" : "alterar"} </button> 
                         </div>
                 </div>
                     
                </div>
                 <div className="produto-cadastrados"> 
                      <div className="produ-cada">
                         <div className="barra"> <img src="assests/imagem/barra.svg" alt=""/></div>
                          <h2> Produtos Cadastrados </h2>
                       </div>

                     <table className="tabela"> 
                        <thead> 
                            <tr className="linha-primeira">
                                <th>   </th>
                                <th> ID </th>
                                <th> Produto </th>  
                                <th> Categoria </th>  
                                <th> Preco </th> 
                                <th> Estoque</th>
                                <th> </th>      
                                <th> </th>
                                <th> </th>
                            
                            </tr>
                        </thead>
                    
                        <tbody> 
                            { cadastro.map((item, i) => 
                                
                                <tr className= {i % 2 == 0 ?  "linha1-part" : ""}> 
                                    <td  className="imagens"> <img src={item.img_produto} alt=""/> </td>
                                    <td> {item.id_produto} </td>
                                    <td> {item.nm_produto != null && item.nm_produto.length >= 25
                                                     ? item.nm_produto.substr(0,25) + "..."
                                                     : item.nm_produto}
                                     </td>
                                    <td> {item.ds_categoria} </td>
                                    <td> {item.vl_preco_de} </td>
                                    <td> {item.qtd_estoque} </td>
                                    <td> </td>
                                        
                                       <td className="visuali">   <button className="botoes" onClick={() => editar(item)}> <img src="assests/imagem/editar.svg" alt=""/> </button>  </td>  
                                       <td className="visuali">   <button className="botoes" onClick={() => remover(item.id_produto) }>  <img src="assests/imagem/exluir.svg" alt=""/> </button>  </td>  
                                        
                                </tr>                     
                                 
                                
                            )}
                              
                            </tbody>        
                            </table> 
                       </div>
                      </div>
</Conteiner>

 )
}
