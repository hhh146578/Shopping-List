
$(document).ready(function(){ // make sure this function has read the whole html
	// use variables to store the $() objects
	// so that we can save a lot of time to find this id and then transfer to the jQ object
	var showModalButton = $( "#show-modal-btn");
	var submitButton = $( "#submit-btn" );
	var addProductsButton = $("#add-products-btn");

	var modalForm = $('#modal-form');
	var productModal = $("#product-modal");

	showModalButton.click(function(){
		productModal.modal('show');
	})
	productModal.on('show.bs.modal', function (event) {
	// 	// console.log(event.relatedTarget);
	// 	// addProductsButton.on( "click", "", function() {
			modalForm[0].reset();
	// 	// })
	})

	// productModal.modal('show');

});

//-------------------------------------------------
	// modalForm.on('show.bs.modal', function (event) {
	// 	// which button 
	// 	// var button = $(event.target); // The clicked button
	// 	console.log(event.relatedTarget);
	// 	addProductsButton.on( "click", "", function() {
	// 		modalForm[0].reset();
	// 	})
		
	// 	//reset

	// 	//retrieve data

	// 	// var button = $(event.relatedTarget) // Button that triggered the modal
	// 	// var recipient = button.data('whatever') // Extract info from data-* attributes
	// 	// // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
	// 	// // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
	// 	// var modal = $(this)
	// 	// modal.find('.modal-title').text('New message to ' + recipient)
	// 	// modal.find('.modal-body input').val(recipient)
	// })

	// $( "#submit-button" ).on( "click", function() {
	// 	console.log( "User clicked on submit" );



	// 	// delete button part
	// 	var dele_button = document.createElement("BUTTON"); // button element
	// 	dele_button.type = "button";
	// 	dele_button.value = "delete";
	// 	dele_button.id = "delete-button";
	// 	dele_button.className = "js-del-btn";

	// 	var button_text = document.createTextNode("Delete"); // text
	// 	dele_button.appendChild(button_text);


	// 	// edit button part
	// 	var edit_button = document.createElement("BUTTON"); // button element
	// 	edit_button.type = "button";
	// 	edit_button.value = "edit";
	// 	edit_button.id = "edit-button";
	// 	edit_button.className = "js-edit-btn";

	// 	var button_text = document.createTextNode("Edit"); // text
	// 	edit_button.appendChild(button_text);


	// 	// append list
	// 	var ul = document.getElementById("list"); // old list from html
	// 	//<li> text </li> button
	// 	var tag = document.createElement("li"); // add <li> </li>
	// 	tag.innerHTML = document.getElementById("product-name").value
	// 	  +	"   " + document.getElementById("product-id").value
	// 	  + "   " + document.getElementById("product-price").value
	// 	  + "   " + document.getElementById("product-category").value + "   ";
	// 	// tag.appendChild(document.createTextNode(product_array_text)); //text
	// 	tag.appendChild(dele_button);
	// 	tag.appendChild(edit_button);
	// 	ul.appendChild(tag);
	// 	console.log(ul);
	// });

	// $( "#list" ).on("click", ".js-del-btn", function(){  // use class not id, let live button can do this
	// 	$(this).parent().remove();
	// 	console.log("pressed delete button");	
	// })

	// $( "#add-products-button" ).on("click", function(){
	
	// })
// });