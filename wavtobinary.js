const fs = require('fs')
const buffer = require('buffer')

// 111f427c-3791-468f-b709-fcef7660fff9
// 20fcf659-4967-478e-8d7b-325bbd2c1bd4

//https://westus.dev.cognitive.microsoft.com/docs/services/563309b6778daf02acc0a508/operations/5645c211e597ed22ec38f431/console
//https://westus.dev.cognitive.microsoft.com/docs/services/563309b6778daf02acc0a508/operations/5645c211e597ed22ec38f431/console

// https://stackoverflow.com/questions/42123633/access-denied-due-to-invalid-subscription-key-face-api

/*

Endpoint: https://westus.api.cognitive.microsoft.com/spid/v1.0

https://azure.microsoft.com/en-us/try/cognitive-services/my-apis/?apiSlug=speaker-recognition&country=UnitedStates&allowContact=true&fromLogin=true

Key 1: fe72ceae14874a69b6c7a15927441830

Key 2: 09097ea320e34587bbf0d7864fd97706

*/

fs.readFile('microsoftbramcopy.wav', (err, data) => {
if (err) throw err
console.log(data)
const newBuf = buffer.transcode(Buffer.from('€'), 'utf8', 'binary')
console.log(newBuf)
})