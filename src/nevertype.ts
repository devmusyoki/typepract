let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Lewis';
if (typeof userInput === 'string'){
  userName  = userInput;
}

function generateError(message: string, code: number): never{
    throw {message: message, errorcode: code};
}

generateError('An error occured!', 500);
