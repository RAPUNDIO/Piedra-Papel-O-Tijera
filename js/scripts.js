// CODIGO PARA MULTIJUGADOR
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
	if(pin)//PIN TRUE = TURNO DE X; PIN FALSE= TURNO DE O
   {
	  p1.style.borderColor="#000000";
	  p1.style.borderWidth="3px";
	  p1.style.borderStyle="dotted";
	  p2.style.borderColor="#fafafa";
	  p2.style.borderStyle="none";
   }
   else if(pin==false)
   {
	  p2.style.borderColor="#000000";
	  p2.style.borderWidth="4px";
	  p2.style.borderStyle="dotted";
	  p1.style.borderColor="#fafafa";
	  p1.style.borderStyle="none";
   }
}
function play(el)
{
   if(el.target.value!="")
   {
	  if(pin)
	  {
		 pin=false;
	  }
	  else if(pin==false)
	  {
		 pin=true;
	  }
   }
   touch=document.getElementById("botonplay");
   touch.play();
   if(pin)
   {
      if(el.target.value=="")
      {
         el.target.value=player[1];
		 el.target.style.backgroundColor="#fac324";
         evaluar();
       }
       pin=false;
    }
    else if(pin==false)
    {
        if(el.target.value=="")
        {
            el.target.value=player[0];
			el.target.style.backgroundColor="#1f8";
            evaluar();
        }
        pin=true;
    }
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
    }
    begin();
}
function evaluar()
{
    if(a.value==player[1]&&b.value==[1]&&c.value==player[1])
    {
        a.style.backgroundColor="#fac324";
        b.style.backgroundColor="#fac324";
        c.style.backgroundColor="#fac324";
        full=true;
        p1.value++;
    }
    else if(d.value==player[1]&&e.value==player[1]&&f.value==player[1])
    {
        d.style.backgroundColor="#fac324";
        e.style.backgroundColor="#fac324";
        f.style.backgroundColor="#fac324";
        full=true;
        p1.value++;
    }
    else if(g.value==player[1]&&h.value==player[1]&&i.value==player[1])
    {
        g.style.backgroundColor="#fac324";
        h.style.backgroundColor="#fac324";
        i.style.backgroundColor="#fac324";
        full=true;
        p1.value++;
    }
    else if(a.value==player[1]&&d.value==player[1]&g.value==player[1])
    {
        a.style.backgroundColor="#fac324";
        d.style.backgroundColor="#fac324";
        g.style.backgroundColor="#fac324";
        full=true;
        p1.value++;
    }
    else if(b.value==player[1]&&e.value==player[1]&&h.value==player[1])
    {
        b.style.backgroundColor="#fac324";
        e.style.backgroundColor="#fac324";
        h.style.backgroundColor="#fac324";
        full=true;
        p1.value++;
    }
    else if(c.value==player[1]&&f.value==player[1]&&i.value==player[1])
    {
        c.style.backgroundColor="#fac324";
        f.style.backgroundColor="#fac324";
        i.style.backgroundColor="#fac324";
        full=true;
        p1.value++;
    }
    else if(a.value==player[1]&&e.value==player[1]&&i.value==player[1])
    {
        a.style.backgroundColor="#fac324";
        e.style.backgroundColor="#fac324";
        i.style.backgroundColor="#fac324";
        full=true;
        p1.value++;
    }
    else if(g.value==player[1]&&e.value==player[1]&&c.value==player[1])
    {
        g.style.backgroundColor="#fac324";
        e.style.backgroundColor="#fac324";
        c.style.backgroundColor="#fac324";
        full=true;
        p1.value++;
    }
    if(a.value==player[0]&&b.value==player[0]&&c.value==player[0])
    {
        a.style.backgroundColor="#fac324";
        b.style.backgroundColor="#fac324";
        c.style.backgroundColor="#fac324";
        full=true;
        p2.value++;
    }
    else if(d.value==player[0]&&e.value==player[0]&&f.value==player[0])
    {
        d.style.backgroundColor="#fac324";
        e.style.backgroundColor="#fac324";
        f.style.backgroundColor="#fac324";
        full=true;
        p2.value++;
    }
    else if(g.value==player[0]&&h.value==player[0]&&i.value==player[0])
    {
        g.style.backgroundColor="#fac324";
        h.style.backgroundColor="#fac324";
        i.style.backgroundColor="#fac324";
        full=true;
        p2.value++;
    }
    else if(a.value==player[0]&&d.value==player[0]&g.value==player[0])
    {
        a.style.backgroundColor="#fac324";
        d.style.backgroundColor="#fac324";
        g.style.backgroundColor="#fac324";
        full=true;
        p2.value++;
    }
    else if(b.value==player[0]&&e.value==player[0]&&h.value==player[0])
    {
        b.style.backgroundColor="#fac324";
        e.style.backgroundColor="#fac324";
        h.style.backgroundColor="#fac324";
        full=true;
        p2.value++;
    }
    else if(c.value==player[0]&&f.value==player[0]&&i.value==player[0])
    {
        c.style.backgroundColor="#fac324";
        f.style.backgroundColor="#fac324";
        i.style.backgroundColor="#fac324";
        full=true;
        p2.value++;
    }
    else if(a.value==player[0]&&e.value==player[0]&&i.value==player[0])
    {
        a.style.backgroundColor="#fac324";
        e.style.backgroundColor="#fac324";
        i.style.backgroundColor="#fac324";
        full=true;
        p2.value++;
    }
    else if(g.value==player[0]&&e.value==player[0]&&c.value==player[0])
    {
        g.style.backgroundColor="#fac324";
        e.style.backgroundColor="#fac324";
        c.style.backgroundColor="#fac324";
        full=true;
        p2.value++;
    }
}
var player=["O","X"];
var pin=true;
var a,b,c,d,e,f,g,h,i;
var full=false;
window.addEventListener("load",begin);
