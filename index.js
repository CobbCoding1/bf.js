let program = "++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.";

let data = [0];
let dp = 0;
let ip = 0;

let brackets = [[0, 0]];

let f_stack = [];
let b_stack = [];

/*
for(i = 0; i < program.length; i++) {
    if(program[ip] == '[') {
        brackets.push([ip, 0]);
    } else if(program[ip] = ']') {
        brackets.push(brackets)
    }
}
*/

for(ip = 0; ip < program.length; ip++) {
    switch(program[ip]) {
        case '<':
            dp--;
            break;
        case '>':
            data.push(0)
            dp++;
            break;
        case '+':
            data[dp]++;
            break;
        case '-':
            data[dp]--;
            break;
        case '.':
            console.log(String.fromCharCode(data[dp]));
            break;        
        case ',':
            console.assert(false, "todo");
            break;        
        case '[':
            f_stack.push(ip);
            if(data[dp] == 0) {
                if(b_stack.length == 0) {
                    console.log("error");
                    throw new Error("ded");                                                                        
                }
                ip = b_stack[b_stack.length-1];
            } else {
                if(b_stack.length > 0) b_stack.pop();
            }
            break;        
        case ']':
            b_stack.push(ip);
            if(data[dp] != 0) {
                if(f_stack.length == 0) {
                    console.log("error");
                    throw new Error("ded");                                                        
                }
                ip = f_stack[f_stack.length-1];
            }  else {
                if(f_stack.length > 0) f_stack.pop();
            }           
            break;        
    }
}
    