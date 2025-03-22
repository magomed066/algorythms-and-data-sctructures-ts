import { Stack } from '../data-structures/stack'

// Given a N different open and close braces in a string "( { [ } ] )",
// check whether the string has matching braces. Return true if the braces match, false otherwise.

function checkBrackets(str: string) {
	const map: Record<string, string> = {
		'(': ')',
		'[': ']',
		'{': '}',
	}
	const closing = Object.values(map)

	const stack = new Stack<string>()

	for (let char of str) {
		if (map[char]) {
			stack.push(char)
		}

		if (closing.includes(char)) {
			const check = stack.pop()

			if (check && char !== map[check]) {
				return false
			}
		}
	}

	return !stack.size()
}
