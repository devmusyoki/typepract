type Combinable = number | string
type ConversionDescriptor = 'as-number' | 'as-text'

function combine
(input1: Combinable,
input2: Combinable,
resultConversation: ConversionDescriptor
){
    let result;

    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversation === 'as-text') {
     
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine('Max', 'Anna')