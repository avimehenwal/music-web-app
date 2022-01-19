// Write in pseudocode (or js/ts) a simple queue that can perform a:

// enqueue - add element to queue
// dequeue - remove element from queue
// peek - returns first element without removing it
// size - returns number of elements in queue

class Queue {

  queue: number[] = []

  function enqueue(item) {
    this.queue.append(item)
  }

  function dequeue() {
    del(this.queue[0])
  }

  function peek() {
    if (queue.length === 0) {
      return null
    }
    return this.queue[0]
  }

  function size() {
    return this.queue.length
  }
}

FIFO   B=======A,
[]
[a]
[a,b]


