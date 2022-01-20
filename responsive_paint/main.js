
var last_x, last_y;
var width = screen.width;
new_width = screen.width - 70;
new_height = screen.height -300;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width = 2;

    if(width < 992 ){
        document.getElementById("myCanvas").width = new_width;
        document.getElementById("myCanvas").height = new_height;
        document.body.style.overflow = "hidden";
    }

    canvas.addEventListener("touchstart", my_touchstart);

    function my_touchstart(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width = document.getElementById("width").value;
        //Addictonal Activity ends

         last_x = e.touches[0].clientX - canvas.offsetLeft;
         last_y = e.touches[0].clientY - canvas.offsetTop;
    }

    

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_x = e.touches[0].clientX - canvas.offsetLeft;
         current_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_x + "y = " + last_y);
        ctx.moveTo(last_x, last_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_x + "y = " + current_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();
        

        last_x = current_x; 
        last_y = current_y;
    }
    function clearSpace(){
        ctx.clearRect(0,0, ctx.canvas.width,ctx.canvas.height);
    }
