const server = require("./src/config/server")
require("./src/config/pro_db")
require("./src/config/routes")(server)