var swig = require("swig")
var bodyparser = require("body-parser")
var session = require("express-session")
var users = []

var ntlogin = function(req,res,next){
	if(!req.session.user){
		res.redirect("/")
		return
	}
	next()
}

var islogin = function(req,res,next){
	if(req.session.user){
		res.redirect("/app")
		return
	}
	next()
}

module.exports ={
	swig: swig,
	bodyparser: bodyparser,
	session: session,
	users: users,
	ntlogin: ntlogin,
	islogin: islogin
}