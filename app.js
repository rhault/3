var express = require("express")
var app = express()
var server = require("http").Server(app)
var io = require("socket.io")(server)
var middleware = require("./dependencies/middleware")
var routes = require("./routes/routes")

//Views
app.engine("html", middleware.swig.renderFile)
app.set("view engine", "html")
app.set("views", "./views")

//Set App
app.use(express.static("./dependencies"))
app.use(express.static("./"))
app.use(middleware.bodyparser())
app.use(middleware.session({secret:"key"}))

//Routes
app.get("/", middleware.islogin, routes.home)
app.post("/login", routes.login)
app.get("/app", middleware.ntlogin, routes.app)
app.get("/logout", routes.logout)

//io.on("connect", function(socket){
//	socket.emit("emitd", {msg: "hello"})
//})

server.listen(8000, function(){
	console.log("server run 8000")
})

