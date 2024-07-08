import { Router } from 'express'
import { handleLogin, handleSignup, handleLogout } from '../controllers/handlers.js'

const router = Router()

router.post('/signup', handleSignup)
router.post('/login', handleLogin)
router.get('/logout', handleLogout)

export default router
