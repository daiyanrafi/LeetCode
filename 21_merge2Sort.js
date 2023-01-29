//var mergeTwoLists = function(l1, l2) {
//    let dummy = new ListNode(0);
//    let head = dummy;
//    while(l1 && l2){
//        if(l1.val < l2.val){
//            head.next = l1;
//            l1 = l1.next;
//        }else{
//            head.next = l2;
//            l2 = l2.next;
//        }
//        head = head.next;
//    }
//    if(l1){
//        head.next = l1;
//    }
//    if(l2){
//        head.next = l2;
//    }
//    return dummy.next;
//};

var mergeTwoLists = function(l1, l2) {
   if(!l1) return l2;
   if(!l2) return l1;
   if(l1.val < l2.val){
       l1.next = mergeTwoLists(l1.next, l2);
       return l1;
   }else{
       l2.next = mergeTwoLists(l1, l2.next);
       return l2;
   }
};
