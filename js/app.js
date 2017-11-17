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

	var list2 = document.createElement("li");
	list2.setAttribute("id", "list2");
	var textList2 = document.createTextNode("Arequipa");

	var list3 = document.createElement("li");
	list3.setAttribute("id", "list3");
	var textList3 = document.createTextNode("Santiago de Chile");

	var list4 = document.createElement("li");
	list4.setAttribute("id", "list4");
	var textList4 = document.createTextNode("Ciudad de México");


	list1.appendChild(textList1);
	list2.appendChild(textList2);
	list3.appendChild(textList3);
	list4.appendChild(textList4);
	contenedor_sedes.appendChild(list1);
	contenedor_sedes.appendChild(list2);
	contenedor_sedes.appendChild(list3);
	contenedor_sedes.appendChild(list4);
	cedes.appendChild(contenedor_sedes);

	list1.addEventListener("click", function(){
		
		var lim1 = document.createElement("span");
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

	gen1.appendChild(textGen1);
	gen2.appendChild(textGen2);
	gen3.appendChild(textGen3);
	gen4.appendChild(textGen4);
	gen5.appendChild(textGen5);
	gen6.appendChild(textGen6);
	lim1.appendChild(gen1);
	lim1.appendChild(gen2);
	lim1.appendChild(gen3);
	lim1.appendChild(gen4);
	lim1.appendChild(gen5);
	lim1.appendChild(gen6);
	list1.appendChild(lim1);
})
	list2.addEventListener("click", function(){
		
		var are1 = document.createElement("span");
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

	gen1.appendChild(textGen1);
	gen2.appendChild(textGen2);
	gen3.appendChild(textGen3);
	gen4.appendChild(textGen4);
	gen5.appendChild(textGen5);
	gen6.appendChild(textGen6);
	lim1.appendChild(gen1);
	lim1.appendChild(gen2);
	lim1.appendChild(gen3);
	lim1.appendChild(gen4);
	lim1.appendChild(gen5);
	lim1.appendChild(gen6);
	list2.appendChild(are1);
})

}
// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
