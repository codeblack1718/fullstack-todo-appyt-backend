const ToDoModel = require('../models/ToDomodel')

module.exports.getToDo = async(req, res)=> {
    const toDo = await ToDoModel.find()
    res.send(toDo)
}

module.exports.saveToDo = async(req, res)=> {

    const {text} = req.body

    ToDoModel
    .create({text})
    .then((data)=> {
        console.log("Added Successfully...");
        console.log(data);
        res.send(data)
    })
    
}

module.exports.updateToDO = async (req, res) => {
    const {_id, text } = req.body
    ToDoModel
    .findByIdAndUpdate(_id,{text})
    .then(()=> res.send("Updated Successfully...."))
    .catch((err)=> console.log(err))
}

module.exports.deleteToDO = async (req, res) => {
    const {_id,} = req.body
    ToDoModel
    .findByIdAndDelete(_id,)
    .then(()=> res.send("Deleted Successfully...."))
    .catch((err)=> console.log(err))
}