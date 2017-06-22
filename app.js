
$(document).ready(function(){ // make sure this function has read the whole html
	// use variables to store the $() objects
	// so that we can save a lot of time to find this id and then transfer to the jQ object
	var $showModalButton = $( "#show-modal-btn");
	// var $addProductsButton = $("#add-products-btn");

	var $modalForm = $("#modal-form");
	var $productModal = $("#product-modal");
	var $submitButton = $( "#submit-btn" );
	var $toggleEditButton = $( "#toggle-edit" );
	var $editIcon = $( "#edit-icon" );
	var $deleteIcon = $( "#delete-icon" );
	var editing = false;
	var counter = 0;

	$productModal.on('shown.bs.modal', function () {
		$("#product-name").focus();
    });

	//MAIN PAGE SHOW MODAL
	$showModalButton.on( "click", function(){
		$modalForm[0].reset();
		$("#product-modal .modal-title").html("Add a product");
		$("#product-modal button[type=submit]").html("Add product");
		// $productModal.html("");
		// $productModal.modal('show');
	});
	
	$toggleEditButton.on('click', function() {
		if(editing === true){ // strict equal
			// hide it
			$(".edit-actions").addClass('hidden');
			$(this).html("Edit");
			editing = false;
		}else{ 
			// show up
			$(".edit-actions").removeClass('hidden');
			$(this).html("Done");
			editing = true;
		}
	});

	$submitButton.on( "click", function(){
		helpAddTable();
		$productModal.modal('hide');
	});

	function helpAddTable(){
  		var count_variable = '"' + counter + '"'; 
  		var $data = "<tr id =" + count_variable +">";
		$("#modal-form input[type=text]").each(function(){
	    	$value = $(this).val();
	    	$data = $data + "<td>" + $value + "</td>";
		})
		if(editing === true){ // strict equal
			// show up
			$data = $data + '<td class="edit-actions"><button id="edit-icon" type="button" data-toggle="modal" data-target="#product-modal" class="btn btn-success btn-xs">  <span class="glyphicon glyphicon-edit"></span></button><button id="delete-icon" type="button" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove" > </span></button></td></tr>';
		}else{ 
			// hide it
			$data = $data + '<td class="hidden edit-actions"><button id="edit-icon" type="button" data-toggle="modal" data-target="#product-modal" class="btn btn-success btn-xs">  <span class="glyphicon glyphicon-edit"></span></button><button id="delete-icon" type="button" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove" > </span></button></td></tr>';
		}
		$("#table-body tr:last").after($data);
		counter = counter + 1;
	}


	$("#table-body").on( "click", "#edit-icon", function(){
		$modalForm[0].reset();
		$("#product-modal .modal-title").html("Edit Product");
		$("#product-modal button[type=submit]").html("Save changes");
	});

	$("#table-body").on( "click", "#delete-icon",function(){
		$(this).closest("tr").remove();
	});
});
