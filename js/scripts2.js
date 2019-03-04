// CODIGO PARA ONE VS ONE
function begin()
{
    full=false;
    a=document.getElementById("1");
    a.addEventListener("click",play);
    b=document.getElementById("2");
    b.addEventListener("click",play);
    c=document.getElementById("3");
    c.addEventListener("click",play);
    d=document.getElementById("4");
    d.addEventListener("click",play);
    e=document.getElementById("5");
    e.addEventListener("click",play);    
    f=document.getElementById("6");
    f.addEventListener("click",play);
    g=document.getElementById("7");
    g.addEventListener("click",play);
    h=document.getElementById("8");
    h.addEventListener("click",play);
    i=document.getElementById("9");
    i.addEventListener("click",play);
    p1=document.getElementById("pointer1");
    p2=document.getElementById("pointer2");
	btouch=document.getElementById("backplay");
	campo=document.getElementById("campo");
    btouch.play();
   
}
function random()
{
   
   while(pin)
   {
	  intol=Math.round((Math.random()*100)%10);
	  if(intol==0)
	  {
		 if(c.value=="")
		 {
			c.value="O";
		    c.style.backgroundColor="#1f8";
			pin=false;
		 }
	  }
	  else if(intol==1||intol==9)
	  {
		 if(e.value=="")
		 {
			e.value="O";
		    e.style.backgroundColor="#1f8";
			pin=false;
		 }
	  }
	  else if(intol==2)
	  {
		 if(i.value=="")
		 {
			i.value="O";
		    i.style.backgroundColor="#1f8";
			pin=false;
		 }
	  }
	  else if(intol==3)
	  {
		 if(d.value=="")
		 {
			d.value="O";
		    d.style.backgroundColor="#1f8";
			pin=false;
		 }
	  }
	  else if(intol==4)
	  {
		 if(f.value=="")
		 {
			f.value="O";
		    f.style.backgroundColor="#1f8";
			pin=false;
		 }
	  }
	  else if(intol==5)
	  {
		 if(h.value=="")
		 {
			h.value="O";
		    h.style.backgroundColor="#1f8";
			pin=false;
		 }
	  }
	  else if(intol==6)
	  {
		 if(a.value=="")
		 {
			a.value="O";
		    a.style.backgroundColor="#1f8";
			pin=false;
		 }
	  }
	  else if(intol==7)
	  {
		 if(b.value=="")
		 {
			b.value="O";
		    b.style.backgroundColor="#1f8";
			pin=false;
		 }
	  }
	  else if(intol==8)
	  {
		 if(g.value=="")
		 {
			g.value="O";
		    g.style.backgroundColor="#1f8";
			pin=false;
		 }
	  }
   }
}
function serrar()
{
   if(a.value=="O"&&b.value=="O"&&c.value=="")
   {
	  c.value="O";
	  c.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(a.value=="O"&&c.value=="O"&&b.value=="")
   {
	  b.value="O";
	  b.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(a.value=="O"&&e.value=="O"&&i.value=="")
   {
	  i.value="O";
	  i.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(a.value=="O"&&i.value=="O"&&e.value=="")
   {
	  e.value="O";
	  e.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(a.value=="O"&&d.value=="O"&&g.value=="")
   {
	  g.value="O";
	  g.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(a.value=="O"&&g.value=="O"&&d.value=="")
   {
	  d.value="O";
	  d.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(b.value=="O"&&c.value=="O"&&a.value=="")
   {
	  a.value="O";
	  a.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(b.value=="O"&&e.value=="O"&&h.value=="")
   {
	  h.value="O";
	  h.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(b.value=="O"&&h.value=="O"&&e.value=="")
   {
	  e.value="O";
	  e.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(c.value=="O"&&e.value=="O"&&g.value=="")
   {
	  g.value="O";
	  g.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(c.value=="O"&&g.value=="O"&&e.value=="")
   {
	  e.value="O";
	  e.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(c.value=="O"&&f.value=="O"&&i.value=="")
   {
	  i.value="O";
	  i.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(c.value=="O"&&i.value=="O"&&f.value=="")
   {
	  f.value="O";
	  f.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(d.value=="O"&&g.value=="O"&&a.value=="")
   {
	  a.value="O";
	  a.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(d.value=="O"&&e.value=="O"&&f.value=="")
   {
	  f.value="O";
	  f.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(d.value=="O"&&f.value=="O"&&e.value=="")
   {
	  e.value="O";
	  e.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(e.value=="O"&&f.value=="O"&&d.value=="")
   {
	  d.value="O";
	  d.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(e.value=="O"&&g.value=="O"&&c.value=="")
   {
	  c.value="O";
	  c.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(e.value=="O"&&h.value=="O"&&b.value=="")
   {
	  b.value="O";
	  b.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(e.value=="O"&&i.value=="O"&&a.value=="")
   {
	  a.value="O";
	  a.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(f.value=="O"&&i.value=="O"&&c.value=="")
   {
	  c.value="O";
	  c.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(g.value=="O"&&h.value=="O"&&i.value=="")
   {
	  i.value="O";
	  i.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(g.value=="O"&&i.value=="O"&&h.value=="")
   {
	  h.value="O";
	  h.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(h.value=="O"&&i.value=="O"&&g.value=="")
   {
	  g.value="O";
	  g.style.backgroundColor="#1f8";
	  pin=false;
   }
}
function cortar()
{
   if(a.value=="X"&&b.value=="X"&&c.value=="")
   {
	  c.value="O";
	  c.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(a.value=="X"&&c.value=="X"&&b.value=="")
   {
	  b.value="O";
	  b.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(a.value=="X"&&e.value=="X"&&i.value=="")
   {
	  i.value="O";
	  i.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(a.value=="X"&&i.value=="X"&&e.value=="")
   {
	  e.value="O";
	  e.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(a.value=="X"&&d.value=="X"&&g.value=="")
   {
	  g.value="O";
	  g.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(a.value=="X"&&g.value=="X"&&d.value=="")
   {
	  d.value="O";
	  d.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(b.value=="X"&&c.value=="X"&&a.value=="")
   {
	  a.value="O";
	  a.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(b.value=="X"&&e.value=="X"&&h.value=="")
   {
	  h.value="O";
	  h.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(b.value=="X"&&h.value=="X"&&e.value=="")
   {
	  e.value="O";
	  e.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(c.value=="X"&&e.value=="X"&&g.value=="")
   {
	  g.value="O";
	  g.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(c.value=="X"&&g.value=="X"&&e.value=="")
   {
	  e.value="O";
	  e.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(c.value=="X"&&f.value=="X"&&i.value=="")
   {
	  i.value="O";
	  i.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(c.value=="X"&&i.value=="X"&&f.value=="")
   {
	  f.value="O";
	  f.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(d.value=="X"&&g.value=="X"&&a.value=="")
   {
	  a.value="O";
	  a.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(d.value=="X"&&e.value=="X"&&f.value=="")
   {
	  f.value="O";
	  f.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(d.value=="X"&&f.value=="X"&&e.value=="")
   {
	  e.value="O";
	  e.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(e.value=="X"&&f.value=="X"&&d.value=="")
   {
	  d.value="O";
	  d.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(e.value=="X"&&g.value=="X"&&c.value=="")
   {
	  c.value="O";
	  c.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(e.value=="X"&&h.value=="X"&&b.value=="")
   {
	  b.value="O";
	  b.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(e.value=="X"&&i.value=="X"&&a.value=="")
   {
	  a.value="O";
	  a.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(f.value=="X"&&i.value=="X"&&c.value=="")
   {
	  c.value="O";
	  c.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(g.value=="X"&&h.value=="X"&&i.value=="")
   {
	  i.value="O";
	  i.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(g.value=="X"&&i.value=="X"&&h.value=="")
   {
	  h.value="O";
	  h.style.backgroundColor="#1f8";
	  pin=false;
   }
   else if(h.value=="X"&&i.value=="X"&&g.value=="")
   {
	  g.value="O";
	  g.style.backgroundColor="#1f8";
	  pin=false;
   }
}
   
function maquina()
{
   pin=true;
   if(turn)
   {
      defend();
   }
   else if(turn==false)
   {
      attack();
   }
}
function defend()
{
   counter=0;
   if(a.value=="O"){counter++;}
   if(b.value=="O"){counter++;}
   if(c.value=="O"){counter++;}
   if(d.value=="O"){counter++;}
   if(e.value=="O"){counter++;}
   if(f.value=="O"){counter++;}
   if(g.value=="O"){counter++;}
   if(h.value=="O"){counter++;}
   if(i.value=="O"){counter++;}
   
   
   
   //////*//****/*//////IF PARA DEFENDERME////////////
   intel=Math.round((Math.random()*10)/3);
   if(counter==0)
   {
	  if(a.value=="X"||c.value=="X"||g.value=="X"||i.value=="X")
	  {
		 e.value="O";
		 e.style.backgroundColor="#1f8";
		 pin=false;
	  }
	  else if(e.value=="X")
	  {
		 if(intel==0)
		 {
			a.value="O";
			a.style.backgroundColor="#1f8";
		 }
		 if(intel==1)
		 {
			c.value="O";
			c.style.backgroundColor="#1f8";
		 }
		 if(intel==2)
		 {
			g.value="O";
			g.style.backgroundColor="#1f8";
		 }
		 if(intel==3)
		 {
			i.value="O";
			i.style.backgroundColor="#1f8";
		 }
		 pin=false;
	  }
	  else
	  {
		 cortar();
		 if(pin){random();}
	  }
   }
   else if(counter==1)
   {
	  if(pin){serrar();}
	  if(pin){cortar();}
	  if(pin)
	  {
	     if((e.value=="X" && a.value=="X")||
	     (e.value=="X" && c.value=="X")||
		 (e.value=="X" && g.value=="X")||
		 (e.value=="X" && i.value=="X"))
	     {
		    if(g.value=="")
			{
			   g.value="O";
			   g.style.backgroundColor="#1f8";
			   pin=false;
			}
			else if(c.value=="")
			{
			   c.value="O";
			   c.style.backgroundColor="#1f8";
			   pin=false;
			}
			else if(a.value=="")
			{
			   a.value="O";
			   a.style.backgroundColor="#1f8";
			   pin=false;
			}
			else if(i.value=="")
			{
			   i.value="O";
			   i.style.backgroundColor="#1f8";
			   pin=false;
			}
			
	     }
		 else if((a.value=="X"&&i.value=="X")||(c.value=="X"&&g.value=="X"))
		 {
			if(intel==0)
		    {
			   b.value="O";
			   b.style.backgroundColor="#1f8";
		    }
		    else if(intel==1)
		    {
			   d.value="O";
			   d.style.backgroundColor="#1f8";
		    }
		    else if(intel==2)
		    {
			   f.value="O";
			   f.style.backgroundColor="#1f8";
		    }
		    else if(intel==3)
		    {
			   h.value="O";
			   h.style.backgroundColor="#1f8";
		    }
			pin=false;
		 }
	  }
	  if(pin){   random();   }
   }
   if(counter>1&&counter<4)
   {
	  if(pin){serrar();}
	  if (pin){cortar();}
	  if(pin){random();}
   }
 //  if(counter==4){turn=false;}pa saber cuando pasar a ataque
   
   evaluar();
}
function attack()
{
   counter=0;
   if(a.value=="O"){counter++;}
   if(b.value=="O"){counter++;}
   if(c.value=="O"){counter++;}
   if(d.value=="O"){counter++;}
   if(e.value=="O"){counter++;}
   if(f.value=="O"){counter++;}
   if(g.value=="O"){counter++;}
   if(h.value=="O"){counter++;}
   if(i.value=="O"){counter++;}
   intol2=Math.round((Math.random()*100)%10);
   kill();
   random();
  // if(counter==4){turn=true;}pa saber cuando cambiar a defensa
}
function kill()
{
   if(counter==0)
   {
	  if(pin)
      {
	     if(intol2==0||intol2==2||intol2==5||intol2==9)
	     {
		    firtForm();
	     }
	     else if(intol2==1||intol2==7||intol2==4||intol2==8)
	     {
		    if(pin)
			{
			   e.value="O";
			   e.style.backgroundColor="#1f8";
			   pin=false;
			}
	     }
	     else if(intol2==8||intol2==3)
	     {
			
	     }
      }
	  else if(counter==1)
	  {
		 if(pin)
		 {
			if(a.value=="O")
			{
			   
			}
			else if(c.value=="O")
			{
			   
			}
			else if(g.value=="O")
			{
			   
			}
			else if(i.value=="O")
			{
			   
			}
		 }
	  }
   }
}
function fisrtForm()
{
   if(intol2==0)
			{
			   a.value="O";
			   a.style.backgroundColor="#1f8";
			}
			else if(intol2==2)
			{
			   c.value="O";
			   c.style.backgroundColor="#1f8";
			}
			else if(intol2==5)
			{
			   g.value="O";
			   g.style.backgroundColor="#1f8";
			}
			else if(intol2==9)
			{
			   i.value="O";
			   i.style.backgroundColor="#1f8";
			}
			pin=false;
}
function play(el)
{
   touch=document.getElementById("botonplay");
   touch.play();
   if(el.target.value=="")
   {
      el.target.value="X";
      el.target.style.backgroundColor="#fac324";
      evaluar();
   }
   maquina();
    if(full)
    {
        //GANAR
        a.value="";
        b.value="";
        c.value="";
        d.value="";
        e.value="";
        f.value="";
        g.value="";
        h.value="";
        i.value="";
        a.style.backgroundColor="#fafafa";
        b.style.backgroundColor="#fafafa";
        c.style.backgroundColor="#fafafa";
        d.style.backgroundColor="#fafafa";
        e.style.backgroundColor="#fafafa";
        f.style.backgroundColor="#fafafa";
        g.style.backgroundColor="#fafafa";
        h.style.backgroundColor="#fafafa";
        i.style.backgroundColor="#fafafa";
		if(turn){turn=false;maquina();}
		else if(turn==false){turn=true;}
    }
    if(a.value!=""&&b.value!=""&&c.value!=""&&d.value!=""&&e.value!=""&&f.value!=""&&g.value!=""&&h.value!=""&&i.value!="")
    {
         //EMPATAR
        a.value="";
        b.value="";
        c.value="";
        d.value="";
        e.value="";
        f.value="";
        g.value="";
        h.value="";
        i.value="";
        a.style.backgroundColor="#fafafa";
        b.style.backgroundColor="#fafafa";
        c.style.backgroundColor="#fafafa";
        d.style.backgroundColor="#fafafa";
        e.style.backgroundColor="#fafafa";
        f.style.backgroundColor="#fafafa";
        g.style.backgroundColor="#fafafa";
        h.style.backgroundColor="#fafafa";
        i.style.backgroundColor="#fafafa";
		if(turn){turn=false;maquina();}
		else if(turn==false){turn=true;}
    }
    begin();
}
function evaluar()
{
    if(a.value=="X"&&b.value=="X"&&c.value=="X")
    {
        a.style.backgroundColor="#fac324";
        b.style.backgroundColor="#fac324";
        c.style.backgroundColor="#fac324";
        full=true;
        p1.value++;
    }
    else if(d.value=="X"&&e.value=="X"&&f.value=="X")
    {
        d.style.backgroundColor="#fac324";
        e.style.backgroundColor="#fac324";
        f.style.backgroundColor="#fac324";
        full=true;
        p1.value++;
    }
    else if(g.value=="X"&&h.value=="X"&&i.value=="X")
    {
        g.style.backgroundColor="#fac324";
        h.style.backgroundColor="#fac324";
        i.style.backgroundColor="#fac324";
        full=true;
        p1.value++;
    }
    else if(a.value=="X"&&d.value=="X"&g.value=="X")
    {
        a.style.backgroundColor="#fac324";
        d.style.backgroundColor="#fac324";
        g.style.backgroundColor="#fac324";
        full=true;
        p1.value++;
    }
    else if(b.value=="X"&&e.value=="X"&&h.value=="X")
    {
        b.style.backgroundColor="#fac324";
        e.style.backgroundColor="#fac324";
        h.style.backgroundColor="#fac324";
        full=true;
        p1.value++;
    }
    else if(c.value=="X"&&f.value=="X"&&i.value=="X")
    {
        c.style.backgroundColor="#fac324";
        f.style.backgroundColor="#fac324";
        i.style.backgroundColor="#fac324";
        full=true;
        p1.value++;
    }
    else if(a.value=="X"&&e.value=="X"&&i.value=="X")
    {
        a.style.backgroundColor="#fac324";
        e.style.backgroundColor="#fac324";
        i.style.backgroundColor="#fac324";
        full=true;
        p1.value++;
    }
    else if(g.value=="X"&&e.value=="X"&&c.value=="X")
    {
        g.style.backgroundColor="#fac324";
        e.style.backgroundColor="#fac324";
        c.style.backgroundColor="#fac324";
        full=true;
        p1.value++;
    }
    if(a.value=="O"&&b.value=="O"&&c.value=="O")
    {
        a.style.backgroundColor="#fac324";
        b.style.backgroundColor="#fac324";
        c.style.backgroundColor="#fac324";
        full=true;
        p2.value++;
    }
    else if(d.value=="O"&&e.value=="O"&&f.value=="O")
    {
        d.style.backgroundColor="#fac324";
        e.style.backgroundColor="#fac324";
        f.style.backgroundColor="#fac324";
        full=true;
        p2.value++;
    }
    else if(g.value=="O"&&h.value=="O"&&i.value=="O")
    {
        g.style.backgroundColor="#fac324";
        h.style.backgroundColor="#fac324";
        i.style.backgroundColor="#fac324";
        full=true;
        p2.value++;
    }
    else if(a.value=="O"&&d.value=="O"&g.value=="O")
    {
        a.style.backgroundColor="#fac324";
        d.style.backgroundColor="#fac324";
        g.style.backgroundColor="#fac324";
        full=true;
        p2.value++;
    }
    else if(b.value=="O"&&e.value=="O"&&h.value=="O")
    {
        b.style.backgroundColor="#fac324";
        e.style.backgroundColor="#fac324";
        h.style.backgroundColor="#fac324";
        full=true;
        p2.value++;
    }
    else if(c.value=="O"&&f.value=="O"&&i.value=="O")
    {
        c.style.backgroundColor="#fac324";
        f.style.backgroundColor="#fac324";
        i.style.backgroundColor="#fac324";
        full=true;
        p2.value++;
    }
    else if(a.value=="O"&&e.value=="O"&&i.value=="O")
    {
        a.style.backgroundColor="#fac324";
        e.style.backgroundColor="#fac324";
        i.style.backgroundColor="#fac324";
        full=true;
        p2.value++;
    }
    else if(g.value=="O"&&e.value=="O"&&c.value=="O")
    {
        g.style.backgroundColor="#fac324";
        e.style.backgroundColor="#fac324";
        c.style.backgroundColor="#fac324";
        full=true;
        p2.value++;
    }
}
var turn=true;
var pin=true;
var a,b,c,d,e,f,g,h,i;
var full=false;
window.addEventListener("load",begin);
