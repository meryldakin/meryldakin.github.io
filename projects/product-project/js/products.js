/*global $*/
/*global _*/
$(function () {
  // ALL YOUR CODE GOES BELOW HERE //
    $.getJSON('product.json', function (data) {
        
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
        
        let $productSection = $("<section>").attr("id", "product-section").appendTo("<main>");
        let $productID = data;
        $productSection.append($productID);
        console.log($productID);
        
        
        
        
        
        
    })

  
  
  
  
  // ALL YOUR CODE GOES ABOVE HERE //
});