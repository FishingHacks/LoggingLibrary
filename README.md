# LoggingLibrary

Usage:
```js
const logger = getLogger("<your-prefix>");
logger.log("message", "unsafe message with user input"(, function));
logger.warn("message", "unsafe message with user input");
logger.error("message", "unsafe message with user input");
logger.log(<? extends Message>);
logger.warn(<? extends Message>);
logger.error(<? extends Message>);
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
