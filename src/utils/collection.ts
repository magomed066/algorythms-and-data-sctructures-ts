// Abstract classes have a major difference from regular JS
// classes -- they cannot be directly instantiated. They can only be extended.

// protected - property or method restricts its usage to the derived classes only.
// abstract - methods shall be implemented in the derived class and serve as a blueprint.

abstract class Collection<T> {
	protected storage: T[] = []

	size(): number {
		return this.storage.length
	}

	abstract isFull(): boolean
}

export { Collection }
