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
                            .attr("class", "row panel panel-default")
                            // DIV COL Price, 4
                            .append($("<div>")
                                .attr("class", "col-xs-3 h4")
                                .text("Price: $" + values.price)
                                .attr("id", "price-id"+index)
                            )
                            //DIV COL Stock, 4
                            .append($("<div>")
                                .attr("class", "col-xs-3 h4 stock-number")
                                .text("In Stock: " + values.stock)
                                .attr("id", "stock-id"+index)
                            )
                            
                            //DIV COL Specs, 4
                            .append($("<div>")
                                .attr("class", "col-xs-3 h4 specs-title")
                                .text("Specs ")
                                .attr("id", "specs-title" + [index])
                                .append($("<span>")
                                    .attr("class", "glyphicon glyphicon-question-sign")
                                )
                            )
                            //DIV COL Search, 4
                            .append($("<div>")
                                .attr("class", "col-xs-3 h4 to-search text-info")
                                .text("Search Again ")
                                .append($("<span>")
                                    .attr("class", "glyphicon glyphicon-search")
                                )
                            )
                        )
                        // DIV ROW Specs
                        .append($("<div>")
                            .attr("class", "row")
                            .attr("id", "specs-row" + index)
                        )
                            // DIV COL Spec Details, 10
                            .append($("<div>")
                                .attr("class", "col-xs-12 specs-details")
                                .attr("id", "specs-details" + [index])
                                .append($("<ul>")
                                    // .append($("<li>")
                                        .attr("id", "specs-list"+index)
                                        .append($("<div>")
                                            .text(values.specs)
                                        )
                                    // )
                                )
                                
                            )
                        )
                    )
                ;
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
    //      _.each(specArr, function(spec, ind){
    //         return $(spec).wrap("<li>");
    //     });
    // });
    
    // console.log(wrapSpecs);
    
   
    
    /************************Adding Low Stock Feature******************/

    let stockNums = _.map(data, function(value) {
        return value.stock;
    })
    console.log(stockNums);
    
    let lowStock = _.each(stockNums, function(stockNum, index){
        if (stockNum < 10){
            return $("#stock-id"+index).text("Only " + stockNum + " left!").attr("class", "h4 text-danger col-xs-3");
        }
    })
    
    /*******************Adding hyperlink to search button***********/
    
    $(".to-search").wrap('<a href="#featured"/>')
    
    /********************Add hide/show to specs*********************/
    $(".specs-details").hide();
    
    let showSpecs = _.each(".specs-title", function(element, index){
        return $("#specs-title" + index).click(function(){
            $("#specs-details" + index).toggle();
        });
        
    });
    
    $(".specs-title").hover(function(){
        return $(this).css('cursor', 'pointer');
    });
    
    
  
  
    });
  
  // ALL YOUR CODE GOES ABOVE HERE //
});


/*

Things to finish:
- Add alt text on featured phones
- add link to jump to spot on page
- add bullets for specs
*/