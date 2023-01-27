//longest common prefix
// let longestCommonPrefix = function (strs) 
 //that was 

//approch with function
function longestCommonPrefix(strs){
    if(strs.length == 0) return "";
    let prefix = strs[0];
    for(let i = 1; i < strs.length; i++){
        while(strs[i].indexOf(prefix) != 0){
            prefix = prefix.substring(0, prefix.length - 1);
            if(prefix.length == 0) return "";
        }
    }
    return prefix;
}

// another approch*

var longestCommonPrefix = function(strs) {
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== strs[0][i]) {
                return strs[0].slice(0, i);
            }
        }
    }
    return strs[0];
};