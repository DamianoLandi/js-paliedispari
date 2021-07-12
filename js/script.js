var wordInput = prompt("Inserisci una parola");

var result = document.getElementById("result");

function palindromeCheck(string){

    var reverseWord = "";

    for(i = string.length; i >= 0; i--){
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