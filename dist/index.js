"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var readline_sync_1 = __importDefault(require("readline-sync"));
var inputQueue = [];
/**
 * Read full line
 *
 * @param {string} promptText question text
 *
 * @return {string}
 */
function nextLine(promptText) {
    if (promptText === void 0) { promptText = ''; }
    var input;
    while (true) {
        input = readline_sync_1["default"].question(promptText);
        if (input === '\u0003') {
            process.exit();
        }
        else if (input.trim() !== '') {
            return input.trim();
        }
    }
}
exports.nextLine = nextLine;
/**
 * Alias for nextLine(promptText)
 *
 * @param {string} promptText question text
 *
 * @return {string}
 */
function prompt(promptText) {
    return nextLine(promptText);
}
exports.prompt = prompt;
/**
 * Read next word from input line
 *
 * @return {string}
 */
function next() {
    if (inputQueue.length !== 0) {
        return inputQueue.splice(0, 1)[0];
    }
    var input = nextLine();
    var strings = input.split(/\s+/);
    for (var i = 1; i < strings.length; i++) {
        inputQueue.push(strings[i]);
    }
    return strings[0];
}
exports.next = next;
/**
 * Read next Integer number from input line
 *
 * @param {number} radix number radix
 *
 * @throws {Error} if failed to convert to Integer
 *
 * @return {number}
 */
function nextInt(radix) {
    if (radix === void 0) { radix = 10; }
    var num = parseInt(next(), radix);
    if (isNaN(num)) {
        throw new Error('Expected Integer');
    }
    return num;
}
exports.nextInt = nextInt;
/**
 * Read next Float number from input line
 *
 * @throws {Error} if failed to convert to Float
 *
 * @return {number}
 */
function nextFloat() {
    var num = parseFloat(next());
    if (isNaN(num)) {
        throw new Error('Expected Float');
    }
    return num;
}
exports.nextFloat = nextFloat;
