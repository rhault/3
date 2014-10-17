$(document).ready(function(){
	window.io = io.connect();

	io.on('connect', function(socket){
		console.log('new socket connected')
	})

	io.on('login', function(data){
		console.log(data)
	})
})