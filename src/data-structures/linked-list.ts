// A linked list is a data structure that holds objects arranged in a linear order,
// this order is determined by a pointer in each node.
// Unlike an array, a linked list doesn't provide constant-time access to a particular index,
// you have to iterate through the list to find an element, on the other hand,
// is possible to add and remove items from the beginning of the list in a constant time.
// Linked lists can be used to implement other data structures, such as stacks, queues, and graphs.

//! There are some types of linked lists:

// Singly linked list - Each node has only a pointer to the next node.
// Doubly linked list - Each node has pointers to both the previous and next node.
// Circular linked list - The last node points to the first element.

// -----------------------

//! Basic operations

// Insertion - It's possible to insert a new element anywhere in the list,
// you just have to take care of the pointers. If you are adding an element
// to the beginning the new node will pointer to the former head node.
// If you are appending to the tail, the former tail node will point to the new node. Now,
// if inserting between nodes, the previous node has to
// point to the new node which will point to the next node

// Deletion - Follow a similar logic of insertion,
// if you want to remove a node from the middle of the list,
// you just have to make the target's previous node point to the target's next node.
// In a doubly-linked list, you have to take care of the previous pointer too.

// Traverse - Each node has a point to next, so you start from
// the node head and follow the pointers until the last node,
// which will not point to any node (in a non-circular linked list)

//! ----------------------

//? Here's an implementation of a singly linked list:

class Node<T> {
	value: T
	next: Node<T> | null = null

	constructor(value: T) {
		this.value = value
		this.next = null
	}
}

export class LinkedList<T> {
	head: Node<T> | null = null
	size: number

	constructor() {
		this.head = null
		this.size = 0
	}

	push(value: T): boolean {
		const newNode = new Node<T>(value)
		if (!this.head) {
			this.head = newNode
			this.size++
			return true
		}

		// if there are already nodes present
		let current = this.head

		while (current.next) {
			current = current.next
		}

		current.next = newNode
		this.size++
		// I will return a boolean to indicate success
		return true
	}

	pop(): boolean {
		// already empty list
		if (!this.head) return false

		// only head present, can be set to null directly
		if (this.size === 1) {
			this.head = null
			this.size--
			return true
		}

		// we will traverse to the end of the list
		// then remove the link between the second last and the last node
		let current = this.head
		let prevNode: Node<T> | null = null

		while (current.next) {
			prevNode = current
			current = current.next
		}

		if (prevNode) {
			prevNode.next = null
		}

		this.size--
		return true
	}
}

//! In practice

class AttackNode<T extends number> {
	value: T
	next: AttackNode<T> | null = null
	attackBuff: T

	constructor(value: T, attackBuff: T) {
		this.value = value
		this.attackBuff = attackBuff
		this.next = null
	}
}

class AttackList<T> {
	head: AttackNode<number> | null

	totalDamage: number
	size: number

	constructor() {
		this.head = null
		this.size = 0

		// initialize total damage as zero
		this.totalDamage = 0
	}

	push(value: number, attackBuff: number): boolean {
		const newNode = new AttackNode(value, attackBuff)

		if (!this.head) {
			this.head = newNode
			this.size++

			return true
		}

		let current = this.head

		while (current.next) {
			current = current.next
		}

		current.next = newNode
		this.size++

		this.totalDamage += newNode.value + newNode.attackBuff

		return true
	}

	pop(): boolean {
		if (!this.head) return false

		if (this.size === 1) {
			this.head = null
			this.size--
			this.totalDamage = 0

			return true
		}

		let prevNode: AttackNode<number> | null = null
		let current = this.head

		while (current.next) {
			prevNode = current
			current = current.next
		}

		if (prevNode) {
			prevNode.next = null
		}

		this.size--

		this.totalDamage -= current.value + current.attackBuff
		return true
	}
}
