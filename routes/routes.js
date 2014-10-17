var middleware = require("../dependencies/middleware")
var serv = require("../app.js")
var express = require("express")
var app = express()
var server = require("http").Server(app)
var io = require("socket.io")(server)

module.exports = {
	home: function(req,res){
		res.render("index")
	},
	login: function(req,res){
		req.session.user = req.body.username
		io.on("connect", function(socket){
			socket.emit('login', {emss: "hola"})
			console.log("todo bien")
		})
		middleware.users.push(req.body.username)
		res.redirect("/app")
	},
	app: function(req,res){
		res.render("app", {user: req.session.user,
			users_all: middleware.users})
	},
	logout: function(req,res){
		req.session.destroy()
		res.redirect("/")
	}
}