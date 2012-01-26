var data = {
  tableData:"data/pub.json"
};

var table = {
  create:function(parent,data){

    for(var i = 0;i<data.tables.length;i++){

      var table_ = $("<div />",{"class":"table"});
      if(data.tables[i].available !== true){
        table_.addClass("not-available");
      }
      if(data.tables[i].booked == true){
        table_.addClass("booked");
      }

      table_.click(function(){
        $(this).toggleClass("not-available");
      })

      parent.append(table_);
    }

  }
}


$.getJSON(data.tableData,function(data){
  table.create($("#main"),data);
})

