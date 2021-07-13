//Palindrome

var wordInput = prompt("Inserisci una parola");

var result = document.getElementById("result");

function palindromeCheck(string){

    var reverseWord = "";

    for(i = string.length - 1; i >= 0; i--){
        reverseWord += string.charAt(i);
    }

    if (reverseWord === string){
        return true;
    }else{
        return false;
    };

}

if(palindromeCheck(wordInput)){
    result.innerHTML = "";
}else{
    result.innerHTML = "non";
}

//EvenOdd

var numbInput = parseInt(prompt("Inserisci un numero da 1 a 5"));

var typeInput = prompt("Pari o Dispari?");


if (typeInput.toLowerCase === "pari"){
    var isEven = true;
}else if (typeInput.toLowerCase === "dispari"){
    var isEven = false;
}else{
    location.reload;
}

function evenOdd(numb, bool){
    var cpuNumb = Math.floor(Math.random() *5) + 1;
    var evenOddResult = "";
    if (bool){
        if((numb + cpuNumb) % 2 === 0){
            evenOddResult = "Vince il Player";
        }else{
            evenOddResult = "Vince il CPU";
        }
    }else{
        if((numb + cpuNumb) % 2 === 0){
            evenOddResult = "vince il CPU";
        }else{
            evenOddResult = "Vince il Player"
        }
    }
    return evenOddResult;
}

console.log(evenOdd(numbInput, isEven));
