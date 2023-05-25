import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    const aluno = {
        id: 10,
    }

    res.render('pages/index', { aluno })
})

export default router