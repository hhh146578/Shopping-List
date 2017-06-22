
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
	var helpFindRow = 0;
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

	// add product
	$submitButton.on( "click", function(){
		if($(this).html()==="Add product"){
			helpAddTable();
		}
		if($(this).html()==="Save changes"){
			helpEditTable();
			console.log("rowID:" + helpFindRow);
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
		if(editing === true){ // strict equal
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
	    	console.log(arr[i]);
	    	i = i + 1;
		})
		i = 0;
		var temp =  "tr[row-id=" + helpFindRow + "]";
		// console.log(	$(temp).find("td").html());
		console.log($(temp).children('td'));
		$(temp).children('td').each(function(){
	        // arr[i] = ($(this).html());
	        // i = i + 1;
	        // if($(this).hasClass("data-id")){
		        console.log($(this).html());
		        $(this).html(arr[i]);
		        i = i + 1;
		    // }
		    console.log("get it?");
	        // console.log("edit table : "+ $(this).html());
	    });
	}
	//(dynamically) edit
	$(".table").on( "click", ".class-edit-icon", function(){
		// console.log("------------------edit-----------------------");
		// console.log($(this));
		// console.log($(this).closest("tr"));
		// console.log($(this).closest("tr").find("td"));
		// console.log($(this).closest("input[type=text]"));
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
		// var row = $(this).closest('tr');
		// console.log("row" + $(this).closest('tr').attr('id'));
		// $("#modal-form input[type=text]").each(function(){
		// 	var target_id = $(this).attr("id");
		// 	console.log("target_id"+target_id);
		// 	console.log("row find obj"+ row.parent().find('#' +target_id));
	 //    	$value = row.find('#' +target_id).val();
	 //    	console.log("value:"+ $value);
	 //    	console.log("jQ" + $("#target_id"));
	 //    	$(this).html($value);
		// })
		$("#product-modal .modal-title").html("Edit Product");
		$("#product-modal button[type=submit]").html("Save changes");
	});

	//(dynamically) delete
	$("#table-body").on( "click", "#delete-icon",function(){
		$(this).closest("tr").remove();
	});
});
