import { Elysia, t } from "elysia"
import { example } from "./controllers/example.controller"
import { swaggerConfig } from "./configs/swagger.configs"
import { tlsConfig } from "./configs/tls.configs"
import cors from "@elysiajs/cors"
import { MongoDB } from "./configs/database.config"
import { jwtConfig } from "./configs/jwt.config"
import { AccountController } from "./controllers/account.controller"
import { UserController } from "./controllers/user.controller"
import staticPlugin from "@elysiajs/static"
import { PhotoController } from "./controllers/photo.controller"
import { LikeController } from "./controllers/like.controller"
import { ErrorController } from "./controllers/errorController"
import { MessageController } from "./controllers/message.controller"


MongoDB.connect()



const app = new Elysia()
  .use(swaggerConfig)
  //.use(example)
  .use(cors())
  .use(jwtConfig)
  .use(AccountController)

  .use(UserController)
  .use(LikeController)
  .use(PhotoController)
  .use(MessageController)

  .use(staticPlugin({
    assets: "public/uploads",
    prefix: "img"
  }))
  .use(ErrorController)

  .listen({
    port: Bun.env.PORT || 8000,
    tls: tlsConfig
  })

let protocol = 'http'
if ('cert' in tlsConfig)
  protocol = 'https'
console.log(`💘💘💘💘Elysia is running at ${protocol}://${app.server?.hostname}:${app.server?.port}💘💘💘💘`)



