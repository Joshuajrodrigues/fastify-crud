import { addItem, getItem, getItems,deleteItem,updateItem } from "../controllers/itemsContoler.js";


// options for get all items
const itemOps ={
    type: 'object',
    properties: {
        id: { type: 'string' },
        name: { type: 'string' }
    }
}
const getItemsOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                itemOps
            }
        }
    },
    handler:getItems
}

const getItemOpts = {
    schema: {
        params:{
            id:{
                type:"string"
            }
        },
        response: {
            200:itemOps            
        }
    },
    handler:getItem
}

const createItemOpts = {
   
    schema: {
        body:{
            type:'object',
            required:["name"],
            properties:{
                name:{type:'string'}
            }
        },
        response: {
            201:itemOps            
        }
        
    },
    handler:addItem
}

const deleteItemOpts={
    schema:{
        params:{
            id:{
                type:"string"
            }
        },
    },
    response:{
        200:itemOps
    },
    handler:deleteItem
}

const updateItemOpts={
    schema:{
        params:{
            id:{
                type:"string"
            }
        },
        body:{
            type:'object',
            required:["name"],
            properties:{
                name:{type:'string'}
            }
        }
    },
    response:{
        200:itemOps
    },
    handler:updateItem
}


function itemRoutes(fastify, options, done) {

    fastify.get('/items', getItemsOpts)

    fastify.get('/items/:id',getItemOpts)

    fastify.post('/items', createItemOpts)

    fastify.delete('/items/:id',deleteItemOpts)

    fastify.put('/items/:id',updateItemOpts)
    done()
}
export default itemRoutes