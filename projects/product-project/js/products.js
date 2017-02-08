/*global $*/
/*global _*/
$(function () {
  // ALL YOUR CODE GOES BELOW HERE //
    $.getJSON('data/product.json', function (data) {
        
        // Create a section to display products. This is a bootstrap container.
        let $productSection = $("<div>")
                                .attr("class", "container-fluid")
                                .attr("id", "product-section")
                                .appendTo("#product-display")
                                .append($("<ul>")
                                    .attr("id", "product-list")
                                    .css("list-style", "none")
                                );
        
        //DIV Product Rows & List Items
        let $productRows = _.map(data, function(values, index){
                return $("<li>")
                .appendTo("#product-list")                
                
                // DIV Phone Row
                .append(
                    $("<div>")
                    .attr("class", "row")
                    .attr("id", "phoneRow")
                    .attr("class", "filter-row")
                    .appendTo($productSection)
                    // DIV COL Image, 2
                    .append($('<div>')
                        .addClass("col-xs-2")
                        //DIV ROW Phone Image
                        .append($("<div>")
                            .attr("class", "row")
                            // DIV COL Image
                            .append($("<div>")
                                .attr("class", "col-xs-12")
                                .append($("<img>")
                                    .attr("src", "img/product/" + values.image)
                                    .attr("class", "product-image")
                                    .attr("class", "img-responsive")
                                    .attr("id", "Img" + index)
                                ) // end img
                            ) // end col
                        ) // end row

                        //DIV ROW Btn     
                        .append($("<div>")
                            .attr("class", "row")
                            //DIV COL Btn
                            .append($("<div>")
                                .attr("class", "col-xs-12")
                                .append($("<button>")
                                    .attr("id", "modal-button")
                                    .attr("class", "btn btn-info btn-block")
                                    .attr("data-toggle", "modal")
                                    .attr("data-target", "#myModal")
                                    .text("Magnify")
                                    
                        
                                
                                ) // end btn
                            
                            ) // end col          
                            
                        ) // end row
                            
                    ) // end image col
                    
                    
                    // DIV COL Text, 10
                    .append($('<div>')
                        .addClass("col-xs-10")
                        .addClass("well")
                        // DIV ROW Title
                        .append($('<div>')
                            .attr("class", "row")
                            // DIV COL Title, 12
                            .append($('<div>')
                                .attr("class", "col-xs-12")
                                .text(values.desc)
                                .addClass("h1")
                                .addClass("lead")
                                .attr("class", "product-name")
                                .attr("id", "product-title" + index)
                            )
                        )
                        //DIV ROW Price, Stock
                        .append($("<div>")
                            .attr("class", "row")
                            // DIV COL Price, 6
                            .append($("<div>")
                                .attr("class", "col-xs-6")
                                .text("Price: " + values.price)
                                .attr("id", "price-id"+index)
                                .attr("class", "h3")
                            )
                            //DIV COL Stock, 6
                            .append($("<div>")
                                .attr("class", "col-xs-6")
                                .text("In Stock: " + values.stock)
                                .attr("id", "stock-id"+index)
                                .attr("class", "h3")
                            )
                        )
                        // DIV ROW Specs
                        .append($("<div>").attr("class", "row")
                            .attr("id", "specs-row" + index)
                            // DIV COL Spec Title, 2
                            .append($("<div>")
                                .attr("class", "col-xs-2")
                                .text("Specs:")
                                .attr("class", "h3")
                                .attr("class", "specs-title")
                            )
                            // DIV COL Spec Details, 10
                            .append($("<div>")
                                .attr("class", "col-xs-10")
                                .text(values.specs)
                                .attr("class", "specs-details")
                                
                            )
                        )
                    )
                );
        });
        
/*****************SEARCH BAR***********************************************/        
    $('#product-list li').each(function(){
        $(this).attr('data-search-term', $(this).text().toLowerCase());
    });
    
    $('.live-search-box').on('keyup', function(){

        var searchTerm = $(this).val().toLowerCase();
        
            $('#product-list li').each(function(){
        
                if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
        
            });
        
        });
/***************** END SEARCH BAR***********************************************/            

/********************MODAL*******************************************************/


/********************MODAL*******************************************************/

        // Create the individual columns within the section
        // let $productCase = _.map(data, function(values, index){
        //     return $("<div>")
        //     .text(values.desc)
        //     .attr("class", "h2")
        //     .attr("class", "lead")
        //     .addClass("col-xs-10")
        //     .addClass("well");
        // });
        
        // _.each($productCase, function(values, index){
        //     return values.wrapAll($("<div>")
        
        // Insert thumbnail into column to the left of title in each row
        // let $thumbnailArray = _.map(data, function(values, index){
        //     return values.image;
        // });
        
        // let $imageCol = _.each($thumbnailArray, function(values, index){
        //     return $("<img>")
        //     .attr("src", "img/product/" + values)
        //     .attr("class", "img-responsive")
        //     .attr("id", "Img" + index)
        //     .attr("class", "col-xs-2")
        //     .appendTo($productRows[index]);
        // });
        
        
        
        //Add grids within $productCase
        
        // let $priceStockRow = _.each(data, function(values, index){
        //     return $("<div>").attr("class", "row")
        //         .append($("<div>")
        //             .attr("class", "col-xs-6")
        //             .text("Price: " + values.price)
        //             .attr("class", "h3"))
        //         .append($("<div>")
        //             .attr("class", "col-xs-6")
        //             .text("In Stock: " + values.stock)
        //             .attr("class", "h3"))
        //         .appendTo($productCase[index]);
        // });
        
        // let $specRow = _.each(data, function(values, index){
        //     return $("<div>").attr("class", "row")
        //         .append($("<div>")
        //             .attr("class", "col-xs-2")
        //             .text("Specs:")
        //             .attr("class", "h3"))
        //         .append($("<div>")
        //             .attr("class", "col-xs-10")
        //             .text(values.specs))
        //         .appendTo($productCase[index]);
        // });
        
    // let $ul = $("<ul>").attr("id", "product-list").css("list-style", "none").prependTo("#product-display");
    
    // $(("#product-section").wrapAll($ul));
    
    // let $li = $(".filter-row").wrap("<li>");
     
    
    // $(($ul).appendTo("#product-section").wrap($li));
      
        
    /***********SEARCH BAR ***********************************************/
    



        
        
        
        
    
        /********************TABLE ATTEMPT********************/
        // Add table within each product case to show:
        // Price, Specs, and how many in stock
        
        // This is what I want it to look like: 
        /*
        <thead></thead>
        <tbody>
            <tr>
                <th></th>
                <td></td>
            <tr>
        </tbody>
        
        
        */
        // Need to create 11 small tables, not just one.
        
        // let createTable = function(phoneData, index){
        //     var createRow = function(detail){
        //         var $row = $("<tr>");
        //             var $priceHeader = $("<th>").text("Price");
        //             var $priceDetails = $("<td>").text(detail.price);
        //             var $stockHeader = $("<th>").text("In Stock");
        //             var $stockDetails = $("<td>").text(detail.stock);
        //             var $specsHeader = $("<th>").text("Specs");
        //             var $specsDetails = $("<td>").text(detail.specs);
        //         $row.append($priceHeader);
        //         $row.append($priceDetails);
        //         $row.append($stockHeader);
        //         $row.append($stockDetails);
        //         $row.append($specsHeader);
        //         $row.append($specsDetails);
        //         return $row;
        //     };
            
            
        //     var $table = $("<table>");
        //     var $rows = _.map(phoneData, createRow);
        //     $table.append($rows);
        //     return $table;
        // };
        
        
        // createTable(data).appendTo($productSection);
        
        /*****************END TABLE ATTEMPT********************/
        
        
        
        
        
        
        
        
        
    

  
  
    });
  
  // ALL YOUR CODE GOES ABOVE HERE //
});