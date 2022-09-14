function random_bg_color(){
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);

    var final="rgb(" + r + "," + g + "," + b + ")";
    console.log(final);
    document.body.style.backgroundColor=final;
}

random_bg_color()
