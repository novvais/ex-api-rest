const { instrutores, identificadorInstrutor } = require("../database")

const listagem = (req, res) => {
    return res.status(200).json(instrutores)
}

const identificador = (req, res) => {
    const { id } = req.params

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id)
    })

    if (!instrutor) {
        return res.status(404).json({mensagem: "Instrutor nao encontrado"})
    } else {
        return res.status(200).json(instrutor)
    }
}

const cadastro = (req, res) => {
    const { nome, email, status } = req.body

    if(!nome) {
        return res.status(400).json({ mensagem: "Preencha o nome"})
    }

    if(!email) {
        return res.status(400).json({ mensagem: "Preencha o email"})
    }

    const instrutor = { 
        id: indetificadorInstrutor++,
        nome,
        email,
        status: status || true
    }

    instrutores.push(instrutor)

    return res.status(201).json(instrutor)
}

const atualizarInstrutor = (req, res) => {
    const { id } = req.params
    const { nome, email, status } = req.body

    if(!nome) {
        return res.status(400).json({ mensagem: "Preencha o nome"})
    }

    if(!email) {
        return res.status(400).json({ mensagem: "Preencha o email"})
    }

    if(!status) {
        return res.status(400).json({ mensagem: "Preencha o status"})
    }

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id)
    })

    if (!instrutor) {
        return res.status(404).json({mensagem: "Instrutor nao encontrado"})
    } 

    instrutor.nome = nome
    instrutor.email = email
    instrutor.status = status

    return res.status(204).send()
}

const atualizarStatus = (req, res) => {
    const { id } = req.params
    const { status } = req.body

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id)
    })

    if (!instrutor) {
        return res.status(404).json({mensagem: "Instrutor nao encontrado"})
    } 

    instrutor.status = status

    return res.status(204).send()
}

const deleteIntrutor = (req, res) => {
    const { id } = req.params

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id)
    })

    if(!instrutor) {
        return res.status(404).jason({mensagem: "O instrutor nao existe"})
    }

    instrutores = instrutores.filter((instrutor) => {
        return instrutor.id !== Number(id)
    })

    return res.status(204).send()
}

module.exports = { listagem, identificador, cadastro, atualizarInstrutor, atualizarStatus, deleteIntrutor }