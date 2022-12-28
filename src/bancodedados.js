const bancodedados = {
    identificadorInstrutor: 3,
    identificadorAula: 2,
    
    instrutores: [
        {
            id: 1,
            nome: 'Bruno Cesar',
            email: 'brunocesar903@gmail.com',
            status: true
        },
        {
            id: 2,
            nome: 'Pam',
            email: 'pam.pamela_alves@gmail.com',
            status: true
        },
    ],
    aulas: [
        {
            id: 1,
            instrutor_id: 1,
            titulo: 'Primeiro Servidor',
            descricao: 'Construindo o primeiro servidor'
        }
    ]
}

module.exports = bancodedados;