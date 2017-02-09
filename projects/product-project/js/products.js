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
                    .attr("class", "row filter-row")
                    .attr("id", "phoneRow")
                    
                    // DIV COL Image, 2
                    .append($('<div>')
                        .attr("class", "col-xs-2")
                        //DIV ROW Phone Image
                        .append($("<div>")
                            .attr("class", "row")
                            // DIV COL Image
                            .append($("<div>")
                                .attr("class", "col-xs-12")
                                .append($("<img>")
                                    .attr("src", "img/product/" + values.image)
                                    .attr("class", "product-image img-responsive")
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
                                    .attr("id", "modal-button" + index)
                                    .attr("class", "btn btn-info btn-block glyphicon glyphicon-zoom-in")
                                    .attr("data-toggle","modal")
                                    .attr("data-target", "#myModal")
                                
                                ) // end btn
                            
                            ) // end col          
                            
                        ) // end row
                            
                    ) // end image col
                    
                    
                    // DIV COL Text, 10
                    .append($('<div>')
                        .attr("class", "col-xs-10 well")
                        // DIV ROW Title
                        .append($('<div>')
                            .attr("class", "row")
                            // DIV COL Title, 12
                            .append($('<div>')
                                .attr("class", "col-xs-12 lead product-name")
                                .text(values.desc)
                                .attr("id", "product-title" + index)
                            )
                        )
                        //DIV ROW Price, Stock
                        .append($("<div>")
                            .attr("class", "row")
                            // DIV COL Price, 6
                            .append($("<div>")
                                .attr("class", "col-xs-6 h4")
                                .text("Price: $" + values.price)
                                .attr("id", "price-id"+index)
                            )
                            //DIV COL Stock, 6
                            .append($("<div>")
                                .attr("class", "col-xs-6 h4 stock-number")
                                .text("In Stock: " + values.stock)
                                .attr("id", "stock-id"+index)
                            )
                        )
                        // DIV ROW Specs
                        .append($("<div>").attr("class", "row")
                            .attr("id", "specs-row" + index)
                            // DIV COL Spec Title, 2
                            .append($("<div>")
                                .attr("class", "col-xs-2 h4 specs-title")
                                .text("Specs:")
                            )
                            // DIV COL Spec Details, 10
                            .append($("<div>")
                                .attr("class", "col-xs-10 specs-details")
                                .append($("<ul>")
                                    // .append($("<li>")
                                        .attr("id", "specs-list"+index)
                                        .append($("<div>")
                                            .text(values.specs)
                                            .wrapInner("<li>"))
                                    // )
                                )
                                
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
/***************** MODAL ***********************************************/            

    let imageArray = _.map(data, function(value){
        return "img/product/" + value.image;
    });
    
    let phoneTitles = _.map(data, function(value){
        return value.desc;
    });
    
    let specsText = _.map(data, function(value){
        return value.specs;
    });
    
    let altColors = _.map(data, function(value){
        return value.availableColors;
    });
    
    let colorSentence = _.map(altColors, function(value, index) {
        let sent = []
        _.each(value, function(val, i){
            if (value.indexOf(val) === value.length -1){
                sent.push("and " + val + ".")
            } else {
                sent.push(val + ", ");
            }
        })
        return sent.join("");
    })
    
    _.map(phoneTitles, function(value, index){
        $("#modal-button"+ index).on('click',function(){
            let title = $('#myModalLabel').text(value);
            let image = $('#modal-image').attr("src", imageArray[index]).attr("class", "img-responsive center-block");
            let availColors = $('#alt-colors').text("Also available in " + colorSentence[index]).attr("class", "lead");
        });
    });
    
    /**************************Specs in bullets********************/
    // let specsList = _.map(data, function(value){
    //     return value.specs;
    // });
    
    // let wrapSpecs = _.map(specsList, function(specArr, index){
    //     return _.each(specArr, function(spec, ind){
    //         $(spec).wrap("<li>");
    //     });
    // });
    
    // console.log(wrapSpecs);
    
    //DIV COL Stock, 6
    // .append($("<div>")
    //     .attr("class", "col-xs-6 h4 stock-number")
    //     .text("In Stock: " + values.stock)
    //     .attr("id", "stock-id"+index)
    // )

    let stockNums = _.map(data, function(value) {
        return value.stock;
    })
    console.log(stockNums);
    
    let lowStock = _.each(stockNums, function(stockNum, index){
        if (stockNum < 10){
            return $("#stock-id"+index).text("Only " + stockNum + " left!").attr("class", "h4 text-danger");
        }
    })
  
  
    });
  
  // ALL YOUR CODE GOES ABOVE HERE //
});