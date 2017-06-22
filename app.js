
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
	// use another form for edit part
	// var $editModalForm = $('#edit-modal-form');
	// var $editProductModal = $("#edit-product-modal");
	// var $updateButton = $( "#edit-btn" );

	// var count = 0;
	// var $unorderlist = $("#unorder-list");	
	// var deleBtn;
	// var editBtn;
	
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
		console.log("submit~~");
		// $("#modal-form input[type=text]").each(function(){
	 //    	console.log($(this).val());
		// })
		helpAddTable();
		$productModal.modal('hide');
	});

	function helpAddTable(){
		// var data =   "<tr id = "counter">
  //             + <td>Mark</td>
  //             +  <td>Otto</td>
  //             +  <td>@mdo</td>
  //             +  <td>@mdo</td>
  //             +  <td class="hidden edit-actions">
  //             +      <button id="edit-icon"type="button" data-toggle="modal" data-target="#product-modal" class="btn btn-success btn-xs">  
  //             +      <span class="glyphicon glyphicon-edit"></span></button>                    
  //             +      <button id="delete-icon" type="button" class="btn btn-danger btn-xs">
  //             +      <span class="glyphicon glyphicon-remove" > 
  //             +      </span></button>
  //             +  </td>"
  		var count_variable = '"' + counter + '"'; 
  		var $data = "<tr id =" + count_variable +">";
        // $("#table-body tr:last").after("<tr id =" + counter + ">");
		$("#modal-form input[type=text]").each(function(){
	    	$value = $(this).val();
	    	$data = $data + "<td>" + $value + "</td>";
	    	// $("#table-body td:last").after("<td>" + $data + "</td>");
		})
		$data = $data + '<td class="hidden edit-actions"><button id="edit-icon" type="button" data-toggle="modal" data-target="#product-modal" class="btn btn-success btn-xs">  <span class="glyphicon glyphicon-edit"></span></button><button id="delete-icon" type="button" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove" > </span></button></td></tr>';
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
		$("#table-body tr:last").after($data);
		counter = counter + 1;
	}


	$("#table-body").on( "click", "#edit-icon", function(){
		$modalForm[0].reset();
		$("#product-modal .modal-title").html("Edit Product");
		$("#product-modal button[type=submit]").html("Save changes");
		// $productModal.html("");
		// $productModal.modal('show');
	});

	$("#table-body").on( "click", "#delete-icon",function(){
		console.log("delete");
		$(this).closest("tr").remove();
	});

	
	// $productModal.on( 'shown.bs.modal', function () {
 //    	$("input[type=text]:first").focus();
 //    });

	// //ADD ITEM
	// $submitButton.on( "click",function(){
	// 	count = count + 1;
	// 	var flag = true;
	// 	var $list = $("<li data-id = " + count + ">");
	// 	// var $input =  $("#modal-form  input[type=text]").val();
	// 	$("#modal-form  input[type=text]").each(function(){  //use 2 selector in jQuery
 // 				var $input = $(this); 
	// 			// if($this!==null && )
	// 			$list.append($input.val()+" ");
	// 	});
	// 	deleBtn = document.createElement("BUTTON"); // button element
	// 	deleBtn.type = "button";
	// 	deleBtn.value = "delete";
	// 	deleBtn.id = "delete-button";
	// 	deleBtn.className = "js-dele-btn";
	// 	$(deleBtn).html('Delete');

	// 	editBtn = document.createElement("BUTTON"); // button element
	// 	editBtn.type = "button";
	// 	editBtn.value = "edit";
	// 	editBtn.id = "edit-button";
	// 	editBtn.className = "js-edit-btn";
	// 	$(editBtn).html('Edit');
		
	// 	// if(content is empty then don't add Btn)
	// 	$list.append(editBtn);
	// 	$list.append(deleBtn);

	// 	$list.append("</li>");
	// 	$unorderlist.append($list);
	// 	$productModal.modal('hide');
	// });



	// $editBtn = $("#edit-button");

	// //DELETE
	// $unorderlist.on( "click", ".js-dele-btn", function(){
	// 	$(this).closest('li').remove();
	// })

	// //EDIT
	// // we have to bind to its parent or something that will not change!
	// $unorderlist.on( "click", ".js-edit-btn", function(){
	// 	$editModalForm[0].reset();
	// 	// should retrieve the data from the list
	// 	// and fill out in the form
	// 	$(this).prev().css( "background-color", "red" );	
	// 	console.log("this: "+ $(this).closest("li").find(".input-field").value);

	// 	// $editObject = $(this).parent();
	// 	// console.log($editObject)
	// 	// console.log($editObject.parents().find("#edit-product-price").val());

	// 	// console.log($editObject);
	// 	// console.log("id :" + $editObject.find("#product-id").val());
	// 	$("#modal-form input[type=text]").each(function(){  //use 2 selector in jQuery
 // 			$(this).val("example"); 
	// 	});
	// 	$editProductModal.modal('show');
	// })

	// //UPDATE
	// $updateButton.on( "click",function(){
	// 	// var $input =  $("#edit-modal-form  input[type=text]").val();
	// 	$("#edit modal-form  input[type=text]").each(function(){  //use 2 selector in jQuery
 // 				var $input = $(this); 
	// 			// if($this!==null && )
	// 			$list.append($input.val()+" ");
	// 	});
	// 	$editProductModal.modal('hide');
	// });

	// $productModal.modal('show');
	// TODO
	// edit button 
	// delete button
});
