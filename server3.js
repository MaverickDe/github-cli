
let { spawn, exec, fork, execFile} = require("child_process")
// // const { options } = require("pdfkit")





let arg =process.argv.slice(3)
let command_ = process.argv[2]
// console.log(process)

let arg_ = arg.reduce((total, acc,index) => {
  if (acc[0] == "-") {
 
    if (acc == "push" || acc == "-p") {
      total[acc] = true

      
    }
    else {
      
      total[acc] = arg[index+1]
    }
  }
  return total
},{})



// total add and commit

// first add origin
// fitst we add
// then we commit
// then we change branch to user branch
// then we push to origin



let command = [
  "github",
  "--help"
  
  ]


let github = () => {
  let option = {
   
  };

  option.origin = arg_["-o"] || arg_["-origin"] || null
  option.branch = arg_["-b"] || arg_["-branch"] || "master"
  option.commit = arg_["-c"] || arg_["-commit"] || null;
  option.add = arg_["-a"] || arg_["-add"] || null
  option.push = arg_["-p"] || arg_["-push"] || null;

option.branch=="main" || "master"?null :option.branch="main"
  class Git {
    constructor(command) {
      this.command = command
     
    }


    run() {
      
     
      
      this.child_ = spawn(this.command.command, this.command.arg, {
        shell: true,
        encoding: "utf8",
        // signal:SIGTERM
      })
console.log(this.command.message+"....")
this.child_.on("exit", (code, sig) => {
 
  console.log(`process exited with code ${code} and signal ${sig}`)
})
      this.child_.stdout.on("data", (data) => {
  console.log(data.toString("ascii"))
})
      this.child_.stderr.on("data", (data) => {
  console.error(data.toString("ascii"))
})


process.stdin.pipe(this.child_.stdin)

      
    }
  }

  let run = (command) => {
    let init = new Git(command[0]);
   
    init.run();
  
     init.child_.on("exit", (code, sig) => {
      
       if (code == 0 && command.length>=2) {
       
       run(command.slice(1))
       } else {
         console.log("process finished")
       }
     });
  
  }

//   git remote add origin https://github.com/MaverickDe/github-cli.git
// git branch -M main

  
  console.log(option ,"nvnvnvn")
// git push -u origin main
 
  let arr = [
  
   
  
   
   
   
  ];


  if (option.add) {
    arr.push({
      command: "git",
      arg: ["add", option.add],
      message: "adding files",
    });
  }

  if (option.commit) {
    arr.push({
      command: "git",
      arg: ["commit", "-m", option.commit.replaceAll(" ", "_")],
      message: "commiting files",
    });
  }
  if (option.branch) {
    arr.push({
      command: "git",
      arg: ["branch", "-M", option.branch],
      message: "git branching",
    });
  }
  if (option.push) {
    arr.push({
      command: "git",
      arg: ["push", "-u", "origin", option.branch],
      message: "pushing to github",
    });
  }
  
  let init = new Git(
    {
      command: "git",
      arg: ["status"],
      message: "processing",
    },
  );
  init.run();
  


   
     init.child_.on("exit", (code, sig) => {
      console.log("status code  " + code)
       if (code == 0) {
         
       
       
        //  console.log(arr)
         run(arr);
         
        } else {
          arr.splice(0, 0, {
            command: "git", arg: ["init"], message: "processing"
            
          })
          arr.splice(arr.length - 2, 0, {
            command: "git",
            arg: ["remote", "add", "origin", option.origin],
            message: "adding origin",
          });
        //  console.log(arr)
          run(arr);
       }  })

 

 
  


}


// origin https://github.com/MaverickDe/github-cli.git

switch (command_) {
  
  case "github":
    github()
    break
    ;
  case "help":
    console.log(
      `
      1. First , create a new empty  github repository in github
      2. Login into your github account in your cli
      3. Then type the command in the command interface "github ...options"

      follow the example below
            /* github -origin http/mave/gitrepo -branch main -add . -commit "fist commit"  */

            or

            /* github -o http/mave/gitrepo -b main -a . -c "fist commit"  */


      command: github
         options :
            -branch | -b : specify the branch to upload ,default(master)
            -add    | -a : add a specific folder or all folder, default(".")
            -commit | -c : commit message
            -origin | -o : specify git hub repository code
            -push   | -p : specify to push to origin or not ,if ommited the code wont be push to gihub
 

         
      `
    );
    break
    ;
    
}






