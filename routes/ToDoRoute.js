const {Router} = require('express');
const { getToDo, saveToDo, updateToDO, deleteToDO } = require('../controllers/ToDoController');

const router = Router()

router.get('/', getToDo)
router.post('/save', saveToDo)
router.post('/update', updateToDO)
router.post('/delete', deleteToDO)

module.exports = router;