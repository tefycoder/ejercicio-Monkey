
var aSmile = document.getElementById("a_Smile");
var bSmile = document.getElementById("b_Smile");
var divSalida = document.getElementById("salida");


function Mostrar()
{
	var  valoraSmile=aSmile.value;
	var  valorbSmile=bSmile.value;

valoraSmile.toLowerCase()

	if(valoraSmile == "" || valorbSmile == "" )
	{

		salida.innerHTML = "--";
		document.getElementById("mensajes").innerHTML = '<div class="alert alert-danger">Responde todas las preguntas</div>';
	}
	else if(valoraSmile.toLowerCase() !="si" && valoraSmile.toLowerCase() != "no" || valorbSmile.toLowerCase() != "si" && valorbSmile.toLowerCase() != "no" )
	{

		salida.innerHTML = "--";
		document.getElementById("mensajes").innerHTML = '<div class="alert alert-danger">Valores Incorrectos/Responde "SI" ó "NO"</div>';
	}
	else if(valoraSmile.toLowerCase() == "si" && valorbSmile.toLowerCase() == "si" || valoraSmile.toLowerCase() == "no" && valorbSmile.toLowerCase() == "no" )
	{

		salida.innerHTML = "1";
		document.getElementById("mensajes").innerHTML = '<div>Estamos en Problemas</div>';
	}	
	else 
	{
		salida.innerHTML = "0";
		document.getElementById("mensajes").innerHTML = '<div>No hay Problemas</div>';

	}

}
