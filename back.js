function validate(){
    var user=document.getElementById("name").value;
    var pass1=document.getElementById("psw").value;
    //var check =name + "@123";
    if((pass1!= user +"@123"))
    {
        alert("incorrect password");
       
        
    }
	

}










var count = 0;
//var clicks = 0;
function cor()
{
	var  qone1= document.getElementById("qone1").checked;
    var qone2 = document.getElementById("qone2").checked;
    var qone3 = document.getElementById("qone3").checked;
	var qone4 = document.getElementById("qone4").checked;
	var z= document.getElementById("para1");	
	//disabled
	document.getElementById("qone1").disabled=true;
	document.getElementById("qone2").disabled=true;
	document.getElementById("qone3").disabled=true;
	document.getElementById("qone4").disabled=true;
	
	if(qone1 == true)
	{
	
		z.style.color = "red";
		z.innerHTML = "your answer is wrong.";
	}
	else if(qone2 == true )
	{
		
		z.style.color = "red";
		z.innerHTML = "your answer is wrong.";
    }
    else if(qone3 == true )
	{
		z.style.color = "green";
		z.innerHTML = "your answer is correct.";
		count++;
    }
    else if(qone4 == true )
	{
		
		z.style.color = "red";
		z.innerHTML = "your answer is wrong.";
    }
    
	else
	{
		z.style.color = "blue";
		z.innerHTML = "Nothing has been selected.";
	}
	
	var qtwo1 = document.getElementById("qtwo1").checked;
    var qtwo2 = document.getElementById("qtwo2").checked;
    var qtwo3 = document.getElementById("qtwo3").checked;
	var qtwo4 = document.getElementById("qtwo4").checked;
	var z1 = document.getElementById("para2");

	document.getElementById("qtwo1").disabled=true;
	document.getElementById("qtwo2").disabled=true;
	document.getElementById("qtwo3").disabled=true;
	document.getElementById("qtwo4").disabled=true;
	



	if(qtwo1 == true)
	{
		z1.style.color = "red";
		z1.innerHTML = "your answer is wrong.";
	}
	else if(qtwo2== true)
	{
		z1.style.color = "green";
		z1.innerHTML = "your answer is correct.";
		count++;
    }
    else if(qtwo3== true)
	{
		z1.style.color = "red";
		z1.innerHTML = "your answer is wrong.";
    }
    else if(qtwo4== true)
	{
		z1.style.color = "red";
		z1.innerHTML = "your answer is wrong.";
    }
    
	else
	{
		z1.style.color = "blue";
		z1.innerHTML = "Nothing has been selected.";
	}
	
	var qth1 = document.getElementById("qth1").checked;
    var qth2 = document.getElementById("qth2").checked;
    var qth3 = document.getElementById("qth3").checked;
	var qth4 = document.getElementById("qth4").checked;
	var z2 = document.getElementById("para3");

	document.getElementById("qth1").disabled=true;
	document.getElementById("qth2").disabled=true;
	document.getElementById("qth3").disabled=true;
	document.getElementById("qth4").disabled=true;
	


	if(qth1 == true)
	{
		z2.style.color = "green";
		z2.innerHTML = "your answer is correct.";
		count++;
	}
	else if(qth2 == true)
	{
		z2.style.color = "red";
		z2.innerHTML = "your answer is wrong.";
    }
    else if(qth3 == true)
	{
		z2.style.color = "red";
		z2.innerHTML = "your answer is wrong.";
    }
    else if(qth4 == true)
	{
		z2.style.color = "red";
		z2.innerHTML = "your answer is wrong.";
	}
	else
	{
		z2.style.color = "blue";
		z2.innerHTML = "Nothing has been selected.";
	}
	
	var qfo1 = document.getElementById("qfo1").checked;
    var qfo2 = document.getElementById("qfo2").checked;
    var qfo3 = document.getElementById("qfo3").checked;
	var qfo4 = document.getElementById("qfo4").checked;
	var z3 = document.getElementById("para4");




	document.getElementById("qfo1").disabled=true;
	document.getElementById("qfo2").disabled=true;
	document.getElementById("qfo3").disabled=true;
	document.getElementById("qfo4").disabled=true;
	
	if(qfo1 == true)
	{
		z3.style.color = "red";
		z3.innerHTML = "your answer is wrong.";
	}
	else if(qfo2== true)
	{
		z3.style.color = "green";
		z3.innerHTML = "your answer is correct.";
		count++;
		
    }
    else if(qfo3== true)
	{
		z3.style.color = "red";
		z3.innerHTML = "your answer is wrong.";
    }
    else if(qfo4== true)
	{
		z3.style.color = "red";
		z3.innerHTML = "your answer is wrong.";
	}
	else
	{
		z3.style.color = "blue";
		z3.innerHTML = "Nothing has been selected.";
	}
	if (count>4)
	{
		count = 0;
	}
	
	
	var qfi1 = document.getElementById("qfi1").checked;
	
    var qfi2 = document.getElementById("qfi2").checked;
    var qfi3 = document.getElementById("qfi3").checked;
	var qfi4 = document.getElementById("qfi4").checked;
	var z4 = document.getElementById("para5");





	document.getElementById("qfi1").disabled=true;
	document.getElementById("qfi2").disabled=true;
	document.getElementById("qfi3").disabled=true;
	document.getElementById("qfi4").disabled=true;
	
	if(qfi1 == true)
	{
		z4.style.color = "red";
		z4.innerHTML = "your answer is wrong.";
	}
	else if(qfi2 == true)
	{
		z4.style.color = "red";
		z4.innerHTML = "your answer is wrong.";
    }
    else if(qfi3 == true)
	{
		z4.style.color = "green";
		z4.innerHTML = "your answer is correct.";
		count++;
		
    }
    else if(qfi4 == true)
	{
		z4.style.color = "red";
		z4.innerHTML = "your answer is wrong.";
	}
	else
	{
		z4.style.color = "blue";
		z4.innerHTML = "Nothing has been selected.";
	}
	if (count>5)
	{
		count = 0;
	}


    var score=document.getElementById("score");
    score.innerHTML=count;
	console.log(count);
	
	document.getElementById("dis").disabled=true;

}