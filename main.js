canvas = new fabric.Canvas("mc")


px = 10
py = 10

bw = 30
bh = 30

pla_obj = ""
blo = ""

function xyz() {

    fabric.Image.fromURL("player.png" , function(img){
        pla_obj = img
        pla_obj.scaleToWidth(150)
        pla_obj.scaleToHeight(140)

        pla_obj.set({
            top : py,
            left : px 
        });

         canvas.add(pla_obj)



    }
    )
}



function abc(oi) {

    fabric.Image.fromURL( oi , function(img){
         blo = img
        blo.scaleToWidth(bw)
        blo.scaleToHeight(bh)
        
        blo.set({
            top : py,
            left : px

        });

         canvas.add(blo)



    }
    )
}


window.addEventListener("keydown" , mkd)

function mkd (e){
    keypress = e.keyCode
     

    if(e.shiftKey == true  && keypress == "80"){
     
        bw = bw + 10
        bh = bh + 10
         document.getElementById("ch").innerHTML = bh;
         document.getElementById("cw").innerHTML = bw;
        
    }



if(keypress == "38"){
    up();
}

if(keypress == "37"){
    left();
}

if(keypress == "39"){
    right();
}

if(keypress == "40"){
    down();
}

if(keypress == "67"){
    abc("cloud.jpg")
    console.log("c")
}

if(keypress == "68"){
    abc("dark_green.jpg")
    console.log("d")
}

if(keypress == "76"){
    abc("light_green.png")
    console.log("l")
} 

if(keypress == "82"){
    abc("roof.jpg")
    console.log("r")
}

if(keypress == "84"){
    abc("trunk.jpg")
    console.log("t")
}

if(keypress == "85"){
    abc("unique.png")
    console.log("u")
}

if(keypress == "87"){
    abc("wall.jpg")
    console.log("w")
}

if(keypress == "89"){
    abc("yellow_wall.png")
    console.log("y")
}



}


function up(){
if(py > 0){
    py = py - bh
    canvas.remove(pla_obj) 
    xyz();
}}

function down(){
    if(py <=450){
        py = py + bh
        canvas.remove(pla_obj) 
        xyz();
    }}

    function left(){
        if(px >=0){
            px = px - bw
            canvas.remove(pla_obj) 
            xyz();
        }}
        
        function right(){
            if(px <= 850){
                px = px + bw
                canvas.remove(pla_obj) 
                xyz();
            }}
                










