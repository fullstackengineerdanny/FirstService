const http = require("http")
const querystring = require("querystring")

const postData = querystring.stringify({ 'figureOut': "TODO:come back and see what this is doing" })

const options =
{
	hostname: "127.0.0.1",
	port: 3000,
	path: "/",
	method: "POST",
	headers:
	{
		"Content-Type": "application/x-www-form-urlencoded",
		"Content-Length": Buffer.byteLength(postData)
	}
}

const req = http.request(options, res =>
{
	//console.log(`STATUS: ${res.statusCode}`);
	//console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
	res.setEncoding("utf8")
	res.on("data", chunk =>
	{
		//console.log(`BODY: ${chunk}`);
		console.log(`${chunk}`)
	})
	res.on("end", () =>
	{
		//console.log('No more data in response.');
	})
})

req.on("error", e =>
{
	console.error(`problem with request: ${e.message}`)
})

// Write data to request body
req.write(postData)
req.end()