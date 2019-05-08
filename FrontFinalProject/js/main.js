$(document).ready(function() {
    "use strict"

    let index = 0;
    let innerWidth = $(".photo-lent").innerWidth();

    $(document).on("click",".right-arrow",function() {

        index++;

        $(".photo-lent").css({left: -index * innerWidth + "px"});

        if(index == $(".photo-lent img").length) {

            index = 0;

            $(".photo-lent").css({left: -index * innerWidth + "px"});
        }
    });

    $(document).on("click",".left-arrow",function() {

        index--;

        $(".photo-lent").css({left: -index * innerWidth + "px"});

        if(index < 0) {

            index = $(".photo-lent img").length - 1;

            $(".photo-lent").css({left: -index * innerWidth + "px"});
        }
    })
});

$(document).ready(function (){
    "use strict"

    $(document).on("click", "#search-tab .search-tab-list a", function(e) {
        
        $("#search-tab .search-tab-list a.active").removeClass("active");
        $(this).addClass("active");     
        e.preventDefault();   

        let dataIndex = $(this).attr("data-index");
        $("#search-tab .container.active-container").removeClass("active-container");
        let dataInfo = $(`#search-tab .container[data-info="${dataIndex}"]`);
        dataInfo.addClass("active-container");
        
    })

})