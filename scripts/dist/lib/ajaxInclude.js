(function(e,t){e.fn.ajaxInclude=function(t){function u(t){var n=t.data("url");o.proxy&&e.inArray(n,r)===-1?(r.push(n),i=i.add(t)):a(t.data("url"),t)}function a(t,n){e.get(t,function(e){n.trigger("ajaxIncludeResponse",[e])})}function f(){r.length&&(a(o.proxy+r.join(","),i),i=e(),r=[])}function l(e,t){function i(){u(e),f(),r.removeListener(i)}var r=n.matchMedia(t);r.addListener&&r.addListener(i)}var n=window,r=[],i=e(),s="data-ajax-bound",o={proxy:null};return typeof t=="string"?o.proxy=t:o=e.extend(o,t),this.not("["+s+"]").each(function(t){var r=e(this),i=r.attr("data-media"),a=["append","replace","before","after"],f,c;for(var h=a.length,p=0;p<h;p++)r.is("[data-"+a[p]+"]")&&(f=a[p],c=r.attr("data-"+f));f==="replace"&&(f+="With"),r.data("method",f).data("url",c).attr(s,!0).bind("ajaxIncludeResponse",function(e,t){var n=t;if(o.proxy){var i=n.match(new RegExp("<entry url=[\"']?"+r.data("url")+"[\"']?>(?:(?!</entry>)(.|\n))*","gmi"));i&&(n=i[0])}var s=r.triggerHandler("ajaxIncludeFilter",[n]);s&&(n=s),f==="replaceWith"?r.trigger("ajaxInclude",[n])[r.data("method")](n):r[r.data("method")](n).trigger("ajaxInclude",[n])}),!i||n.matchMedia&&n.matchMedia(i).matches?u(r):i&&n.matchMedia&&l(r,i)}),f(),this}})(jQuery);