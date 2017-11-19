/*
 * Funcionalidad de tu producto
 */
function add(){
	var menuUser = document.getElementById("menuUser");
	var cedes = document.getElementById("sedes");
	var contenedor_sedes = document.createElement("div");

	var list1 = document.createElement("li");
	list1.setAttribute("id", "list1");
	var textList1 = document.createTextNode("Lima");
	var subList1 = document.createElement("div");

	var list2 = document.createElement("li");
	list2.setAttribute("id", "list2");
	var textList2 = document.createTextNode("Arequipa");
	var subList2 = document.createElement("div");

	var list3 = document.createElement("li");
	list3.setAttribute("id", "list3");
	var textList3 = document.createTextNode("Santiago de Chile");
	var subList3 = document.createElement("div");

	var list4 = document.createElement("li");
	list4.setAttribute("id", "list4");
	var textList4 = document.createTextNode("Ciudad de México");
	var subList4 = document.createElement("div");

	var icon = document.createElement("i");
	icon.classList.add("class","fa","fa-angle-up");


	list1.appendChild(textList1);
	list2.appendChild(textList2);
	list3.appendChild(textList3);
	list4.appendChild(textList4);
	contenedor_sedes.appendChild(list1);
	contenedor_sedes.appendChild(subList1);
	contenedor_sedes.appendChild(list2);
	contenedor_sedes.appendChild(subList2);
	contenedor_sedes.appendChild(list3);
	contenedor_sedes.appendChild(subList3);
	contenedor_sedes.appendChild(list4);
	contenedor_sedes.appendChild(subList4);
	contenedor_sedes.appendChild(icon);
	cedes.appendChild(contenedor_sedes);

	icon.addEventListener("click", function(){
		contenedor_sedes.classList.toggle("hidden");
	})

	list1.addEventListener("click", function(){
		
		var lim = document.createElement("span");
		var gen1 = document.createElement("li");
		var textGen1 = document.createTextNode("2015 - I");
		var gen2 = document.createElement("li");
		var textGen2 = document.createTextNode("2015 - II");
		var gen3 = document.createElement("li");
		var textGen3 = document.createTextNode("2016 - I");
		var gen4 = document.createElement("li");
		var textGen4 = document.createTextNode("2016 - II");
		var gen5 = document.createElement("li");
		var textGen5 = document.createTextNode("2017 - I");
		var gen6 = document.createElement("li");
		var textGen6 = document.createTextNode("2017 - II");
		var icon1 = document.createElement("i");
		icon1.classList.add("class","fa","fa-angle-up");


	gen1.appendChild(textGen1);
	gen2.appendChild(textGen2);
	gen3.appendChild(textGen3);
	gen4.appendChild(textGen4);
	gen5.appendChild(textGen5);
	gen6.appendChild(textGen6);
	lim.appendChild(gen1);
	lim.appendChild(gen2);
	lim.appendChild(gen3);
	lim.appendChild(gen4);
	lim.appendChild(gen5);
	lim.appendChild(gen6);
	lim.appendChild(icon1);
	subList1.appendChild(lim);

	icon1.addEventListener("click", function(){
		subList1.classList.toggle("hidden");
	})

	
})
	list2.addEventListener("click", function(){
		
		var are = document.createElement("span");
		var gen1 = document.createElement("li");
		var textGen1 = document.createTextNode("2015 - I");
		var gen2 = document.createElement("li");
		var textGen2 = document.createTextNode("2015 - II");
		var gen3 = document.createElement("li");
		var textGen3 = document.createTextNode("2016 - I");
		var gen4 = document.createElement("li");
		var textGen4 = document.createTextNode("2016 - II");
		var gen5 = document.createElement("li");
		var textGen5 = document.createTextNode("2017 - I");
		var gen6 = document.createElement("li");
		var textGen6 = document.createTextNode("2017 - II");
		var icon2 = document.createElement("i");
		icon2.classList.add("class","fa","fa-angle-up");

	gen1.appendChild(textGen1);
	gen2.appendChild(textGen2);
	gen3.appendChild(textGen3);
	gen4.appendChild(textGen4);
	gen5.appendChild(textGen5);
	gen6.appendChild(textGen6);
	are.appendChild(gen1);
	are.appendChild(gen2);
	are.appendChild(gen3);
	are.appendChild(gen4);
	are.appendChild(gen5);
	are.appendChild(gen6);
	are.appendChild(icon2);
	subList2.appendChild(are);

	icon2.addEventListener("click", function(){
		subList2.classList.toggle("hidden");
	})
})
	list3.addEventListener("click", function(){
		
		var stgo = document.createElement("span");
		var gen1 = document.createElement("li");
		var textGen1 = document.createTextNode("2015 - I");
		var gen2 = document.createElement("li");
		var textGen2 = document.createTextNode("2015 - II");
		var gen3 = document.createElement("li");
		var textGen3 = document.createTextNode("2016 - I");
		var gen4 = document.createElement("li");
		var textGen4 = document.createTextNode("2016 - II");
		var gen5 = document.createElement("li");
		var textGen5 = document.createTextNode("2017 - I");
		var gen6 = document.createElement("li");
		gen6.setAttribute("id", "turn");
		var textGen6 = document.createTextNode("2017 - II");
		var ampm = document.createElement("div");
		ampm.setAttribute("id", "ampm");
		var icon3 = document.createElement("i");
		icon3.classList.add("class","fa","fa-angle-up");

	gen1.appendChild(textGen1);
	gen2.appendChild(textGen2);
	gen3.appendChild(textGen3);
	gen4.appendChild(textGen4);
	gen5.appendChild(textGen5);
	gen6.appendChild(textGen6);
	stgo.appendChild(gen1);
	stgo.appendChild(gen2);
	stgo.appendChild(gen3);
	stgo.appendChild(gen4);
	stgo.appendChild(gen5);
	stgo.appendChild(gen6);
	stgo.appendChild(ampm);
	stgo.appendChild(icon3);
	subList3.appendChild(stgo);

	turn.addEventListener("click", function(){
		var stgoTurn = document.createElement("span");
		var am = document.createElement("li");
		var textAm = document.createTextNode("AM");
		var pm = document.createElement("li");
		var textPm = document.createTextNode("PM");

		am.appendChild(textAm);
		pm.appendChild(textPm);
		stgoTurn.appendChild(am);
		stgoTurn.appendChild(pm);
		ampm.appendChild(stgoTurn);
		

	})

	icon3.addEventListener("click", function(){
		subList3.classList.toggle("hidden");
	})

})
	
	list4.addEventListener("click", function(){
		
		var mex = document.createElement("span");
		var gen1 = document.createElement("li");
		var textGen1 = document.createTextNode("2015 - I");
		var gen2 = document.createElement("li");
		var textGen2 = document.createTextNode("2015 - II");
		var gen3 = document.createElement("li");
		var textGen3 = document.createTextNode("2016 - I");
		var gen4 = document.createElement("li");
		var textGen4 = document.createTextNode("2016 - II");
		var gen5 = document.createElement("li");
		var textGen5 = document.createTextNode("2017 - I");
		var gen6 = document.createElement("li");
		var textGen6 = document.createTextNode("2017 - II");
		var icon4 = document.createElement("i");
		icon4.classList.add("class","fa","fa-angle-up");

	gen1.appendChild(textGen1);
	gen2.appendChild(textGen2);
	gen3.appendChild(textGen3);
	gen4.appendChild(textGen4);
	gen5.appendChild(textGen5);
	gen6.appendChild(textGen6);
	mex.appendChild(gen1);
	mex.appendChild(gen2);
	mex.appendChild(gen3);
	mex.appendChild(gen4);
	mex.appendChild(gen5);
	mex.appendChild(gen6);
	mex.appendChild(icon4);
	subList4.appendChild(mex);

	icon4.addEventListener("click", function(){
		subList4.classList.toggle("hidden");
	})
})
}

var mostrarOcultar = function(){
	console.log("hola alumnas");
}

var cargarPagina = function(){
	var elementosTab = document.getElementsByClassName("tab");
	for(var i = 0; i< elementosTab.length; i++){
		elementosTab[i].addEventListener("click", mostrarOcultar);
	}
}

cargarPagina();
// Puedes hacer uso de la base de datos a través de la variable `data`
//console.log(data);
