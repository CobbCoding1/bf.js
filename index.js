let program = "++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.";

let data = [0];
let dp = 0;
let ip = 0;

let brackets = [[0, 0]];

let f_stack = [];
let b_stack = [];

let output = "";

/*
for(i = 0; i < program.length; i++) {
    if(program[ip] == '[') {
        brackets.push([ip, 0]);
    } else if(program[ip] = ']') {
        brackets.push(brackets)
    }
}
*/

function submit(e) {
    program = document.getElementById("code").value;
    data.fill(0);
    dp = 0;
    ip = 0;
    output = "";
    interpret();
    document.getElementById("out").textContent = "Output: " + output;
}

function interpret() {
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
                output += String.fromCharCode(data[dp]);
                break;        
            case ',':
                console.assert(false, "todo");
                break;        
            case '[':
                f_stack.push(ip);
                if(data[dp] == 0) {
                    if(b_stack.length == 0) {
                        console.log("error");
                        throw new Error("rip");                                                                        
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
                        throw new Error("rip");                                                        
                    }
                    ip = f_stack[f_stack.length-1];
                }  else {
                    if(f_stack.length > 0) f_stack.pop();
                }           
                break;        
        }
    }
}    