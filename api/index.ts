function defineClient() {
	function generate() {
		return Math.random()
	}

	async function random() {
		"use cache"
		return await generate()
	}

	return { random }
}

export const client = defineClient()
