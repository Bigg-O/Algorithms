// // First Solution
// var isValid = function(str) {
//     if (str.length % 2 === 1) {
//         return false
//     }

//     const opens = ['(', '[', '{']
//     const arr = []
//     let open = 0

//     for (let i = 0; i < str.length; i++) {
//         if (opens.includes(str[i])) {
//             arr.push(str[i])
//             open++
//         } else {
//             if (arr[arr.length - 1] === reverse(str[i])) {
//                 arr.pop()
//                 open--
//             } else {
//                 return false
//             }
//         }
//     }

//     return !open
// };

// Second Solution
var isValid = function (str) {
    if (str.length % 2 === 1) {
        return false
    }

    const stack = []
    const opens = new Set(['(', '[', '{'])
    const closes = new Set([')', ']', '}'])

    for (const char of str) {
        if (opens.has(char)) {
            stack.push(char)
        } else if (closes.has(char)) {
            if (stack[stack.length - 1] === reverse(char)) {
                stack.pop()
            } else {
                return false
            }
        } else {
            return false
        }
    }

    return !stack.length
}

function reverse(str) {
    if (str === ')') return '('
    if (str === ']') return '['
    if (str === '}') return '{'
}