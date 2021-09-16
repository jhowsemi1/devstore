import styled from "styled-components";

const Conteiner = styled.div`
  display: flex;
    flex-direction: row;
    background-color: #F5F5F5;
  

    .icone-bol{
  display: flex;
  flex-direction: row;
}

.mae-cab {
    padding-left: 1em;
    width: 69em;
    background-color: white;
    display: flex;
    flex-direction: row;
}

.segundo{
  
    height: 23em;
    margin-left: 3.5em;
    margin-top: 3em;
    padding-left: 2em;
    background-color: white;
    width: 55em;
}

.icone-bol{ 
    display: flex;
    flex-direction: row; 
    padding-left: 44em;
    padding-bottom: 0.5em;
}


.cabe{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.usuario{
    padding-left: 10px;
    padding-top: 12px;
}

.bola button {
    border-radius: 50%;
    border: none;

    background-color:#119FDC;;
}

.bola {
    background-color: #119FDC;
    border-radius: 50%;

    width: px;
    height: 46px;
    margin-left: 0.5em;
}
.bola img{
    width: 2.7em;
    height: 40px;
}

.parti-1, .parti-2, .parti-3, .parte-4{
    display: flex;
    flex-direction: row;
}


.parti-2{
    display: flex;
    flex-direction: row;

    margin-top: 1em;
    margin-bottom: 1em;
}

.parte-4 {
    margin-bottom: 1em;
    margin-top: 1em;
}

.parte-4 input{
    width: 41em;
}

.but-prod button{
  
background-color:#119FDC;
color: white;

border-radius: 25px;
border: none;

padding: 6px 15px 8px 15px;
margin-left: 1em;

margin-top: 3.5em
}

.segui-2{ 
    margin-left: 3.5em;
}

.forms{
    display: flex;
    flex-direction: row;
}

.segundo-2{
    display: flex;
    flex-direction: row;
}

.produto-cadastrados {
    margin-top: 2em;
    padding-left: 2em;

    width: 55em;
    height: 52vh;
    background-color: white;
}

.linha-primeira{
    align-items: center;
    justify-content: space-between;

    background-color: #119FDC;
    color: white;
    height: 3em;
}

.linha1-part {
    justify-content: space-between;
}

th,td {
    padding: 1em;
}

.tabela {
   
    margin-right: 2em;

    width: calc(100% - 4em);
    border-collapse: collapse;
    text-align: left;
}

.produto-cadastrados {
    margin-left: 3.5em;
    margin-top: 2em;
    padding-left: 2em;

    width: 55em;
    height: 53vh;

    background-color: white;
    overflow: hidden;

        overflow-y: scroll;
        height: 2500px;

        max-height: 300px;
}

.estoque{
    margin-left: 5.5em;
}

.por{
    margin-left: 7.3em;
}

.preco{
    margin-left: 4.5em;
}

.nome{
    margin-left: 3em;
}

.categoria{
    margin-left: 1.5em;
}

.avaliacao{
    margin-left: 1.6em;
}

.link input{
    width: 30em;
}

input {
    width: 15em;
    height: 2em;
}

.barra-produ img{
    padding-top: 1.2em;
    padding-right: 10px;
}

.semi{
    display: flex;
    flex-direction: row;
}

.produ-cada{
    display: flex;
    flex-direction: row;
}

.produ-cada img{
    padding-top: 1.2em;
    padding-right: 10px;
}

.botoes {
    background-color: #565656;
    border-radius: 50%;

    border: none;
    height: 30px;

}

.imagens img{
    width: 3.1em;
    height: 2.1em;
}



.cab img:nth-child(2){
    width: 1em;
    position: absolute;
    top: 1px;
    left: 19.4em;
}

.cab img:nth-child(1) {
    width: 3em;
}

.cab {
    display: flex;
    flex-direction:row;
    margin-left: 1em;
}

.linha1-part{
    background-color: #F5F5F5;
}

.visuali > button {
  visibility: hidden;
}



tr:hover{
    .visuali> button{
        visibility: visible;
    }
}

`

export {Conteiner}