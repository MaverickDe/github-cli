
let { spawn, exec, fork, execFile} = require("child_process")
// // const { options } = require("pdfkit")





let arg =process.argv.slice(3)
let command_ = process.argv[2]
// console.log(process)

let arg_ = arg.reduce((total, acc,index) => {
  if (acc[0] == "-") {
    console.log(index)

    total[acc] = arg[index+1]
  }
  return total
},{})

console.log(arg,command_,arg_)
console.log("kdkd"[0])


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
    origin: "",
    branch: "main",
    commit: "first commit",
  };

  option.origin = arg_["-o"] || arg_["-origin"] || "";
  option.branch = arg_["-b"] || arg_["-branch"] || "main";
  option.commit = arg_["-c"] || arg_["-commit"] || "first commit";
  option.add = arg_["-d"] || arg_["-add"] || ".";

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


this.child_.on("error", (e) => {
  console.log(`error at ${e}`)
})
      
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
if (!option.origin || option.origin == "") {
  console.log("input origin")
  return
  }
  
  console.log(option ,"nvnvnvn")
// git push -u origin main
 
  let arr = [
  
    { command: "git", arg: ["add", option.add], message: "adding files" },
    {
      command: "git",
      arg: ["commit", "-m", option.commit.replaceAll(" ","_")],
      message: "commiting files",
    },
    {
      command: "git",
      arg: ["branch", "-M", option.branch],
      message: "git branching",
    },
    {
      command: "git",
      arg: ["remote", "add", "origin", option.origin],
      message: "adding origin",
    },
    {
      command: "git",
      arg: ["push", "-u", "origin", option.branch],
      message: "pushing to github",
    },
    // { command: "git", arg: ["commit", "-m", command.commit] },
  ];
  // let init = new Git({
  //   command: "git",
  //   arg: ["commit", "-m", option.commit],
  //   message: "commiting files",
  // });
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
       if (code == 0 ) {
       
        //  console.log(arr)
         run(arr);
         
        } else {
          arr.splice(0, 0, {
            command:"git",arg:["init"],message:"processing"
          })
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
            -branch | -b : specify the branch to upload 
            -add    | -a : add a specific folder or all folder, default(".")
            -commit | -c : commit message
            -origin | -o : specify git hub repository code

         
      `
    )
    break
    ;
    
}








// // SPAWN
// // spawn a command in a  process seperatetly
// // The spawn() function runs a command in a process. This function returns data via the stream API. Therefore, to get the output of the child process, we need to listen for stream events.

// // Streams in Node.js are instances of event emitters. If you would like to learn more about listening for events and the foundations of interacting with streams, you can read our guide on Using Event Emitters in Node.js.

// let args = []
// let options={}
// let child_ = spawn('dir',args,options)


// // args are the arguments the commaned needs in order for it to execute ,if omitted it default to an empty array

// // options take different key value pairs  to give more clarity on how you want the command executin
// g
// // you can pass an env to create a virtual evnviroment for the child process where it canget its own env varible
// // omitting it default to process.env that is the parent env

// // since the child process stdout is a readable Stream, we can read the data and print it in the parent console
// // the spawn function does not create a shell to execute its command , hence shell scripts cant be excutend using spawn instead use the exec method

// // to let the child process run independently you can pass in {detached :true} to options
// child_.stdout.on("data", (data) => {
//   console.log(data)
// })


// process.stdin.pipe(child_.stdin)

// child_.on("exit", (code, sig) => {
//   console.log(`child process exited with code ${code} and signal ${sig}`)
// })


// // we can make the child process to inhertit the parent stdio by passing this option the Child
//                           // {stdio : inherit}

// child_.on("error", (e) => {
//   console.log(`error at ${e}`)
// })




// // #EXEC


// // the exec function createa a shell whenexceuting commands ,  hence it has the ability to run sheel script
// // in aa much as this is good news , a developer should be careful when accepting users argument as a user can pass in malicious script example {env:PASSWORD:12345}
// child2 = exec("gencryp genid", (err, stdout, stderr) => {
//   if (err) {
//     console.error(err)
//   }
//   if (stdout) {
//     console.error(stdout)
//   }
//   if (stderr) {
  
//     console.log(stderr)
//   }
  
// })




// // we can make the child process to inhertit the parent stdio by passing this option to  the Child process
//                           // {stdio : inherit}

// child2.on("error", (e) => {
//   console.log(`eroor at ${e}`)
// })



// // #EXECFILE

// // if you need to execute a file without using a shell then the execfile function can be useful
// // it works exactly like the exec  function
// // The key difference between the execFile() and exec() functions is that the first argument of execFile() is now a path to an executable file instead of a command


// // #FORK

// // The fork function is a variation of the spawn function for spawning node processes. The biggest difference between spawn and fork is that a communication channel is established to the child process when using fork, so we can use the send function on the forked process along with the global process object itself to exchange messages between the parent and forked processes. We do this through the EventEmitter module interface.const { fork } = require('child_process');

// const forked = fork('index.js');

// forked.on('message', (msg) => {
//   console.log('Message from child', msg);
// });

// forked.send({ hello: 'world' });




// // Note: Scripts in Windows such as .bat and .cmd files cannot be run with execFile() because the function does not create a shell when running the file. On Unix, Linux, and macOS, executable scripts do not always need a shell to run. However, a Windows machines needs a shell to execute scripts. To execute script files on Windows, use exec(), since it creates a new shell. Alternatively, you can use spawn(), which you’ll use later in this Step.



// // It’s often a good idea to choose spawn() over exec() or execFile() when the command you want to run can output a large amount of data. With a buffer, as used by exec() and execFile(), all the processed data is stored in the computer’s memory. For large amounts of data, this can degrade system performance. With a stream, the data is processed and transferred in small chunks. Therefore, you can process a large amount of data without using too much memory at any one time.