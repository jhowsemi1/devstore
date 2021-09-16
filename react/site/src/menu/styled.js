import styled  from "styled-components";


const Menu = styled.div`

     width: 18%;
    height: 100vh;

    position: sticky;
    top: 0px;
    background-color:#2B3031;

span{
    color: #119FDC;
}

.titulo{
    display: flex;
    flex-direction: row;
    padding: 2em 0em 1em 2em;
}

.dev{
    color: white;
    padding-top: 4px;
    padding-left: 0.5em;
}

.gere-segu{
    display: flex;
    flex-direction: row;

    padding-left: 2em;
    padding-top: 1.6em;

}

.gerencia{
    padding-bottom: 1em;
}

.back{
    width: 15.2em;
    height: 3.4em;
    background-color: #262626;
}

.produ{
  background: white;
 padding: 1em;
 padding-left: 2em;
}

.icone{
    padding-left: 3.5em;
}


  `
export {Menu}