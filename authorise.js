const authorise = async function(code){
		const response = await fetch("https://api.withmono.com/accounts/auth", { 
			method: 'POST',
			body: JSON.stringify({ code }),
			headers: {
				'Content-Type': 'application/json',
				'mono-sec-key': process.env['MONO_SECRET_KEY']
			}
		}).then(res => res.json())
			.then(json => {
				return json.id;
			})
			.catch(err => console.error(err));
}
