const bitcoin = require('./src')

var btcPrivKey = "cNfkLSR4gPmkLfVmzykK8jeV8cGqu65ULkG7N9jB1eTGa8VfMA9g" // testnet private key, do not expose real keys
var zecPrivKey = "cQhJa7Px5XUqgcg9GPVWWJZ17Gny7ZoNUgsQTz47aDxyr5JxthFn" // testnet private key, do not expose real keys

console.log("new random key")
var keyPair = bitcoin.ECPair.makeRandom()
console.log(keyPair.toWIF())
console.log(keyPair.getAddress())

console.log("imported from WIF")

var testnet = bitcoin.networks.testnet
var zcashnet = bitcoin.networks.zcash

console.log("btc testnet addy")
keyPair = bitcoin.ECPair.fromWIF(btcPrivKey, testnet)
var address = keyPair.getAddress()
console.log(address)

console.log("zec testnet addy")
keyPair = bitcoin.ECPair.fromWIF(zecPrivKey, zcashnet)
var address = keyPair.getAddress()
console.log(address)