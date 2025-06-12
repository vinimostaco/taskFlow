import app from "./app"
import {env} from "./config/env-validation"

function start(){

    app.listen(env.PORT, ()=>{
        console.log(`✅ server running on Port: ${env.PORT}`)
    })
}

start()