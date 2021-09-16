import db from "./db.js";
import express from "express";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get("/produto", async (req, resp) => {

    try {
        let prod = await db.tb_produto.findAll({order: [["id_produto", "desc"]]});
        resp.send(prod)
    } catch(e) {
        resp.send({erro: "ocorreu um erro!"})
    }
})

app.post("/produto", async(req,resp) => {
    try{
      
        let g = req.body;
        let data = new Date()
      
        if(g.produto == "") { 
        return resp.send({erro: "o campo nome deve ser preenchido"})
         }
       
         
        if(g.produto.length < 4)
         return resp.send({erro: "o campo nome deve conter mais de 4 caracteres"})
        

         if(g.categoria == "")
         return resp.send({erro: "o campo categoria é obrigatorio"})
        

         if(g.categoria.length < 4)
          return resp.send({erro:"o campo categoria deve conter mais de 4 caracteres "})
          
          if (isNaN(g.avaliacao))
          return resp.send({erro:"o campo avaliacao aceita apenas numeros"})
        

          if ( isNaN(g.precode))
           return resp.send({erro:"o campo *Preco De * aceita somente numeros"})
        

          if(isNaN(g.precopor))
          return resp.send({erro: " o campo *Preco Por* aceita somente numeros"})
          

          if(isNaN(g.estoque))
          return resp.send({erro:" o campo *Estoque* aceita somente numeros"})
         

          if( g.link === " ")
          return resp.send({erro: "o campo link da imagem deve ser preenchido"})
         

          if( g.link < 4 )
          return resp.send({erro:"o campo link deve conter mais de 4 caracteres"})
         

          if(g.descricao === "")
          return resp.send({erro:" o campo descricao deve ser preenchido"})

         let m = await db.tb_produto.findOne({ where: {nm_produto: g.produto}});
         if ( m != null )
         return resp.send({erro: "produto ja existente"}) 

        let r = await db.tb_produto.create(
            {    
                nm_produto: g.produto,
                ds_categoria: g.categoria,
                vl_preco_de: g.precode,
                vl_preco_por: g.precopor,
                vl_avaliacao: g.avaliacao,
                ds_produto: g.descricao,
                qtd_estoque:g.estoque,
                img_produto:g.link,
                bt_ativo: g.disponivel,
                dt_inclusao: data,
                
                
              });
            resp.send(r);
    } catch (e) {
        resp.send({erro: e.toString()});
    }
})

app.put("/produto/:id", async(req, resp) => {
    try {
    let id = req.params.id;
    let data = new Date()
    let b = req.body;

    let r = await db.tb_produto.update(
        {
            nm_produto: b.produto,
            ds_categoria: b.categoria,
            vl_preco_de: b.precode,
            vl_preco_por: b.precopor,
            vl_avaliacao: b.avaliacao,
            ds_produto: b.descricao,
            qtd_estoque: b.estoque,           
            bt_ativo: b.disponivel,
            dt_inclusao: data,
            img_produto: b.link
            
        },
        {
            where: {id_produto: id}
       });
       resp.sendStatus(200);
    } catch (e) {
        resp.send({erro: e.toString()});
    }
    
})

app.delete("/produto/:id", async (req, resp) => {
    try {
        let {id} = req.params;
        let r = await db.tb_produto.destroy (
            {where: {id_produto: req.params.id}}
        )
        resp.sendStatus(200);
    } catch (e) {
        resp.send({erro: e.toString()})
    }
});


app.listen(process.env.PORT,
    x => console.log(`A PORT ${process.env.PORT} subiu!! `));