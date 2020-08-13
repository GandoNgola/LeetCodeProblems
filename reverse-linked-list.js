// Reverse a singly linked list.

// Example:
// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL


// Definition for singly-linked list.

// function ListNode(val, next) {
//   this.val = (val===undefined ? 0 : val)
//   this.next = (next===undefined ? null : next)
// }


const reverseList = head => {
  // Create a previous node so head can reverse its pointer
  let prev = null; 

  while (head) {
    // Keep track of the next node
    let nextNode = head.next;
    // Set the head's next to previous, reversing its pointer
    head.next = prev;
    // Change previous to be the head
    prev = head; 
    // Change head to be the next node for iteration
    head = nextNode; 
  }

  // Prev becomes the new head, and as such, the new reference for next nodes.
  return prev; 
}

// Without comments
const reverseList = head => {
  let prev = null; 

  while (head) {
    let nextNode = head.next;
    head.next = prev;
    prev = head; 
    head = nextNode; 
  }

  return prev; 
}