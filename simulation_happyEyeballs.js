/*
 *
 * INCOMPLETE!
 * I INCLUDED THIS FOR... "COMPLETENESS," JUST TO SHOW THE ATTEMPT WAS MADE.
 * THE SERVER HANGS WHEN PROCESSING THIS MODULE.
 * I THINK IT'S BECAUSE IT'S WAITING FOR THIS SCRIPT TO FINISH BEFORE PROCESSING THE setTimeout's.
 * I EITHER RETURN UNDEFINED VALUES BECAUSE THE TIMEOUTS DIDN'T RUN YET, OR I HANG FOREVER DEMANDING THEIR RESULTS.
 *
 */

const id = [], finished = [], timedOut = [], tests = [Math.floor(Math.random() * 10000), Math.floor(Math.random() * 10000), Math.floor(Math.random() * 10000)].sort((a, b) => b - a)

exports.wait = function ()
{
	while (id.length > 0)
	{
	}

	return [[finished[1], finished[0]], timedOut]
}

worked = ""

exports.test = function ()
{
	//for (i in tests)
		//id.push(setTimeout(() => { finished.push(id.pop()) }, tests[i]));
	id.push(setTimeout(() =>
	{
		//finished.push(id.pop())
		worked = "worked"
	}, 3000));

	//timedOut.push(finished.pop())

	return worked
}