const start = 10

function generate() {
	return start + Math.random()
}

async function random() {
	"use cache"
	return await generate()
}

export const client = { random }
