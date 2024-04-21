"use strict"

//* User controller:

//TODO: other actions will be completed

const User = require("../models/user")

module.exports = {
    list: async (req,res) =>{

        console.log(req.body)
        const data = await User.find()

        res.status(200).send({
            error:false,
            data
        })
    },
    create: async (req,res) =>{

        const data = await User.create(req.body)
        
        console.log(req.body)
        res.status(201).send({
            error:false,
            data
        })
    },
    read: async (req,res) =>{
        const data = await User.findOne({_id: req.params.userId})

        res.status(202).send({
            error:false,
            data
        })
    },
    update: async (req,res) =>{
        const data = await User.updateOne({_id: req.params.userId}, req.body, {runValidators:true})

        res.status(202).send({
            error:false,
            data,
            new: await User.findOne({_id: req.params.userId})
        })
    },
    delete: async (req,res) =>{
        const data = await User.deleteOne({_id: req.params.userId})

        res.status(data.deletedCount ? 204 : 404).send({
            error: !(!!data.deletedCount),
            data
        })
    }
}