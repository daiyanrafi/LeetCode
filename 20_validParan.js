//bruteforce method (loop) with stack dsa. stack has 2 implementation 1)array 2)linklist
//array
//(bruteforce method- loop)
var isValid = function(s) {
    let stack = [];

    for(let i=0; i<s.length;i++){
        let top = s[s.length - 1]

        if(s[i]= '(' || s[i] == '{' || s[i] == '['){
            stack.push(s[i])
        }else if(s[i] == ')' && top == '(' || s[i] == '}' && top == '{' ||[i] == ']' && top == '['){ s
            stack.pop() 
        }else{
            return false
        } 
      

/////// (hash table method)
function isValid(s) {
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]);
        } else {
            let last = stack.pop();
            if (s[i] !== map[last]) {
                return false;
            }
        }
    }
    if (stack.length !== 0) {
        return false;
    }
    return true;
}