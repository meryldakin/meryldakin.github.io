/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        // Add titles to top rated list
        let topRatedList = data.discography.topRated;
        
        let topRatedTitle = _.map(topRatedList, function(record, index){
            return $("<li>")
                .attr("id", "topRatedImg" + index)
                .attr("class", "li-text")
                .addClass("top-rated")
                .text(record.title)
                .appendTo('#list-top-rated');
        });
        
        
          
        
        //Adding new section//
        // each line will be list item, each key/value pair will have its own div
        
        // Making the section
        let $recordingsSection = $("<section>").attr("id", "section-recordings");
        let $recordingHeader = $("<header>").text("Recordings");
        let $recordingsList = $("<ul>").attr("id", "list-recordings");
        $recordingsSection.append($recordingHeader);
        $recordingsSection.appendTo("#sidebar");
        $recordingsSection.append($recordingsList);
        
    
        // Iterating through the data to populate the lists
        let $recordings = _.values(data.discography.recordings);
        let $titles = _.map($recordings, function(record, index){
            
            var $listRecordings = $("<ul>").attr("id", "list-recordings");
              
            var title = $("<div>").attr("class", "title")
                 .text("Title: " + record.title)
                
            var artist = $("<div>").attr("class", "artist")
                 .text("Artist: " + record.artist)
                
            var release = $("<div>").attr("class", "release")
                 .text("Release: " + record.release)
                
            var year = $("<div>").attr("class", "year")
                 .text("Year: " + record.year)
                 
            var $eachRecord = $("<li>").attr("id", "recording" + index)
                .attr("class", "general-recordings-list")
                .attr("class", "li-text")
                .appendTo("#list-recordings")
                .append(title, artist, release, year);
        });
        
        let $topRatedImage = $("<div>").attr("id", "top-rated-image").appendTo("#header-top-rated");
        let $recordingsImage = $("<div>").attr("id", "image-container-recording").appendTo($recordingHeader);
        
        let $billyImage1 = $("<img>").attr("id", "image1")
            .attr('src', "images/album/voice-in-the-night.jpg")
            .appendTo("#top-rated-image");
            
        let $billyImage2 = $("<img>").attr("id", "image2")
            .attr('src', "images/album/eastern-rebellion.jpg")
            .appendTo("#image-container-recording");
            
            
        // Swap Main Billy Image
            //create the images to swap between
        
        
        var billyImg0 = "images/billy/billy-0.jpg";
        var billyImg1 = "images/billy/billy-1.jpg";
        var billyImg2 = "images/billy/billy-2.jpg";
        var billyImg3 = "images/billy/billy-3.jpg";
        var imageSwap = [billyImg0, billyImg1, billyImg2, billyImg3];
        
        let billyImgCounter = 0;
        $("#image-billy").on('click', function(){
            billyImgCounter++;
            
            let swap = billyImgCounter < 4 ? $("#image-billy").attr("src", imageSwap[billyImgCounter]) : billyImgCounter = -1;
            
            swap.hide().fadeIn(1000);
            
            
        });
        
        
            
        // Swap Top Recording Images
        
        let topRatedImageArray = _.pluck(data.discography.topRated, "art");
        
        $("#topRatedImg0").on('click', function(){
            return $billyImage1.attr('src', topRatedImageArray[0]).hide().fadeIn(1000);
        });
        $("#topRatedImg1").on('click', function(){
            return $billyImage1.attr('src', topRatedImageArray[1]).hide().fadeIn(1000);
        });
        $("#topRatedImg2").on('click', function(){
            return $billyImage1.attr('src', topRatedImageArray[2]).hide().fadeIn(1000);
        });
        $("#topRatedImg3").on('click', function(){
            return $billyImage1.attr('src', topRatedImageArray[3]).hide().fadeIn(1000);
        });
        $("#topRatedImg4").on('click', function(){
            return $billyImage1.attr('src', topRatedImageArray[4]).hide().fadeIn(1000);
        });
        
        // Swap General Recording Images
        let generalImageArray = _.pluck(data.discography.recordings, "art");
        let generalRecordingsArray = [
            '#recording0',
            '#recording1',
            '#recording2',
            '#recording3',
            '#recording4',
            '#recording5',
            '#recording6',
            '#recording7',
            '#recording8',
            '#recording9',
            ];
        generalRecordingsArray.map(function (element, index){
            $(element).on('click', function(){
                return $billyImage2.attr('src', generalImageArray[index]).hide().fadeIn(1000);
            });
        });
        //better way: $('.top-rated').on('click', {id: 'image-container'}, replaceImage);
        // replaceImage is its own function
        
        
        // Make a table
        
        
        
        var createTable = function(rider){
            var createRow = function(equipment){
                var $row = $("<tr>");
                var $type = $("<td>").text(equipment.type)
                var $desc = $("<td>").text(equipment.desc);
                $row.append($type);
                $row.append($desc);
                return $row;
            };
            var $table = $("<table>");
            var $rows = rider.map(createRow);
            $table.append($rows);
            return $table;
        };
        
        let rider = data.rider;
        
        createTable(rider).appendTo("#sections");
        $("<header>").text("Billy's Rider").appendTo("#section-quotes");
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


