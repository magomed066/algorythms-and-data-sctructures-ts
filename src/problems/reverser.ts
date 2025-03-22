import { NewStack } from '../data-structures/stack'

class Reverser {
	constructor(private input: string = '') {}

	reverse(): string {
		const inputSize = this.input.length
		const stack = new NewStack(inputSize)

		let output = ''

		for (let i = 0; i < inputSize; i++) {
			const char = this.input[i]
			stack.push(char)
		}

		while (!stack.isEmpty()) {
			const char = stack.pop()
			output += char
		}

		return output
	}
}

const reverser = new Reverser('Magomed')

console.log(reverser.reverse())
