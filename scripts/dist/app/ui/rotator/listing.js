define(["jquery","brotator"],function(e){return{$listingRotator:null,init:function(){this.$listingRotator=e(".js-rotator-listing"),this.$listingRotator.find(".js-rotator-content").find("li").length>1&&this.$listingRotator.brotator({content:".js-rotator-content",timeout:8e3,easing:"easeInOutExpo",hasMenu:!0,hasButtons:!0,next:".js-next",previous:".js-prev",animationSpeed:500,contentSetup:"responsive",lazyloader:!0,animation:"slide",namespace:"/listing-rotator",autorotate:!1})},destroy:function(){this.$listingRotator.brotator("destroy")}}});