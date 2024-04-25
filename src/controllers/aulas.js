let { instrutores, identificadorAula, aulas } = require("../database")

const cadastrarAula = (req, res) => {
    const { idInstrutor } = req.params
    const { titulo, descricao } = req.body

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(idInstrutor)
    })

    if(!instrutor) {
        return res.status(404).json({mensagem: "Intrutore nao encontrado"})
    }

    if(!titulo || !descricao) {
        return res.status(400).json({mensagem: "Preencha todos os campos: titulo e desciçao"})
    }

    const aula = {
        id: identificadorAula++,
        instrutor_id: Number(idInstrutor),
        titulo,
        descricao
    }

    aulas.push(aula)

    return res.status(201).json(aula)
}

const listagemAula = (req, res) => {
    return res.status(200).json(aulas)
}

const aulaDetalhada = (req, res) => {
    const { id } = req.params

    const aula = aulas.find((aula) => {
        return aula.id === Number(id)
    })

    if(!aula) {
        return res.status(404).json({mensagem: "Aula nao encontrada"})
    } else {
        return res.status(200).json(aula)
    }

}

const listarAulaInstrutor = (req, res) => {
    const { id } = req.params

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id)
    })

    if (!instrutor) {
        return res.status(404).json({mensagem: "Instrutor nao encontrado"})
    }

    const aulas = aulas.filter((aula) => {
        return aula.instrutor_id === instrutor.id
    })

    return res.status(200).json(aulas)
}

module.exports = { cadastrarAula, listagemAula, aulaDetalhada, listarAulaInstrutor }