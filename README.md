# LoggingLibrary

Usage:
```js
log("message", "unsafe message with user input"(, function));
warn("message", "unsafe message with user input");
error("message", "unsafe message with user input");
log(<? extends Message>);
warn(<? extends Message>);
error(<? extends Message>);
```

Call a in-log function (impossible in "unsafe message with user input"):
```
${functionname(params)}
```
Note: number-only inputs will be parsed automatically
you don't need quotes on strings, true/false will be automatically parsed.

Adding a in-log function:
```js
addLogFunction("functionname", function);
```

Message class:
getMessage should get the message, with the in-log function calls
getUnsafeMessage should get the message with the user input
