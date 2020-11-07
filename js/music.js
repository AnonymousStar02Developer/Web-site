function getSelection(){
    var song = document.getElementById("song");
    var opt;
    for(var x = 0;x < song.options.length;x++){
        opt=song.options[x];
        if(opt.selected == true){
            break;
        }
    }
    return opt.value;
}

function play(){
    var audio = document.getElementById('musicplay');
    var source = document.getElementById('musicsource')
    var selection = getSelection();
    switch(selection){
        case "Distance":
            source.src="../mp3/Distance.mp3";
            break;
        case "I_Believe":
            source.src="../mp3/I_Believe.mp3";
            break;
        case "Human":
            source.src="../mp3/Human.mp3";
            break;
        case "Be_My_Forever":
            source.src="../mp3/Be_My_Forever.mp3";
            break;
        case "Sea_Of_Lovers":
            source.src="../mp3/Sea_Of_Lovers.mp3";
            break;
        case "Burning_Gold":
            source.src="../mp3/Burning_Gold.mp3";
            break;
        case "Tragedy":
            source.src="../mp3/Tragedy.mp3";
            break;
        case "Backwards":
            source.src="../mp3/Backwards.mp3";
            break;
        case "A_Thousand_Years":
            source.src="../mp3/A_Thousand_Years.mp3";
            break;
        case "The_Words":
            source.src="../mp3/The_Words.mp3";
            break;
        case "Jar_Of_Hearts":
            source.src="../mp3/Jar_Of_Hearts.mp3";
            break;
        case "Arms":
            source.src="../mp3/Arms.mp3";
            break;
        case "Black_And_Blue":
            source.src="../mp3/Black_And_Blue.mp3";
            break;
        case "Something_About_December":
            source.src="../mp3/Something_About_December.mp3";
            break;
    }
    audio.load();
    audio.play();
}

function pause(){
    document.getElementById('musicplay').pause();
}
