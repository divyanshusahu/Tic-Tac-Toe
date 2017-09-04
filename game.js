var p1weapon,p2weapon;
$(document).ready(function(){
  $("#w0").click(function(){
  	$("#cw").fadeOut("fast");
    p1weapon='0';
    p2weapon='X';
    $("#nop").fadeIn(1500);
    $("#p2").click(function(){
    	$("#nop").fadeOut("fast");
    	$("#ngb").fadeIn(1500);
    	$("#boardplayer2").fadeIn(1500);
    });
    $("#p1").click(function(){
    	$("#nop").fadeOut("fast");
    	$("#difficulty").fadeIn(1500);
    	$("#normal").click(function(){
    		$("#difficulty").fadeOut("fast");
    		$("#ngb").fadeIn(1500);
    		$("#boardplayer1normal").fadeIn(1500);
    	});
    	$("#hard").click(function(){
    		$("#difficulty").fadeOut("fast");
    		$("#ngb").fadeIn(1500);
    		$("#boardplayer1hard").fadeIn(1500);
    	});
    });
  });
  $("#wX").click(function(){
  	$("#cw").fadeOut("fast");
    p1weapon='X';
    p2weapon='0';
    $("#nop").fadeIn(1500);
    $("#p2").click(function(){
    	$("#nop").fadeOut("fast");
    	$("#ngb").fadeIn(1500);
    	$("#boardplayer2").fadeIn(1500);
    });
    $("#p1").click(function(){
    	$("#nop").fadeOut("fast");
    	$("#difficulty").fadeIn(1500);
    	$("#normal").click(function(){
    		$("#difficulty").fadeOut("fast");
    		$("#ngb").fadeIn(1500);
    		$("#boardplayer1normal").fadeIn(1500);
    	});
    	$("#hard").click(function(){
    		$("#difficulty").fadeOut("fast");
    		$("#ngb").fadeIn(1500);
    		$("#boardplayer1hard").fadeIn(1500);
    	});
    });
  });
});

var d;
function winner(a)
{
  if ((a.indexOf(1)>=0 && a.indexOf(2)>=0)&&(a.indexOf(3)>=0))
    return 1;
  if ((a.indexOf(4)>=0 && a.indexOf(5)>=0)&&(a.indexOf(6)>=0))
	return 1;
  if ((a.indexOf(7)>=0 && a.indexOf(8)>=0)&&(a.indexOf(9)>=0))
  	return 1;
  if ((a.indexOf(1)>=0 && a.indexOf(4)>=0)&&(a.indexOf(7)>=0))
  	return 1;
  if ((a.indexOf(2)>=0 && a.indexOf(5)>=0)&&(a.indexOf(8)>=0))
	return 1;	
  if ((a.indexOf(3)>=0 && a.indexOf(6)>=0)&&(a.indexOf(9)>=0))
  	return 1;
  if ((a.indexOf(1)>=0 && a.indexOf(5)>=0)&&(a.indexOf(9)>=0))
  	return 1;
  if ((a.indexOf(3)>=0 && a.indexOf(5)>=0)&&(a.indexOf(7)>=0))
  	return 1;
  return 0;
}
function turnis()
{
  return turn%2;
}
function p1wins()
{
  $(document).ready(function(){
    $("#resultp1").fadeIn("slow");
  });
}
function p2wins()
{
  $(document).ready(function(){
    $("#resultp2").fadeIn("slow");
  });
}
function compwins()
{
  $(document).ready(function(){
    $("#resultcomp").fadeIn("slow");
  });
}
function itsdraw()
{
  $(document).ready(function(){
    $("#resultdraw").fadeIn("slow");
  });
}
function draw(a,b)
{
  if ((a.length+b.length)===9)
    return 1;
  return 0;
}
function newgame()
{
  document.getElementById("b1").value="";
  document.getElementById("b2").value="";
  document.getElementById("b3").value="";
  document.getElementById("b4").value="";
  document.getElementById("b5").value="";
  document.getElementById("b6").value="";
  document.getElementById("b7").value="";
  document.getElementById("b8").value="";
  document.getElementById("b9").value="";
  document.getElementById("bn1").value="";
  document.getElementById("bn2").value="";
  document.getElementById("bn3").value="";
  document.getElementById("bn4").value="";
  document.getElementById("bn5").value="";
  document.getElementById("bn6").value="";
  document.getElementById("bn7").value="";
  document.getElementById("bn8").value="";
  document.getElementById("bn9").value="";
  document.getElementById("bh1").value="";
  document.getElementById("bh2").value="";
  document.getElementById("bh3").value="";
  document.getElementById("bh4").value="";
  document.getElementById("bh5").value="";
  document.getElementById("bh6").value="";
  document.getElementById("bh7").value="";
  document.getElementById("bh8").value="";
  document.getElementById("bh9").value="";
  p1=[];
  p2=[];
  turn=0;
  $(document).ready(function(){
    $("#resultdraw").fadeOut("fast");
  });
  $(document).ready(function(){
    $("#resultcomp").fadeOut("fast");
  });
  $(document).ready(function(){
    $("#resultp1").fadeOut("fast");
  });
  $(document).ready(function(){
    $("#resultp2").fadeOut("fast");
  });
  $("#b1").prop('disabled',false);
  $("#b2").prop('disabled',false);
  $("#b3").prop('disabled',false);
  $("#b4").prop('disabled',false);
  $("#b5").prop('disabled',false);
  $("#b6").prop('disabled',false);
  $("#b7").prop('disabled',false);
  $("#b8").prop('disabled',false);
  $("#b9").prop('disabled',false);
  $("#bn1").prop('disabled',false);
  $("#bn2").prop('disabled',false);
  $("#bn3").prop('disabled',false);
  $("#bn4").prop('disabled',false);
  $("#bn5").prop('disabled',false);
  $("#bn6").prop('disabled',false);
  $("#bn7").prop('disabled',false);
  $("#bn8").prop('disabled',false);
  $("#bn9").prop('disabled',false);
  $("#bh1").prop('disabled',false);
  $("#bh2").prop('disabled',false);
  $("#bh3").prop('disabled',false);
  $("#bh4").prop('disabled',false);
  $("#bh5").prop('disabled',false);
  $("#bh6").prop('disabled',false);
  $("#bh7").prop('disabled',false);
  $("#bh8").prop('disabled',false);
  $("#bh9").prop('disabled',false);
}
function disablebuttons()
{
	$("#b1").prop('disabled',true);
	$("#b2").prop('disabled',true);
	$("#b3").prop('disabled',true);
	$("#b4").prop('disabled',true);
	$("#b5").prop('disabled',true);
	$("#b6").prop('disabled',true);
	$("#b7").prop('disabled',true);
	$("#b8").prop('disabled',true);
	$("#b9").prop('disabled',true);
	$("#bn1").prop('disabled',true);
	$("#bn2").prop('disabled',true);
	$("#bn3").prop('disabled',true);
	$("#bn4").prop('disabled',true);
	$("#bn5").prop('disabled',true);
	$("#bn6").prop('disabled',true);
	$("#bn7").prop('disabled',true);
	$("#bn8").prop('disabled',true);
	$("#bn9").prop('disabled',true);
	$("#bh1").prop('disabled',true);
	$("#bh2").prop('disabled',true);
	$("#bh3").prop('disabled',true);
	$("#bh4").prop('disabled',true);
	$("#bh5").prop('disabled',true);
	$("#bh6").prop('disabled',true);
	$("#bh7").prop('disabled',true);
	$("#bh8").prop('disabled',true);
	$("#bh9").prop('disabled',true);
}

var turn=0,p1=[],p2=[]; 
    function display1player2()
    {
      if ((!turnis() && p1.indexOf(1)<0) && (p2.indexOf(1)<0))
        {
         document.getElementById("b1").value=p1weapon;
          p1.push(1);
          if (winner(p1))
          {
          	p1wins();
          	disablebuttons();
          } 
          turn++;
        }
      else if ((turnis() && p1.indexOf(1)<0) && (p2.indexOf(1)<0))
        {
          document.getElementById("b1").value=p2weapon;
          p2.push(1);
          if (winner(p2))
          {
            p2wins();
            disablebuttons();
          }
          turn++;
        }
      if (draw(p1,p2) && !winner(p1))
      {
        itsdraw();
        disablebuttons();
      }
    }
    function display2player2()
    {
      if ((!turnis() && p1.indexOf(2)<0) && (p2.indexOf(2)<0))
        {
         document.getElementById("b2").value=p1weapon;
          p1.push(2);
          if (winner(p1))
          {
          	p1wins();
          	disablebuttons();
          } 
          turn++;
        }
      else if ((turnis() && p1.indexOf(2)<0) && (p2.indexOf(2)<0))
        {
          document.getElementById("b2").value=p2weapon;
          p2.push(2);
          if (winner(p2))
          {
            p2wins();
            disablebuttons();
          }
          turn++;
        }
      if (draw(p1,p2) && !winner(p1))
      {
        itsdraw();
        disablebuttons();
      }
    }
    function display3player2()
    {
      if ((!turnis() && p1.indexOf(3)<0) && (p2.indexOf(3)<0))
        {
         document.getElementById("b3").value=p1weapon;
          p1.push(3);
          if (winner(p1))
          {
          	p1wins();
          	disablebuttons();
          } 
          turn++;
        }
      else if ((turnis() && p1.indexOf(3)<0) && (p2.indexOf(3)<0))
        {
          document.getElementById("b3").value=p2weapon;
          p2.push(3);
          if (winner(p2))
          {
          	p1wins();
          	disablebuttons();
          } 
          turn++;
        }
      if (draw(p1,p2) && !winner(p1))
      {
        itsdraw();
        disablebuttons();
      }
    }
    function display4player2()
    {
      if ((!turnis() && p1.indexOf(4)<0) && (p2.indexOf(4)<0))
        {
         document.getElementById("b4").value=p1weapon;
          p1.push(4);
          if (winner(p1))
          {
          	p1wins();
          	disablebuttons();
          } 
          turn++;
        }
      else if ((turnis() && p1.indexOf(4)<0) && (p2.indexOf(4)<0))
        {
          document.getElementById("b4").value=p2weapon;
          p2.push(4);
          if (winner(p2))
          {
            p2wins();
            disablebuttons();
          }
          turn++;
        }
      if (draw(p1,p2) && !winner(p1))
      {
        itsdraw();
        disablebuttons();
      }
    }
    function display5player2()
    {
      if ((!turnis() && p1.indexOf(5)<0) && (p2.indexOf(5)<0))
        {
         document.getElementById("b5").value=p1weapon;
          p1.push(5);
          if (winner(p1))
          {
          	p1wins();
          	disablebuttons();
          } 
          turn++;
        }
      else if ((turnis() && p1.indexOf(5)<0) && (p2.indexOf(5)<0))
        {
          document.getElementById("b5").value=p2weapon;
          p2.push(5);
          if (winner(p2))
          {
            p2wins();
            disablebuttons();
          }
          turn++;
        }
      if (draw(p1,p2) && !winner(p1))
      {
        itsdraw();
        disablebuttons();
      }
    }
    function display6player2()
    {
      if ((!turnis() && p1.indexOf(6)<0) && (p2.indexOf(6)<0))
        {
         document.getElementById("b6").value=p1weapon;
          p1.push(6);
          if (winner(p1))
          {
          	p1wins();
          	disablebuttons();
          } 
          turn++;
        }
      else if ((turnis() && p1.indexOf(6)<0) && (p2.indexOf(6)<0))
        {
          document.getElementById("b6").value=p2weapon;
          p2.push(6);
          if (winner(p2))
          {
            p2wins();
            disablebuttons();
          }
          turn++;
        }
      if (draw(p1,p2) && !winner(p1))
      {
        itsdraw();
        disablebuttons();
      }
    }
    function display7player2()
    {
      if ((!turnis() && p1.indexOf(7)<0) && (p2.indexOf(7)<0))
        {
         document.getElementById("b7").value=p1weapon;
          p1.push(7);
          if (winner(p1))
          {
          	p1wins();
          	disablebuttons();
          } 
          turn++;
        }
      else if ((turnis() && p1.indexOf(7)<0) && (p2.indexOf(7)<0))
        {
          document.getElementById("b7").value=p2weapon;
          p2.push(7);
          if (winner(p2))
          {
            p2wins();
            disablebuttons();
          }
          turn++;
        }
      if (draw(p1,p2) && !winner(p1))
      {
        itsdraw();
        disablebuttons();
      }
    }
    function display8player2()
    {
      if ((!turnis() && p1.indexOf(8)<0) && (p2.indexOf(8)<0))
        {
         document.getElementById("b8").value=p1weapon;
          p1.push(8);
          if (winner(p1))
          {
          	p1wins();
          	disablebuttons();
          } 
          turn++;
        }
      else if ((turnis() && p1.indexOf(8)<0) && (p2.indexOf(8)<0))
        {
          document.getElementById("b8").value=p2weapon;
          p2.push(8);
          if (winner(p2))
          {
            p2wins();
            disablebuttons();
          }
          turn++;
        }
      if (draw(p1,p2) && !winner(p1))
      {
        itsdraw();
        disablebuttons();
      }
    }
    function display9player2()
    {
      if ((!turnis() && p1.indexOf(9)<0) && (p2.indexOf(9)<0))
        {
         document.getElementById("b9").value=p1weapon;
          p1.push(9);
          if (winner(p1))
          {
          	p1wins();
          	disablebuttons();
          } 
          turn++;
        }
      else if ((turnis() && p1.indexOf(9)<0) && (p2.indexOf(9)<0))
        {
          document.getElementById("b9").value=p2weapon;
          p2.push(9);
          if (winner(p2))
          {
            p2wins();
            disablebuttons();
          }
          turn++;
        }
      if (draw(p1,p2) && !winner(p1))
      {
        itsdraw();
        disablebuttons();
      }
    }

    function validturn(n)
    {
    	if (p1.indexOf(n)<0 && p2.indexOf(n)<0)
    		return 1;
    	return 0;
    }
    var n=1;
    function normalcompturn()
    {
    	while (n<=9)
    	{
    		if (validturn(n))
    			break;
    		n++;
    		if (n==10)
    			n=1;
    	}
    	if (n===1)
    		document.getElementById("bn1").value=p2weapon;
    	else if (n===2)
    		document.getElementById("bn2").value=p2weapon;
    	else if (n===3)
    		document.getElementById("bn3").value=p2weapon;
    	else if (n===4)
    		document.getElementById("bn4").value=p2weapon;
    	else if (n===5)
    		document.getElementById("bn5").value=p2weapon;
    	else if (n===6)
    		document.getElementById("bn6").value=p2weapon;
    	else if (n===7)
    		document.getElementById("bn7").value=p2weapon;
    	else if (n===8)
    		document.getElementById("bn8").value=p2weapon;
    	else if (n===9)
    		document.getElementById("bn9").value=p2weapon;
    	return n;
    }
    function display1normal()
    {
    	if (!turnis() && validturn(1))
    	{
    		document.getElementById("bn1").value=p1weapon;
    		p1.push(1);
    		if (winner(p1))
    		{
    			p1wins();
    			disablebuttons();
    		}
    		turn++;
    	}
    	if (turnis()  && !winner(p1))
    	{
    		normalcompturn();
    		p2.push(n);
    		if (winner(p2))
    		{
    			compwins();
    			disablebuttons();
    		}
    		turn++;
    	}
    	if (draw(p1,p2) && !winner(p1))
    	{
    		itsdraw();
    		disablebuttons();
    	}
    }
    function display2normal()
    {
    	if (!turnis() && validturn(2))
    	{
    		document.getElementById("bn2").value=p1weapon;
    		p1.push(2);
    		if (winner(p1))
    		{
    			p1wins();
    			disablebuttons();
    		}
    		turn++;
    	}
    	if (turnis() && !winner(p1))
    	{
    		normalcompturn();
    		p2.push(n);
    		if (winner(p2))
    		{
    			compwins();
    			disablebuttons();
    		}
    		turn++;
    	}
    	if (draw(p1,p2) && !winner(p1))
    	{
    		itsdraw();
    		disablebuttons();
    	}
    }
    function display3normal()
    {
    	if (!turnis() && validturn(3))
    	{
    		document.getElementById("bn3").value=p1weapon;
    		p1.push(3);
    		if (winner(p1))
    		{
    			p1wins();
    			disablebuttons();
    		}
    		turn++;
    	}
    	if (turnis() && !winner(p1))
    	{
    		normalcompturn();
    		p2.push(n);
    		if (winner(p2))
    		{
    			compwins();
    			disablebuttons();
    		}
    		turn++;
    	}
    	if (draw(p1,p2) && !winner(p1))
    	{
    		itsdraw();
    		disablebuttons();
    	}
    }
    function display4normal()
    {
    	if (!turnis() && validturn(4))
    	{
    		document.getElementById("bn4").value=p1weapon;
    		p1.push(4);
    		if (winner(p1))
    		{
    			p1wins();
    			disablebuttons();
    		}
    		turn++;
    	}
    	if (turnis() && !winner(p1))
    	{
    		normalcompturn();
    		p2.push(n);
    		if (winner(p2))
    		{
    			compwins();
    			disablebuttons();
    		}
    		turn++;
    	}
    	if (draw(p1,p2) && !winner(p1))
    	{
    		itsdraw();
    		disablebuttons();
    	}
    }
    function display5normal()
    {
    	if (!turnis() && validturn(5))
    	{
    		document.getElementById("bn5").value=p1weapon;
    		p1.push(5);
    		if (winner(p1))
    		{
    			p1wins();
    			disablebuttons();
    		}
    		turn++;
    	}
    	if (turnis() && !winner(p1))
    	{
    		normalcompturn();
    		p2.push(n);
    		if (winner(p2))
    		{
    			compwins();
    			disablebuttons();
    		}
    		turn++;
    	}
    	if (draw(p1,p2) && !winner(p1))
    	{
    		itsdraw();
    		disablebuttons();
    	}
    }
    function display6normal()
    {
    	if (!turnis() && validturn(6))
    	{
    		document.getElementById("bn6").value=p1weapon;
    		p1.push(6);
    		if (winner(p1))
    		{
    			p1wins();
    			disablebuttons();
    		}
    		turn++;
    	}
    	if (turnis() && !winner(p1))
    	{
    		normalcompturn();
    		p2.push(n);
    		if (winner(p2))
    		{
    			compwins();
    			disablebuttons();
    		}
    		turn++;
    	}
    	if (draw(p1,p2) && !winner(p1))
    	{
    		itsdraw();
    		disablebuttons();
    	}
    }
    function display7normal()
    {
    	if (!turnis() && validturn(7))
    	{
    		document.getElementById("bn7").value=p1weapon;
    		p1.push(7);
    		if (winner(p1))
    		{
    			p1wins();
    			disablebuttons();
    		}
    		turn++;
    	}
    	if (turnis() && !winner(p1))
    	{
    		normalcompturn();
    		p2.push(n);
    		if (winner(p2))
    		{
    			compwins();
    			disablebuttons();
    		}
    		turn++;
    	}
    	if (draw(p1,p2) && !winner(p1))
    	{
    		itsdraw();
    		disablebuttons();
    	}
    }
    function display8normal()
    {
    	if (!turnis() && validturn(8))
    	{
    		document.getElementById("bn8").value=p1weapon;
    		p1.push(8);
    		if (winner(p1))
    		{
    			p1wins();
    			disablebuttons();
    		}
    		turn++;
    	}
    	if (turnis() && !winner(p1))
    	{
    		normalcompturn();
    		p2.push(n);
    		if (winner(p2))
    		{
    			compwins();
    			disablebuttons();
    		}
    		turn++;
    	}
    	if (draw(p1,p2) && !winner(p1))
    	{
    		itsdraw();
    		disablebuttons();
    	}
    }
    function display9normal()
    {
    	if (!turnis() && validturn(9))
    	{
    		document.getElementById("bn9").value=p1weapon;
    		p1.push(9);
    		if (winner(p1))
    		{
    			p1wins();
    			disablebuttons();
    		}
    		turn++;
    	}
    	if (turnis() && !winner(p1))
    	{
    		normalcompturn();
    		p2.push(n);
    		if (winner(p2))
    		{
    			compwins();
    			disablebuttons();
    		}
    		turn++;
    	}
    	if (draw(p1,p2) && !winner(p1))
    	{
    		itsdraw();
    		disablebuttons();
    	}
    }