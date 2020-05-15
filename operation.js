var equal = false;
var lastResult;

function add(value){
    if(equal){
        if(value == '+' || value == '-' || value == '*' || value == '/'){
            document.getElementById('expression').value = 'Ans'+value;
        }else{
            document.getElementById('expression').value = value;
        }
        equal = false;
    }else if(document.getElementById('expression').value == '0' && value == '0'){
        return;
    }else{
        document.getElementById('expression').value += value;
    }
    document.getElementById('expression').focus();
}

function equals(){
    var exp = new String(document.getElementById('expression').value);

    if(exp.endsWith("+") || exp.endsWith("-") || exp.endsWith("*") || exp.endsWith("/") || exp.endsWith(".")){
        document.getElementById('expression').value = "Errore di sintassi";
        equal = true;
        return;
    }
    if(exp.includes('Ans')){
        lastResult = eval(exp.toString().replace('Ans',new String(lastResult).toString()));
    }else{
        lastResult = eval(exp.toString());
    }
    document.getElementById('expression').value = lastResult;
    equal = true;
}

function remove(){
    document.getElementById('expression').value = "";
}

function removeLast(){
    if(equal){
        remove();
    }
    var exp = new String(document.getElementById('expression').value);
    document.getElementById('expression').value = exp.substring(0,exp.length-1);
}