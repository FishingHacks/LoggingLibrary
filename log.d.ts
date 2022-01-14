class Message {
  constructor(message: string, usermessage: string);
  getMessage(): string;
  getUnsafeMessage(): string;
}

class Logger {
  constructor(name: string);
  log(message: string | Message, userinput: string = "", func: (...msgs) => void = console.log): void;
  error(msg: string | Message, ui: string = "", ...objects: Array<object>=[]): void;
  warn(msg: string | Message, ui: string = "", ...objects: Array<object>=[]): void;
}

function getLogger(pref: string): Logger;

function addLogFunction(name: string, func: (...args) => string);

function getMessageObject(msg: string, ui: string): Message;
class ArrayList<T> {
    constructor();
    append(el: T);
    clear();
    add(arr: ArrayList<T> | Array<T>);
    remove(_el: T);
    removeAt(_i: number);
    search(query: (item: T, i: number, list: ArrayList<T>) => boolean): ArrayList<T> | Array<T>;
    filter_(func: (el: T, i: number, arr: ArrayList<T>) => T): ArrayList<T> | Array<T>;
    random(count: number);
}

export default interface rt {
  Message: Message,
  logFunctions: {},
  addLogFunction: (name: string, func: (...args) => string),
  getMessageObject: (msg: string, ui: string)=>Message,
  Logger: Logger,
  getLogger: (pref: string)=>Logger
  ArrayList: ArrayList,
}