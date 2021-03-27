
//  TOOLTIP SCRIPT

//  <script>
//  $(document).ready(function() {
//     $('[data-toggle="tooltip"]').tooltip();
//  });
// </script> 



$(document).ready(function() {
    $("#mycarousel").carousel({interval: 2000});
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }  
    })

    $("#loginButton").click(function() {
       $("#loginButton").attr("data-toggle","modal");
       $("#loginButton").attr("data-target","#loginModal");
    })

    $("#reserveButton").click(function() {
        $("#reserveButton").attr("data-toggle","modal");
        $("#reserveButton").attr("data-html","true");
    })
})