import { v4 } from "uuid";
import items from "../data.js";

let dataSource = [...items]

export const getItems=(req,res)=>{
    res.send(
        dataSource
    )
}

export const getItem=(req,res)=>{
    const { id } = req.params
    const item = dataSource.find((item) => item.id === id)
    res.send(item)
}

export const addItem=(req,res)=>{
    const { name } = req.body
    const item ={
        id : v4(),
        name
    }
    dataSource= [...dataSource,item]
   // const item = items.find((item) => item.id === id)
    res.code(201).send(item)
}

export const deleteItem=(req,res)=>{
    const { id } = req.params
    dataSource= dataSource.filter((data)=>data.id !== id)
   // const item = items.find((item) => item.id === id)
    res.code(200).send("Item deleted")
}

export const updateItem=(req,res)=>{
    const { id } = req.params
    const { name } = req.body
    console.log("datasource",{dataSource,id,name});
    dataSource = dataSource.map((data)=> data.id === id ? {id,name} :data)
    console.log("datasource",{dataSource});
   // const item = items.find((item) => item.id === id)
    res.code(200).send("Item updated")
}