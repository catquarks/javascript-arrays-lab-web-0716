const app = "I don't do much."

function destructivelyAppendKitten (new_kitty){
	kittens.push(new_kitty)
	return kittens
}

function destructivelyPrependKitten (new_kitty){
	kittens.unshift(new_kitty)
	return kittens
}

function destructivelyRemoveLastKitten(){
	kittens.pop()
	return kittens
}

function destructivelyRemoveFirstKitten(){
	kittens.shift()
	return kittens
}

function appendKitten(new_kitty){
	return [...kittens, new_kitty]
}

function prependKitten(new_kitty){
	return [new_kitty, ...kittens]
}

function removeLastKitten(){
	return kittens.slice(0, -1)

}

function removeFirstKitten(){
	return kittens.slice(1, kittens.length)
}