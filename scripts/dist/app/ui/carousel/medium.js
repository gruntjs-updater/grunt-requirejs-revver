define(["jquery","brotator","scrollitup","evensteven","ajaxInclude"],function(e){return{$carousels:null,initEqualisation:function(t){this.$carousels=e(".js-carousel");var n=this.$carousels.data("plugin_evenSteven");if(!n){if(!this.$carousels.length){this.initLoad(t);return}this.equalisePods(t.columns)}else n.update({columns:t.columns})},initLoad:function(t){var n=this;e(".carousel").parent(".lazy-content").on("ajaxInclude",function(){setTimeout(function(){n.checkForImages(),t&&t.init==="rotator"?n.initRotator():n.initEqualisation(t)},100)})},initRotator:function(){this.$carousels=e(".js-carousel"),this.$carousels.length?e(".js-carousel").brotator({content:".js-carousel-content",timeout:8e3,easing:"easeInOutSine",contentSetup:"responsive",animation:"slide",hasMenu:!1,hasButtons:!0,next:".btn-direction-next",previous:".btn-direction-prev",animationSpeed:500,lazyloader:!0,namespace:"/medium-carousel",autorotate:!1}):this.initLoad({init:"rotator"}),this.setData()},checkForImages:function(){e(".js-carousel-lazy").find(".carousel-wrapper").length&&e.publish("/lazyload/loadimages",[e(".js-carousel-lazy")])},setData:function(){this.$carousels.data("carousel","true")},removeData:function(){this.$carousels.removeData("carousel")},equalisePods:function(e){this.$carousels.evenSteven({columns:e,resize:!0})},destroy:function(){this.$carousels.each(function(){e(this).brotator("destroy")}),this.$carousels.each(function(){e(this).evenSteven("destroy")}),this.removeData()}}});