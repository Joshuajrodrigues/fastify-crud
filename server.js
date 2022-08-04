
import fastifySwagger from "@fastify/swagger";
import Fastify from "fastify";


import itemRoutes from "./routes/items.js";

const fastify = Fastify()

fastify.register(fastifySwagger,{
  exposeRoute:true,
  routePrefix:"/docs",
  swagger:{
    info:{
      title:"fastify api"
    }
  }
})
fastify.register(itemRoutes)
const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    console.log({ err });
    process.exit(1)
  }
}
start()