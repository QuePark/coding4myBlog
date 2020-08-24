class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}

	push(newNode) {
		if (this.next === null) {
			this.next = newNode;
		}
	}

	pop(newNode) {
		if (this.next === null) {
			this.value = null;
		}
	}
}
