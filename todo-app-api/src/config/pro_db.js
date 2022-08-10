
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
require('dotenv').config()

mongoose.set('runValidators', true);
module.exports = mongoose.connect(process.env.DB_MONGO_ATLAS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }).then(() => {
    console.log("Conectado com sucesso")
})
.catch((erro) => {
    console.log("Erros ao se conectar " + erro)
})
;