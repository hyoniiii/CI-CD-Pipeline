'use strict'

const { ObjectId } = require("@fastify/mongodb")

module.exports = async function (fastify, opts) {
    fastify.put('/:id', async function (request, reply) {
        const menuName = request.body.name;
        const menuPrice = request.body.price;

        const collection = this.mongo.db.collection('restaurants')
        const oldData = await collection.findOne({ _id: ObjectId(process.env.MARKET_ID) })
        
        const newData = oldData.menu.map(element => {
            if( element._id.toString() === request.params.id ) {
                element.name = menuName;
                element.price = menuPrice;
            }           
            return element
        });       

        const resData = await collection.findOneAndUpdate({ _id: ObjectId(process.env.MARKET_ID) }, { $set: { menu: newData } }, { returnDocument:"after" })
        const result = resData.value.menu.find( index => index.name === menuName )

        reply
            .code(200)
            .header('content-type','application/json')
            .send(result)
    })
}