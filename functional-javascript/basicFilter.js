function getshortMessages(inputArray){
	let shortMessages = inputArray.filter(element => element.message.length < 50);
	shortMessages = shortMessages.map(messageObject => messageObject.message);
	return shortMessages;
}

module.exports = getshortMessages;

//filter
// Appending new words
// words = ['spray', 'limit', 'exuberant', 'destruction','elite', 'present']
// const appendedWords = words.filter( (word, index, arr) => {
//   arr.push('new')
//   return word.length < 6
// })