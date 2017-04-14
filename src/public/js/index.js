
$('#submit').on('click', function(e) {
	var name = $('#username')[0].value;
	var idcardno = $('#useridcardno')[0].value;
	$.ajax({
		type: 'POST',
		url: 'http://localhost:3000/users/set?name='+name+'&'+'id='+idcardno,
		data: {name:name, id:idcardno},
		dataType: 'json',
		success: function(res) {
			console.log(res)
		},
		error: function(err) {
			console.log(err)
		}
	})
})

$('#spider-btn').on('click', function(e) {
	var webaddress = $('#webaddress')[0].value;
	$.ajax({
		type: 'POST',
		url: 'http://localhost:3000/spider?addr='+webaddress,
		data: {addr:webaddress},
		dataType: 'json',
		success: function(res) {
			console.log(res)
		},
		error: function(err) {
			console.log(err)
		}
	})
})