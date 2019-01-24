
	$(document).ready(function(){


		$("#btn-buscar").click(function(){

		var val =$("#in-fac").val();
	
		


			if($("#in-ruc").val().length < 1)
			{
				$("#ruc").html("Ingrese numero de RUC valido!"); //LLENO EL DIV CON HTML
		 		$("#ruc").css({
					"opacity":"1" //MUESTRO EL MENSAJE 
				});
				$("#in-ruc").css({
					"border-bottom": "2px solid",
			 		"border-color":"#fc4f6b" //SE RESLTADA EL INPUT
				});
	
			}



			if ($("#in-ser").val().length < 1){
				$("#serie").html("Ingrese numero de serie!"); //LLENO EL DIV CON HTML
		 		$("#serie").css({
					"opacity":"1" //MUESTRO ELs MENSAJE 
				});
				$("#in-ser").css({
					"border-bottom": "2px solid",
			 		"border-color":"#fc4f6b" //SE RESLTADA EL INPUT
				});
			}
			if($("#in-rucemi").val().length < 1){
				$("#ruc-emi").html("Ingrese ruc del emisor!"); //LLENO EL DIV CON HTML
		 		$("#ruc-emi").css({
					"opacity":"1" //MUESTRO EL MENSAJE 
				});
				$("#in-rucemi").css({
				"border-bottom": "2px solid",
			 	"border-color":"#fc4f6b" //SE RESLTADA EL INPUT
				});
			}

			if($("#in-fecha").val() == ""){
				$("#fecha").html("Ingrese una fecha valida!"); //LLENO EL DIV CON HTML
		 		$("#fecha").css({
		 			
					"opacity":"1" //MUESTRO EL MENSAJE 
				});
				$("#in-fecha").css({
						"border-bottom": "2px solid",
			 	"border-color":"#fc4f6b" //SE RESLTADA EL INPUT
				});
			}
			if(val =="Factura"){
				$("#factura").html("Seleccione una factura!"); //LLENO EL DIV CON HTML
		 		$("#factura").css({

					"opacity":"1" //MUESTRO EL MENSAJE 
				});
				$("#in-fac").css({
						"border-bottom": "2px solid",
			 			"border-color":"#fc4f6b" //SE RESLTADA EL INPUT
				});
			}
		




		})

		$("#in-ruc").focus(function(){
			$("#ruc").css({
					"opacity":"0" //MUESTRO EL MENSAJE 
				});
				$("#in-ruc").css({
			 	"border-bottom": "2px solid",
			 	"border-color":"#33bcba"
			 	  							//SE RESLTADA EL INPUT
				});
		});

		$("#in-ser").focus(function(){
			$("#serie").css({
					"opacity":"0" //MUESTRO EL MENSAJE 
				});
				$("#in-ser").css({
			 	"border-bottom": "2px solid",
			 	"border-color":"#33bcba" //SE RESLTADA EL INPUT
				});
		});

		$("#in-rucemi").focus(function(){
			$("#ruc-emi").css({
					"opacity":"0" //MUESTRO EL MENSAJE 
				});
				$("#in-rucemi").css({
			 		"border-bottom": "2px solid",
			 	"border-color":"#33bcba" //SE RESLTADA EL INPUT
				});
		});

		$("#in-fecha").focus(function(){
			$("#fecha").css({
					"opacity":"0" //MUESTRO EL MENSAJE 
				});
				$("#in-fecha").css({
			 		"border-bottom": "2px solid",
			 	"border-color":"#33bcba" //SE RESLTADA EL INPUT
				});
		});

		$("#in-fac").focus(function() {
			$("#factura").css({
				"opacity" :"0"
			});
			$("#in-fac").css({
					"border-bottom": "2px solid",
			 	"border-color":"#33bcba"
			})
		});


		$("#in-ruc").change(function(){
			$("#ruc").css({
					"opacity":"0" //MUESTRO EL MENSAJE 
				});
				$("#in-ruc").css({
			 	"border-color":"#EA4564" //SE RESLTADA EL INPUT
				});
		});

		$("#in-ser").change(function(){
			$("#serie").css({
					"opacity":"0" //MUESTRO EL MENSAJE 
				});
				$("#in-ser").css({
			 	"border-color":"#EA4564" //SE RESLTADA EL INPUT
				});
		});

		$("#in-rucemi").change(function(){
			$("#ruc-emi").css({
					"opacity":"0" //MUESTRO EL MENSAJE 
				});
				$("#in-rucemi").css({
			 	"border-color":"#EA4564" //SE RESLTADA EL INPUT
				});
		});

		$("#in-fecha").change(function(){
			$("#fecha").css({
					"opacity":"0" //MUESTRO EL MENSAJE 
				});
				$("#in-fecha").css({
			 	"border-color":"#EA4564" //SE RESLTADA EL INPUT
				});
		});

		$("#in-fac").change(function() {
			$("#factura").css({
				"opacity" :"0"
			});
			$("#in-fac").css({
				"border-color": "#EA4564"
			})
		});



		$("#in-ruc").focusout(function(){
			$("#ruc").css({
					"opacity":"0" //MUESTRO EL MENSAJE 
				});
				$("#in-ruc").css({
			 	"border-bottom": "2px solid",
			 	"border-color":"#bfbfbf" //SE RESLTADA EL INPUT
				});
		});

		$("#in-ser").focusout(function(){
			$("#serie").css({
					"opacity":"0" //MUESTRO EL MENSAJE 
				});
				$("#in-ser").css({
			 	"border-color":"#bfbfbf" //SE RESLTADA EL INPUT
				});
		});

		$("#in-rucemi").focusout(function(){
			$("#ruc-emi").css({
					"opacity":"0" //MUESTRO EL MENSAJE 
				});
				$("#in-rucemi").css({
			 	"border-bottom": "2px solid",
			 	"border-color":"#bfbfbf" //SE RESLTADA EL INPUT
				});
		});

		$("#in-fecha").focusout(function(){
			$("#fecha").css({
					"opacity":"0" //MUESTRO EL MENSAJE 
				});
				$("#in-fecha").css({
			 	"border-bottom": "2px solid",
			 	"border-color":"#bfbfbf" //SE RESLTADA EL INPUT
				});
		});

		$("#in-fac").focusout(function() {
			$("#factura").css({
				"opacity" :"0"
			});
			$("#in-fac").css({
					"border-bottom": "2px solid",
			 	"border-color":"#bfbfbf"
			})
		});





	})
