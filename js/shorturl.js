$(document).ready(function () {
    
    var user_url;
    
    $(".result-container").hide();

    $('#inputurl').keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            user_url =  $("#inputurl").val();
            shorturl(user_url);
        }
    });

    $(".btn-submit").click(function (e) { 
        user_url =  $("#inputurl").val();
        shorturl(user_url);
    });


    function shorturl(user_url) {
            
        if(user_url == ""){
            $(".error").slideDown();
            $(".error").html("* Please Enter URL !");
        }
        else{
            
                jQuery.ajax({
                    type: "GET",
                    url: "https://api.shrtco.de/v2/shorten?url="+user_url,
                    dataType: "json",
                    success: function(data){
                        
                        $(".error").hide();
                        $("#copybox").val(data.result.short_link);
                        $(".result-container").show();
                    },
                    error: function(){
                        $(".error").slideDown();
                        $(".error").html("* URL Not Recognize !");

                    }
                });

                
        }
    }

    
    $(".copy-btn").click(function () { 
     
      
        var copyText= $("#copybox");
     
        copyText.select();
    

        document.execCommand("copy");
        
        
    });
});

