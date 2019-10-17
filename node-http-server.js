// STILL WORKING ON THE HAPPY EYEBALLS SIMULATION
// DID A SIMPLE RANDOM QUOTE FOR NOW

const http = require("http")
const simulation_happyEyeballs = require("./simulation_happyEyeballs")

const port = 3000

const requestHandler = (/*request*/_, response) =>
{
	/*var finished = []
	var timedOut = []
	//console.log(request.url)
	//console.log(simulation_happyEyeballs)
	//[finished, timedOut] = simulation_happyEyeballs.wait()
	id = setTimeout(() =>
	{
		response.end("worked: " + id)
	}, 10000);
	//response.end(`${finished[0]} finished first followed by ${finished[1]}. ${timedOut[0]} timed out.`)*/

	quotes = ["Alan J. Perlis: A language that doesn't affect the way you think about programming is not worth knowing.", "Edward V. Berard: Walking on water and developing software from a specification are easy if both are frozen.", "Alan Kay: The most disastrous thing that you can ever learn is your first programming language."]

	response.end(quotes[Math.floor(Math.random() * 10) % 3])
}

const server = http.createServer(requestHandler)

server.listen(port, err =>
{
	if (err)
		return console.log("something bad happened", err)

	console.log(`server is listening on ${port}`)
})