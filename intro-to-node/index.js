//jshint esversion:6

var superhero = require("superheroes")
var mysuperheroName = superhero.random()

console.log(mysuperheroName)

var vilao = require("supervillains")
var vilaoName = vilao.random()
console.log("nome vilão: " + vilaoName);