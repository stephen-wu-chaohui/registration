function post_registration(url, data) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
			if (xhr.status == "200") {
				alert("Success");
			} else {
				alert(`Failed to post_registration with returning code ${xhr.status}`);
				console.log(xhr.responseXML);
			}
		}
	}

	xhr.open('post', url, true);
	xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
	xhr.send(JSON.stringify(data));
}
