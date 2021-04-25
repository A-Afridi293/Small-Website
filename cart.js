"use strict";
//<script src = "./arrays.js"> </script>

var subtotal = 0;
var cartHTML = "<table><thead><tr><th>Item Description</th><th>Price</th><th>Qty</th><th>Total</th></tr></thead><tbody>";
for (var i=0; i < 4; i++)
{
//alert(i);
	var cost = qty[i]*price[i];
	//alert ("cost="+cost);
	subtotal += cost;
		//alert("subtotal="+subtotal);

"<tr><td>"+'$'+ i+"</td></tr>";
	cartHTML += "<tr><td>"+description[i]+"</td><td>"+'$'+price[i]+"</td><td>"+qty[i]+"</td><td>"+'$'+cost+"</td></tr>";
			
			//<td>"+item[i]+"</td>
			
		
	
}

var shipCost = .05 * subtotal;
cost = subtotal;

shipCost += 0.0;


var orderTotal = (cost + shipCost).toFixed(2);

cartHTML += "</tbody><tfoot><tr><td colspan='3'>Subtotal</td><td>"+'$' +subtotal+"</td></tr><tr><td colspan='3'>Shipping*</td><td>"+'$'+Number.parseFloat(shipCost).toPrecision(3)+"</td></tr><tr><td colspan='3'>Total</td><td>"+'$'+orderTotal+"</td></tr></tfoot></table>";



