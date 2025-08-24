// script.js

//prevent default form submittion
document.getElementById('qr-form').addEventListener('submit', function (e) {
	e.preventDefault();
// const data
	const id = document.getElementById('qr-id').value;
	const price = document.getElementById('qr-price').value;
	const data = { id, price }
// ferching api
	fetch('http://localhost:3000/generate-qr', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ data })
	})
    //Expects back QR code image response and convert the response into blob
		.then(response => response.blob())
		.then(blob => {
            // create element Image + 
			const qrImage = document.createElement('img');
            // Creates a URL to use that blob in HTML.
			const qrImageUrl = URL.createObjectURL(blob);
			qrImage.src = qrImageUrl;
			const qrResultDiv = document.getElementById('qr-result');
			qrResultDiv.innerHTML = '';
			qrResultDiv.appendChild(qrImage);
		})
		.catch(error => console.error('Error generating QR code:', error));

});