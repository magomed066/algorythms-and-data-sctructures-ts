// A stack is an elementary data structure, that is often described as LIFO (last in first out).
// An item that was added the last is the first to be retrieved.
// Usually, stacks have the following methods:

import { Collection } from '../utils/collection'

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

// Now let's look at how Stack
// class can be implemented with the help of the abstract Collection class.

export class StackCollection<T> extends Collection<T> implements IStack<T> {
	constructor(private capacity: number = Infinity) {
		super()
	}

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

	// Implementation of the abstract method
	isFull(): boolean {
		return this.capacity === this.size()
	}
}

// * A better version of Stack with push and pop methods that have time complicity 0(1)
export class NewStack<T> implements IStack<T> {
	private storage: T[] = []
	private top: number

	constructor(private capacity: number = Infinity) {
		this.storage = []
		this.top = -1
	}

	public push(value: T): void {
		if (this.isFull()) {
			throw new Error(
				'Stack has reached max capacity, you cannot add more items',
			)
		}
		this.storage[++this.top] = value
	}

	public pop(): T | undefined {
		if (this.isEmpty()) return undefined

		const value = this.storage[this.top]
		this.storage.length--
		this.top--

		return value
	}

	public peek(): T | undefined {
		if (this.isEmpty()) return undefined
		return this.storage[this.top]
	}

	public isEmpty(): boolean {
		return this.top === -1
	}

	public isFull(): boolean {
		return this.top === this.capacity - 1
	}

	public size(): number {
		return this.storage.length
	}
}
// Time Complexity
// ✅ push() → O(1)
// ✅ pop() → O(1)
// ✅ peek() → O(1)
// ✅ size() → O(1)
// ✅ isEmpty() → O(1)
// ✅ isFull() → O(1)
