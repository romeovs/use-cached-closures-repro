function defineClient(start: number) {
	function generate() {
		return start + Math.random()
	}

	async function random() {
		"use cache"
		return await generate()
	}

	return { random }
}

export const client = defineClient(100)
