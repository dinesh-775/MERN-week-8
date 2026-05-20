import exp from 'express'
import { UserModel } from '../modules/UserModel.js'
export const userApp = exp.Router()


// Create new User
userApp.post('/user', async (req, res) => {
    // get userObj from req body
    let userObj = req.body
    // create Doc for userObj
    let UserDoc = new UserModel(userObj)
    // save the user Document
    await UserDoc.save()
    // show response
    res.status(200).json({ message: "user added successfully" })

})


// Read all users
userApp.get('/users', async (req, res) => {
    // get all users from usermodel
    let users = await UserModel.find({ isActive: true }, { _id: 1, name: 1, email: 1, mobilenumber: 1 })
    // send all users
    res.status(200).json({ message: 'usesrslist', payload: users })
})


// Read a User by ID
userApp.get('/users/:id', async (req, res) => {
    // get the required user id
    let userId = req.params.id
    // check valid user or not
    let userObjDb = await UserModel.findById(userId);
    // check valid user or not
    if (!userObjDb) {
        return res.status(403).json({ message: 'user Not found with the userid' })
    }
    else if (userObjDb.isActive === false) {
        return res.status(403).json({ message: 'user is blocked' })
    }
    // convert document to json
    let userObj = userObjDb.toObject()
    res.status(200).json({ message: 'here is the user', payload: userObj })
})


// Delete a User by ID,
userApp.delete('/users/:id', async (req, res) => {
    // get the required user id
    let userId = req.params.id
    // check valid user or not
    let userObjDb = await UserModel.findById(userId);
    // check valid user or not
    if (!userObjDb) {
        return res.status(403).json({ message: 'user Not found with the userid' })
    }
    // delete the user from db
    let deletedObjDb = await UserModel.findByIdAndUpdate(userId, { $set: { isActive: false } });
    res.status(200).json({ message: 'here is the deleted user', payload: deletedObjDb })
})

userApp.patch('/users/:id', async (req, res) => {
    // get the required user id
    let userId = req.params.id

    let activateUser = await UserModel.findByIdAndUpdate(userId, { $set: { isActive: true } }, { new: true });
    res.status(200).json({ message: 'User activated!', payload: activateUser })

})
