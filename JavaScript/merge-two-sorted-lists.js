// Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

// Example:
// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4


// Definition for singly-linked list.
// function ListNode(val, next) {
//   this.val = (val===undefined ? 0 : val)
//   this.next = (next===undefined ? null : next)
// }

const mergeTwoLists = (l1, l2) => {

  if (!l1) return l2;
  if (!l2) return l1;

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
}

const mergeTwoLists = (l1, l2) => {
  let head = new ListNode();
  let currentHead = head;
  
  while (l1 && l2) {
      if (l1.val < l2.val) {
          currentHead.next = l1;
          l1 = l1.next;
      } else {
          currentHead.next = l2;
          l2 = l2.next;
      }
      
      currentHead = currentHead.next;
  }
  
  while(l1) {
      currentHead.next = l1;
      l1 = l1.next;
      currentHead = currentHead.next;
  }
  while(l2) {
      currentHead.next = l2;
      l2 = l2.next;
      currentHead = currentHead.next;
  }
  
  return head.next;
}