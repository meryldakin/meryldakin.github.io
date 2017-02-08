/*global $*/
/*global _*/
$(function () {
  // ALL YOUR CODE GOES BELOW HERE //
    $.getJSON('data/product.json', function (data) {
        
        //add grid that holds:
            // product image container (col-md-2)
                //image
                //hover image
            // product description table (col-md-8)
                // row1 product title
                // row2 product price
                // row3 dropdown specs list
                // row4 change color checkboxes
                // row5 in stock
        
        // Create a section to display products. This is a bootstrap container.
        let $productSection = $("<div>")
                                .attr("class", "container-fluid")
                                .attr("id", "product-section")
                                .appendTo("#product-display");
        
        // Create the individual columns within the section
        let $productCase = _.map(data, function(values, index){
            return $("<div>")
            .text(values.desc)
            .attr("class", "h2")
            .attr("class", "lead")
            .appendTo($productSection);
        });
        
        //Wrap the columns in rows, give each an individual ID#
        let $productRows = _.each($productCase, function(values, index){
            return values.wrap($("<div>")
                .attr("class", "row")
                .attr("id", "ID #" + index)
                .attr("class", "filter-row"));
        });
        
        // Insert thumbnail into column to the left of title in each row
        let $thumbnailArray = _.map(data, function(values, index){
            return values.image;
        });
        
        let $imageCol = _.each($thumbnailArray, function(values, index){
            return $("<img>")
            .attr("src", "img/product/" + values)
            .attr("class", "img-responsive")
            .attr("id", "Img" + index)
            .attr("class", "col-xs-2")
            .insertBefore($productRows[index]);
        });
        
        // Add column attr to product case
        _.each($productCase, function(product, index){
            return product.addClass("col-xs-10").addClass("well");
        });
        
        
        //Add grids within $productCase
        
        let $priceStockRow = _.each(data, function(values, index){
            return $("<div>").attr("class", "row")
                .append($("<div>")
                    .attr("class", "col-xs-6")
                    .text("Price: " + values.price)
                    .attr("class", "h3"))
                .append($("<div>")
                    .attr("class", "col-xs-6")
                    .text("In Stock: " + values.stock)
                    .attr("class", "h3"))
                .appendTo($productCase[index]);
        });
        
        let $specRow = _.each(data, function(values, index){
            return $("<div>").attr("class", "row")
                .append($("<div>")
                    .attr("class", "col-xs-2")
                    .text("Specs:")
                    .attr("class", "h3"))
                .append($("<div>")
                    .attr("class", "col-xs-10")
                    .text(values.specs))
                .appendTo($productCase[index]);
        });
    
    let $li = $(".filter-row").wrap("<li>").attr("class", "list-group-item").attr("class", "unstyled");
      
    let $ul = $("<ul>").attr("class", "list-group").attr("style", "list-style-type:none");
    
    $($ul.appendTo("#product-display").wrap($li));
      
        
       
        
        
        
        
    
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