## Description
```bash
Child proccess Nodejs
```
## Prerequisites

```bash

The Child Processes Module
We can easily spin a child process using Node’s child_process module and those child processes can easily communicate with each other with a messaging system.

The child_process module enables us to access Operating System functionalities by running any system command inside a, well, child process.

We can control that child process input stream, and listen to its output stream. We can also control the arguments to be passed to the underlying OS command, and we can do whatever we want with that command’s output. We can, for example, pipe the output of one command as the input to another (just like we do in Linux) as all inputs and outputs of these commands can be presented to us using Node.js streams.

```

## Comand Line Arguments 

```bash
To access the command_line input you can use the built-in global process module or inquirer which is an external module

```


## Note
```bash
Note: Scripts in Windows such as .bat and .cmd files cannot be run with execFile() because the function does not create a shell when running the file. On Unix, Linux, and macOS, executable scripts do not always need a shell to run. However, a Windows machines needs a shell to execute scripts. To execute script files on Windows, use exec(), since it creates a new shell. Alternatively, you can use spawn(), which you’ll use later in this Step.



```



## Note: Spawn Error ENOENT
```bash
the reason why you might come across this error is because maybe the command you try to spawn dont exitin your system

```

## Developer
```bash
ASOTIBE PRINCEWILL ONYEMAECHI
princewillasotibe123@gmail.com
```


