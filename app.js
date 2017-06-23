$(document).ready(function(){ // make sure this function has read the whole html
	// use variables to store the $() objects
	// so that we can save a lot of time to find this id and then transfer to the jQ object
	var $showModalButton = $( "#show-modal-btn"); // add product button (navbar)in main page
	var $productModal = $("#product-modal");
	var $modalForm = $("#modal-form");
	
	var $submitButton = $("#submit-btn"); // add product button in pop out modal form
	var $toggleEditButton = $("#toggle-edit"); //show edit column or not 
	
	var $editIcon = $("#edit-icon");
	var $deleteIcon = $("#delete-icon");
	
	var editing = false;
	var counter = 0;
	var helpFindRow = 0;

	// after modal shows up, let the curson automatically appear in the first textbox
	$productModal.on('shown.bs.modal', function () {
		$("#product-name").focus();
    });

	//main page: add product button in Navbar 
	$showModalButton.on( "click", function(){
		$modalForm[0].reset();
		$("#product-modal .modal-title").html("Add a product");
		$("#product-modal button[type=submit]").html("Add product");
	});
	
	//show edit column or not 
	$toggleEditButton.on('click', function() {
		if(editing === true){ 
			// hide it
			$(".edit-actions").addClass('hidden');
			$(this).html("Edit");
			// reset editing variable
			editing = false;
		}else{ 
			// show up
			$(".edit-actions").removeClass('hidden');
			$(this).html("Done");
			// reset editing variable
			editing = true;
		}
	});

	// add product in pop out modal form
	$submitButton.on( "click", function(){
		if($(this).html()==="Add product"){
			helpAddTable();
		}
		if($(this).html()==="Save changes"){
			helpEditTable();
		}		
		$productModal.modal('hide');
	});

	function helpAddTable(){
  		var count_variable = '"' + counter + '"'; 
  		var $data = "<tr row-id=" + count_variable +">";
  		var data_id = 0;
		$("#modal-form input[type=text]").each(function(){
	    	$value = $(this).val();
	    	$data = $data + "<td data-id="+ data_id +">" + $value + "</td>";
			data_id = data_id + 1;
		})
		if(editing === true){ 
			// show up
			$data = $data + '<td class="edit-actions"><button id="edit-icon" type="button" data-toggle="modal" data-target="#product-modal" class="btn btn-success btn-xs class-edit-icon">  <span class="glyphicon glyphicon-edit"></span></button><button id="delete-icon" type="button" class="btn btn-danger btn-xs class-delete-icon"><span class="glyphicon glyphicon-remove" > </span></button></td></tr>';
		}else{ 
			// hide it
			$data = $data + '<td class="hidden edit-actions"><button id="edit-icon" type="button" data-toggle="modal" data-target="#product-modal" class="btn btn-success btn-xs class-edit-icon">  <span class="glyphicon glyphicon-edit"></span></button><button id="delete-icon" type="button" class="btn btn-danger btn-xs class-delete-icon"><span class="glyphicon glyphicon-remove" > </span></button></td></tr>';
		}
		$("#table-body tr:last").after($data);
		counter = counter + 1;
	}
	
	function helpEditTable(){
		var arr = new Array();
		var i = 0;
		$("#modal-form input[type=text]").each(function(){
	    	arr[i] = $(this).val();
	    	i = i + 1;
		})

		i = 0;
		var temp =  "tr[row-id=" + helpFindRow + "]";
		$(temp).children('td').each(function(){
	            $(this).html(arr[i]);
		        i = i + 1;
	   });
	}

	//(dynamically) edit
	$(".table").on( "click", ".class-edit-icon", function(){
		var arr = new Array();
		var i = 0;
		helpFindRow = $(this).closest('tr').attr("row-id");
		$(this).closest('tr').find('td').each(function(){
	        arr[i] = ($(this).html());
	        i = i + 1;
	    });
	    i = 0;
	    $("#modal-form input[type=text]").each(function(){
	    	$(this).val(arr[i]);
	    	i = i + 1;
	    });
		$("#product-modal .modal-title").html("Edit Product");
		$("#product-modal button[type=submit]").html("Save changes");
	});

	//(dynamically) delete
	$("#table-body").on( "click", "#delete-icon",function(){
		$(this).closest("tr").remove();
	});
});