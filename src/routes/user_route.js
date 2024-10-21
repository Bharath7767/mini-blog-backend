const router = require('express').Router()
const user_controller = require('../controllers/user_controller')

router.get('/',user_controller.getAllUsers)
router.get('/:id',user_controller.getUserById)
router.get('/',user_controller.createUser)
router.get('/:id',user_controller.updateUser)
router.get('/:id',user_controller.deleteUser)

module.exports = router;