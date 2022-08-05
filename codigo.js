$(document).ready(function(){     
    $("#myTable").dynamicTable({
          //definimos las columnas iniciales    
          columns: [{
                text: "Gusto",
                key: "Like"
            },
            {
                text: "%",
                key: "%%"
            },
                 
          ],
   
          //carga de datos
          
  
          //definición de botones
          buttons: {
              addButton: '<input type="button" value="Nuevo" class="btn btn-success" />',
              cancelButton: '<input type="button" value="Cancelar" class="btn btn-primary" />',
              deleteButton: '<input type="button" value="Borrar" class="btn btn-danger" />',
              editButton: '<input type="button" value="Editar" class="btn btn-primary" />',
              saveButton: '<input type="button" value="Guardar" class="btn btn-success" />',
          },
          showActionColumn: true,
          //condicionales
          getControl: function (columnKey) {
              if (columnKey == "age") {
                return '<input type="number" class="form-control" />';
              }
  
              
  
              return '<input type="text" class="form-control" />';
          }
  
      });	    
  });    