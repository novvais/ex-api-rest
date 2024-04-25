const express = require("express")
const aulas = require("./controllers/aulas")
const instrutores = require("./controllers/instrutores")

const rote = express()

rote.get("/instrutores", instrutores.listagem)
rote.get("/instrutores/:id", instrutores.identificador)
rote.post("/instrutores", instrutores.cadastro)
rote.put("/instrutores/:id", instrutores.atualizarInstrutor)
rote.patch("/instrutores/:id/status", instrutores.atualizarStatus)
rote.delete("/instrutores/:id" , instrutores.deleteIntrutor)

rote.post("/instrutores/:idInstrutor/aulas", aulas.cadastrarAula)
rote.get("/aulas", aulas.listagemAula)
rote.get("/aulas/:id", aulas.aulaDetalhada)
rote.get("/instrutores/:idInstrutor/aulas", aulas.listarAulaInstrutor)

module.exports = rote