// A stack is an elementary data structure, that is often described as LIFO (last in first out).
// An item that was added the last is the first to be retrieved.
// Usually, stacks have the following methods:

// - push adds an item to the stack
// - pop returns the last added item and remove it from the stack
// - peek (optional) returns the last added item without removing it from the stack

// Stack also has some properties:

// - storage represents all stacked items
// - capacity (optional) is a number of items a stack can fit

// A generic interface for the Stack
interface IStack<T> {
	push(value: T): void
	pop(): T | undefined
	peek(): T | undefined
	size(): number
}
// Typescript interfaces don't allow to define private properties,
// therefore storage and capacity are omitted in IStack interface.

export class Stack<T> implements IStack<T> {
	private storage: T[] = []

	constructor(private capacity: number = Infinity) {}
	// This is a short-hand for assigning a property in the constructor.

	push(value: T): void {
		if (this.size() === this.capacity) {
			throw Error(
				'Stack has reached max capacity, you cannot add more items',
			)
		}
		this.storage.push(value)
	}

	pop(): T | undefined {
		return this.storage.pop()
	}

	peek(): T | undefined {
		return this.storage[this.size() - 1]
	}

	size(): number {
		return this.storage.length
	}
}
