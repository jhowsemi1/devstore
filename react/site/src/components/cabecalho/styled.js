import styled from "styled-components"

const Cabecalho = styled.div`
   padding-left: 1em;
   width: 68.1em;
    background-color: white;
    display: flex;
    flex-direction: row;

 .cabe{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.icone-bol{ 
    display: flex;
    flex-direction: row; 
    padding-left: 44em;
    padding-bottom: 0.5em;
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

.usuario{
    padding-left: 10px;
    padding-top: 12px;
}

.cab img:nth-child(2){
    width: 1em;
    position: absolute;
    top: 3px;
    left: 20.4em;
}

.cab img:nth-child(1) {
    width: 3em;
}

.cab {
    display: flex;
    flex-direction:row;
    margin-left: 1em;
}

`

export {Cabecalho}



  