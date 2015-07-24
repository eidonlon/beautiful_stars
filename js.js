 function draw(obj,x,y,r,color,r1,r2){

       var str=obj.createRadialGradient(x,y,r1,x,y,r2);
      
        

      
       if(color){

       	   str.addColorStop(0,"white");
           str.addColorStop(1,color); 
        }
        else{

        	 str.addColorStop(0,"rgba(255,255,255,1)");
             str.addColorStop(1,"rgba(55,51,237,0.5)"); 
        	
        }

         obj.beginPath();
       obj.fillStyle=str;
       obj.arc(x,y,r,0,Math.PI*2); 
       obj.fill();  
       obj.closePath();

  }


  function drawLine(obj,x1,y1,x2,y2,col,wid){
      

      obj.lineWidth = wid; 
      obj.beginPath();
      if(col){
      	 obj.strokeStyle = col;
      }
      else{
      	obj.strokeStyle = "rgba(55,51,237,0.4)";
      }
     
      obj.moveTo(x1, y1);
      obj.lineTo(x2, y2);
      obj.stroke();
}


function color(){
   return '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).slice(-6);
}


function makeStar(){
	var c=document.getElementById("canvas");

	var ctx=c.getContext("2d");
    
    var a=[315,400,460,545,580,690,670];  //北斗七星的x坐标
    var b=[400,325,310,300,343,310,235];   //北斗七星的Y坐标
    var j=0;
    var i=0;
    var h=0;
    var m=0;
    var n=0;
    var count=0;
    var flag=1;
    var p=0;
   
    var c=[590,679,690,820,845,905,1000,825,835,840,970];
    var d=[420,615,460,500,340,365,420,275,215,165,240];


    var e=[580,590,679,590,690,820,690,590,845,905,1000,905,845,825,835,840,970,835,670,545];
    var f=[343,420,615,420,460,500,460,420,340,365,420,365,340,275,215,165,240,215,235,300];
   
    
    var g=[970,940,945,920,900,870,900,900,870/*耳朵*/,825,825,818,790,788,805,782,760,710,610,540,525/*尾巴*/,460,390,340,315,460,529,520,540,580,570,570,555,580,640,680,680,
           590,620,660,675,590,555,530,555,590,675,690,700,720,820,830,730,730,710,650,710,730,780,760,800,900,980,1000,920,980,980,900,895,885,870,870,950,900,970];
    var k=[240,190,173,148,135,128,112,135,128/*耳朵*/,135,155,130,120,148,165,157,157,188,245,288,300/*尾巴*/,300,315,335,400,335,325,390,460,502,540,570,590,627,640,630,610,
           580,550,520,480,470,430,370,430,470,480,490,520,530,500,470,470,420,398,380,398,420,405,370,410,395,430,400,360,390,360,335,355,320,305,270,270,245,240];

   var tout=setInterval(function(){

         var l=Math.ceil(Math.random()*1250); 
         var o=Math.ceil(Math.random()*700);
         count++;

         if(flag==1){   
         	 draw(ctx,l,o,1.5,color(),1,2);
         	 flag=2;
         }else if(flag==2){
         	  draw(ctx,l,o,1.5,null,1,1);
         	  flag=3;
         }else if(flag==3){
         	   draw(ctx,l,o,1,color(),1,1);
         	   flag=4;
         }

         else if(flag==4){
         	   draw(ctx,l,o,2,color(),0.5,2.5);
         	   flag=1;
         }
        
         if(count>=800){
         	clearInterval(tout);
         }
       
   },10);



var cont=setTimeout(function(){

     var g=ctx.createRadialGradient(700,400,150,700,400,1200);

		 g.addColorStop(0,"black");
		 g.addColorStop(1,"white");

	     ctx.beginPath();
	     ctx.fillStyle=g;
	     ctx.arc(700,400,300,0,Math.PI*2); 
	     ctx.fill();  
      ctx.closePath();

 },8000);



var start=setTimeout(function(){   
    
    var timer=setInterval(function(){   //画七颗星
    	draw(ctx,a[j],b[j],8,null,3,8);
    	j++;
    	if(j>6){
    		clearInterval(timer);
    	
    	}
    },900);
   

    var time=setInterval(function(){   //画七条线
    	 drawLine(ctx,a[i],b[i],a[i+1],b[i+1],null,1);
    	i++;
    	if(i>5){
    		clearInterval(time);
    		
    	}

    },1100);
     

},9000);

 
var start=setTimeout(function(){

	var xiong=setInterval(function(){
	    draw(ctx,c[p],d[p],4,color(),2,4);
	    p++;
	    if(p>10){
	    	clearInterval(xiong);
	    }

	},700);


	  var end=setInterval(function(){  
	    	 drawLine(ctx,e[h],f[h],e[h+1],f[h+1],"skyblue",1);
	    	h++;
	    	if(h>19){
	    		clearInterval(end);
	    	}

	    },800);

},17000);



var start=setTimeout(function(){
    
    var timer=setInterval(function(){   
    	draw(ctx,g[m],k[m],3,color(),2,4);
    	m++;
    	if(m>74){
    		clearInterval(timer);
    		console.log("ok1");
    	}
    },200);
   

    var time=setInterval(function(){   
    	 drawLine(ctx,g[n],k[n],g[n+1],k[n+1],"rgba(255,255,255,0.8)",1);
    	n++;
    	if(n>74){
    		clearInterval(time);
    		console.log("ok");
    	}

    },220);


 },34000);

  
    
}

 makeStar();