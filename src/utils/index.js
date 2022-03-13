export const genRandomStr = () =>
	Math.random()
		.toString(36)
		.replace(/[^a-z]+/g, '')
		.substr(0, 8)

export const refreshWarning = () => {
	window.onunload = function () {
		window.scrollTo(0, 0)
	}
	window.history.scrollRestoration = 'manual'
	window.onbeforeunload = function () {
		return 'Sicuro di volere uscire?'
	}
}

export const easterEgg = (p) => {
	const buzzWords = [
		'gionnimontana',
		'lionberry',
		'gionni',
		'montana',
		'bandobooster',
		'elrataalada',
		'morbido'
	]
	const cleanedInput = p && p.replace(' ', '').toLowerCase()
	if (buzzWords.includes(cleanedInput)) {
		window.location.href = '/bandoBooster.html'
		return true
	}
	return false
}

export const slowly = (f) =>
	setTimeout(() => {
		f()
	}, 200)
