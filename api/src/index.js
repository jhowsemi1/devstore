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
                img_produto: g.link
                
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
            img_produto: b.link,
            bt_ativo: b.disponivel,
            dt_inclusao: data
            
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