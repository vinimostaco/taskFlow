import app from "./app"
import { AppDataSource } from "./config/datasource";
import {env} from "./config/env-validation"

function start(){

    AppDataSource.initialize()
      .then(() => {
        console.log('✅ Data Source has been initialized!');
      })
      .catch((err) => {
        console.error('❌ Error during Data Source initialization', err);
      });
           
    
    app.listen(env.PORT, ()=>{
        console.log(`🚀 server running on Port: ${env.PORT}`)
    })
}

start()