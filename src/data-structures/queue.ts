// Queues are very similar to the stacks, but they handle items FIFO (first in first out).
// Items will be retrieved from the queue in the same order as they were added.
// Queues have the following methods:

// - enqueue: adds an item to the queue
// - dequeue: retrieves an item from the queue
// - size: returns the size of the queue

interface IQueue<T> {
	enqueue(value: T): void
	dequeue(): T | undefined
	size(): number
}

export class Queue<T> implements IQueue<T> {
	private storage: T[] = []

	constructor(private capacity: number = Infinity) {}
	// This is a short-hand for assigning a property in the constructor.

	enqueue(value: T): void {
		if (this.size() === this.capacity) {
			throw new Error(
				'Queue has reached max capacity, you cannot add more items',
			)
		}
		this.storage.push(value)
	}

	dequeue(): T | undefined {
		return this.storage.shift()
	}

	size(): number {
		return this.storage.length
	}
}

const queue = new Queue()

queue.enqueue('A')
queue.enqueue('B')

console.log(queue.size()) // Output: 2
console.log(queue.dequeue()) // Output: "A"
console.log(queue.size()) // Output: 1
