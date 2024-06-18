function warningfn(id){
try {
document.querySelector(`${id} .textwidget img`).onclick= ()=>{
document.querySelector(`${id}`).classList.add("d-none")
}	
} catch (error) {}
}
warningfn('#black-studio-tinymce-6')
warningfn('#black-studio-tinymce-7')
warningfn('#black-studio-tinymce-8')

try {
document.querySelector('html:lang(zh-TW)').setAttribute("lang", 'zh');
}catch (error) {}    
try {
document.querySelectorAll('a').forEach((e) => { e.href = e.toString().replace( '/p196/', '/' ); } );      
} catch (error) {}
try {
document.querySelectorAll('html:lang(zh):not(:lang(zh-CN)) #breadcrumbs span > span:first-child a').forEach((e) => { e.innerHTML = "主頁" } ); 
document.querySelectorAll('html:lang(zh):not(:lang(zh-CN)) #footer-widgets #nav_menu-2 h4').forEach((e) => { e.innerHTML = "網站地圖" } );
document.querySelectorAll('html:lang(zh):not(:lang(zh-CN)) #footer-widgets #nav_menu-3 h4').forEach((e) => { e.innerHTML = "披露" } );
document.querySelectorAll('html:lang(zh):not(:lang(zh-CN)) body:not(.single) .main-content a').forEach((e) => { 
	if(!e.toString().includes("zh")){
		e.href = e.toString().replace( 'www.hamon.com.hk/', 'www.hamon.com.hk/zh/' ); 	
	}
} ); 
} catch (error) {}
try {
document.querySelectorAll(':lang(zh-CN) #breadcrumbs span > span:first-child a').forEach((e) => { e.innerHTML = "主页" } );
document.querySelectorAll(':lang(zh-CN) #footer-widgets #nav_menu-2 h4').forEach((e) => { e.innerHTML = "网站地图" } );
document.querySelectorAll(':lang(zh-CN) #footer-widgets #nav_menu-3 h4').forEach((e) => { e.innerHTML = "披露" } );
document.querySelectorAll('html:lang(zh-CN) body:not(.single) .main-content a').forEach((e) => { 
	if(!e.toString().includes("cn")){
		e.href = e.toString().replace( 'www.hamon.com.hk/', 'www.hamon.com.hk/cn/' ); 
	}
} ); 
} catch (error) {}

try {
document.querySelectorAll('.wpb_row.vc_row').forEach((e)=>{e.setAttribute('style', '')
})
document.querySelector("#dynamic-css-css").removeAttribute("href");
}catch (error) {  

} 
jQuery(function(){

	try {
		document.querySelectorAll('.home-1 .nectar-slider-wrap.loaded .swiper-slide .content').forEach((e) => { e.classList.add("skpx-100") } );
		document.querySelectorAll('.home-1 .nectar-slider-wrap.loaded .swiper-slide .content p').forEach((e) => { e.classList.add("fs-55") } );
		// document.querySelectorAll('.home-1 .nectar-slider-wrap.loaded .swiper-slide .content p span').forEach((e) => { e.classList.add("skpb-50") } );
		document.querySelectorAll('.home-1 .nectar-slider-wrap.loaded .swiper-slide .content p span').forEach((e) => { e.style.display = "block" } );
		document.querySelectorAll('.home-1 .swiper-slide .button a').forEach((e) => { e.classList.add("fs-18") } );
		document.querySelectorAll('.home-3 .wpb_column.vc_col-sm-3 .vc_column-inner').forEach((e) => { e.classList.add("skpt-30" , "skpb-50") } );
		document.querySelectorAll('.home-5a > .row_col_wrap_12').forEach((e) => { e.classList.add("skpx-100") } );
		document.querySelectorAll('.home-5a .row_col_wrap_12  > .wpb_column > .vc_column-inner').forEach((e) => { e.classList.add("skpx-50" , "skpt-50" , "skpb-50") } );
		document.querySelectorAll('.home-7 .row_col_wrap_12 > .wpb_column:nth-child(2) > .vc_column-inner > .wpb_wrapper').forEach((e) => { e.classList.add("skpl-50") } );
		}catch (error) {  
		
	} 

});
try {
document.querySelectorAll('.skcallaction').forEach(function(each){ each.addEventListener('click', function() { each.querySelector('a').click() } ) })	
}catch (error) {  

} 
try {
document.querySelectorAll('#footer-widgets > .container > .row > .col:nth-child(4) .textwidget > p').forEach(function(each){ each.addEventListener('click', function() { each.querySelector('a').click() } ) })	
}catch (error) {  

}
try {
document.querySelectorAll('.our-people-section-two .inner_row .vc_col-sm-4 .vc_column-inner').forEach(function(each){ each.addEventListener('click', function() { each.querySelector('a').click() } ) })	
}catch (error) {  

} 
try {
document.querySelectorAll('.skpx-100js > .row_col_wrap_12').forEach((e) => { e.classList.add("skpx-100") } );
}catch (error) {  

}
try {
document.querySelectorAll('.skcallaction .text').forEach((e) => { e.classList.add("fs-22") } );
}catch (error) {  

}
try {
document.querySelectorAll('.home-6 .post .post-content .content-inner').forEach(function(each){ each.addEventListener('click', function() { each.querySelector('a').click() } ) })	
}catch (error) {  

} 
try {
var tocopy = document.querySelectorAll('.home-6 .post .post-content .content-inner .article-content-wrap > .post-header')

	for (let i = 0; i < tocopy.length; i++) {
		var addnewone = document.createElement('div')
		addnewone.innerHTML =  tocopy[i].outerHTML
		document.querySelectorAll('.home-6 .post .post-content .article-content-wrap > .meta-category')[i].appendChild(addnewone)
	  }

} catch (error) {
}  
try {
document.querySelectorAll('.home-6 .post .post-content .article-content-wrap > .meta-category .post-header .title a').forEach((e) => { e.classList.add("fs-35") } );	
} catch (error) {
}

jQuery(function(){

	try {
		document.querySelectorAll('.skbanner .inner-wrap > .subheader').forEach((e) => { e.classList.add("skpt-30" , "fs-22") } );
		document.querySelectorAll('.skbanner .inner-wrap > h1').forEach((e) => { e.classList.add("fs-55" , "skfwl") } );
		}catch (error) {  
		
	} 

});

try {
	document.querySelectorAll('.whatwedo-2 .row_col_wrap_12 .vc_col-sm-6:nth-child(2) .vc_column-inner').forEach((e) => { e.classList.add("skpl-100") } );
	document.querySelectorAll('.whatwedo-1 .row_col_wrap_12 .vc_col-sm-6:first-child .vc_column-inner .wpb_text_column .wpb_wrapper').forEach((e) => { e.classList.add("skpr-100") } );
	}catch (error) {  
	
} 
try {
	document.querySelectorAll('#breadcrumbs.yoast').forEach((e) => { e.classList.add("skpx-100") } );
	}catch (error) {  
	
} 
try {
	document.querySelectorAll('.abouthm-2 .row_col_wrap_12 .wpb_column:nth-child(2) .vc_column-inner').forEach((e) => { e.classList.add("skpr-100") } );
	document.querySelectorAll('.abouthm-2a .row_col_wrap_12 .wpb_column:first-child .vc_column-inner').forEach((e) => { e.classList.add("skpl-100") } );
	}catch (error) {  
	
} 
try {
	document.querySelectorAll('.supporting-2 .row_col_wrap_12 .wpb_column:nth-child(2) a').forEach((e) => { e.classList.add("text-main") } );
	}catch (error) {  
	
} 
try {
	document.querySelectorAll('.about-2 .row_col_wrap_12 .wpb_column:nth-child(2) .vc_column-inner').forEach((e) => { e.classList.add("skpl-50") } );
	}catch (error) {  
	
} 

try {
	document.querySelectorAll('.home-2 .row_col_wrap_12 .wpb_column:first-child .vc_column-inner .wpb_text_column .wpb_wrapper ').forEach((e) => { e.classList.add("skpx-130") } );
	document.querySelectorAll('.home-2.home-4a .row_col_wrap_12 .wpb_column:first-child .vc_column-inner .wpb_text_column').forEach((e) => { e.classList.add("skpr-100") } );
	document.querySelectorAll('.home-2 .row_col_wrap_12 .wpb_column:first-child .vc_column-inner .wpb_text_column .wpb_wrapper ').forEach((e) => { e.style.paddingLeft = "0px" } );
	document.querySelectorAll('.home-2a .row_col_wrap_12 .wpb_column:nth-child(2) .vc_column-inner').forEach((e) => { e.classList.add("skpx-130") } );
	document.querySelectorAll('.home-2a .row_col_wrap_12 .wpb_column:nth-child(2) .vc_column-inner').forEach((e) => { e.style.paddingRight = "0px" } );
	}catch (error) {  
	
} 
try {
	document.querySelectorAll('.public-2 .row_col_wrap_12 .wpb_column:first-child .vc_column-inner .wpb_text_column .wpb_wrapper ').forEach((e) => { e.classList.add("skpx-100") } );
	document.querySelectorAll('.public-2 .row_col_wrap_12 .wpb_column:first-child .vc_column-inner .wpb_text_column .wpb_wrapper ').forEach((e) => { e.style.paddingLeft = "0px" } );
	document.querySelectorAll('.public-2a .row_col_wrap_12 .wpb_column:nth-child(2) .vc_column-inner').forEach((e) => { e.classList.add("skpx-100") } );
	document.querySelectorAll('.public-2a .row_col_wrap_12 .wpb_column:nth-child(2) .vc_column-inner').forEach((e) => { e.style.paddingRight = "0px" } );
	document.querySelectorAll('.public-5 > .row_col_wrap_12').forEach((e) => { e.classList.add("skpx-100") } );
	document.querySelectorAll('.public-5 .row_col_wrap_12  > .wpb_column > .vc_column-inner .inner_row').forEach((e) => { e.classList.add("skpx-50" , "skpt-50" , "skpb-50") } );
	}catch (error) {  
	 
}
try {
	document.querySelectorAll('.join-2 .row_col_wrap_12  > .wpb_column:nth-child(2) > .vc_column-inner .inner_row').forEach((e) => { e.classList.add("skpx-50" , "skpt-50" , "skpb-50") } );
	document.querySelectorAll('.join-2 .row_col_wrap_12 > .wpb_column:nth-child(2) > .vc_column-inner').forEach((e) => { e.classList.add("skpx-100") } );
	document.querySelectorAll('.join-2 .row_col_wrap_12 > .wpb_column:nth-child(2) > .vc_column-inner').forEach((e) => { e.style.paddingRight = "0px" } );
	}catch (error) {  
	 
}
try {
	document.querySelectorAll('.corporate-2 .row_col_wrap_12 > .wpb_column:first-child .vc_column-inner').forEach((e) => { e.classList.add("skpx-130") } );
	document.querySelectorAll('.corporate-2 .row_col_wrap_12 > .wpb_column:first-child .vc_column-inner').forEach((e) => { e.style.paddingLeft = "0px" } );
	document.querySelectorAll('.corporate-2a .row_col_wrap_12 .wpb_column:nth-child(2) .vc_column-inner').forEach((e) => { e.classList.add("skpx-100") } );
	document.querySelectorAll('.corporate-2a .row_col_wrap_12 .wpb_column:nth-child(2) .vc_column-inner').forEach((e) => { e.style.paddingRight = "0px" } );
	}catch (error) {  
	 
}
try {
	document.querySelectorAll('.corporate-2 .fs-24').forEach((e) => { e.classList.replace("fs-24", "fs-22"); } );
	document.querySelectorAll('.corporate-2a .fs-24').forEach((e) => { e.classList.replace("fs-24", "fs-22"); } );
	}catch (error) {  
	 
}
try {
	document.querySelectorAll('.corporate-1 .fs-24').forEach((e) => { e.classList.replace("fs-24", "fs-22"); } );
	document.querySelectorAll('.corporate-3 .fs-24').forEach((e) => { e.classList.replace("fs-24", "fs-22"); } );
	document.querySelectorAll('.corporate-4 .fs-24').forEach((e) => { e.classList.replace("fs-24", "fs-22"); } );
	}catch (error) {  
	 
}
try {
	document.querySelectorAll('.pipa-2 .fs-24').forEach((e) => { e.classList.replace("fs-24", "fs-22"); } );
	}catch (error) {  
	 
}
try {
	document.querySelectorAll('.pioffering-2 .fs-24').forEach((e) => { e.classList.replace("fs-24", "fs-22"); } );
	document.querySelectorAll('.pioffering-3 .fs-24').forEach((e) => { e.classList.replace("fs-24", "fs-22"); } );
	document.querySelectorAll('.pioffering-4 .fs-24').forEach((e) => { e.classList.replace("fs-24", "fs-22"); } );
	}catch (error) {  
	 
}
try {
	document.querySelectorAll('.join-2 .fs-24').forEach((e) => { e.classList.replace("fs-24", "fs-22"); } );
	}catch (error) {  
	 
}
try {
	document.querySelectorAll('.pv-ourteam2 .fs-24').forEach((e) => { e.classList.replace("fs-24", "fs-22"); } );
	document.querySelectorAll('.pv-ourteam3 .fs-24').forEach((e) => { e.classList.replace("fs-24", "fs-22"); } );
	}catch (error) {  
	 
}
try {
	document.querySelectorAll('.our-people-section-two .fs-24').forEach((e) => { e.classList.replace("fs-24", "fs-22"); } );
	}catch (error) {  
	 
}
try {
	document.querySelectorAll('.pioffering-4 .row_col_wrap_12 > .wpb_column:first-child .vc_column-inner').forEach((e) => { e.classList.add("skpx-100") } );
	document.querySelectorAll('.pioffering-4 .row_col_wrap_12 > .wpb_column:first-child .vc_column-inner').forEach((e) => { e.style.paddingLeft = "0px" } );
	document.querySelectorAll('.pioffering-3 .row_col_wrap_12 .wpb_column:nth-child(2) .vc_column-inner').forEach((e) => { e.classList.add("skpx-100") } );
	document.querySelectorAll('.pioffering-3 .row_col_wrap_12 .wpb_column:nth-child(2) .vc_column-inner').forEach((e) => { e.style.paddingRight = "0px" } );
	}catch (error) {  
	 
}
try {
	document.querySelectorAll('.about-3 .row_col_wrap_12 .wpb_column:first-child .vc_column-inner .wpb_text_column .wpb_wrapper ').forEach((e) => { e.classList.add("skpx-50") } );
	document.querySelectorAll('.about-3 .row_col_wrap_12 .wpb_column:first-child .vc_column-inner .wpb_text_column .wpb_wrapper ').forEach((e) => { e.style.paddingLeft = "0px" } );
	}catch (error) {  
	
} 

try {
	var h3screen =  window.matchMedia("(min-width: 479px)")
	if (h3screen.matches) {

		var h3head = document.querySelectorAll('.home-3 .row_col_wrap_12_inner .vc_column-inner .vc_custom_heading')
		for (let i = 0; i < h3head.length; i++) {
			if( i != 2){
				h3head[i].style.height = (h3head[2].clientHeight) + 'px'
			}
		}

	}
	}catch (error) {  
	
} 
try {
	var p5screen =  window.matchMedia("(min-width: 1000px)")
	if (p5screen.matches) {

		var p5head = document.querySelectorAll('.public-5 .row_col_wrap_12 > .wpb_column > .vc_column-inner .vc_row-fluid h2')
		var p5body = document.querySelectorAll('.public-5 .row_col_wrap_12 > .wpb_column > .vc_column-inner .vc_row-fluid .wpb_text_column > .wpb_wrapper > *')
		for (let i = 0; i < p5body.length; i++) {
			if( i != 2){
				p5body[i].style.height = (p5body[2].clientHeight) + 'px';
				p5head[i].style.height = (p5head[2].clientHeight) + 'px';
			}
		}
	}
	}catch (error) {  
	
} 
try {
	var p5ascreen =  window.matchMedia("(min-width: 1000px)")
	if (p5ascreen.matches) {

		var p5ahead = document.querySelectorAll('.public-5.private-5 .row_col_wrap_12 > .wpb_column > .vc_column-inner .vc_row-fluid h2')
		var p5abody = document.querySelectorAll('.public-5.private-5 .row_col_wrap_12 > .wpb_column > .vc_column-inner .vc_row-fluid .wpb_text_column > .wpb_wrapper > *')
		for (let i = 0; i < p5abody.length; i++) {
			if( i != 2){
				p5abody[i].style.height = (p5abody[1].clientHeight) + 'px';
				p5ahead[i].style.height = (p5ahead[1].clientHeight) + 'px';
			}
		}
	}
	}catch (error) {  
	
} 

function teamheightfn(){
try {
var teamheight = document.querySelectorAll('.public-investment-team-section .row_col_wrap_12_inner > .vc_col-sm-4 .vc_column-inner .wpb_text_column')
let skheight = [];
for (let i = 0; i < teamheight.length; i++) {
	skheight.push(teamheight[i].clientHeight);
}
let skheightmax = 0;
skheightmax = Math.max(...skheight);
document.querySelectorAll('.public-investment-team-section .row_col_wrap_12_inner > .vc_col-sm-4 > .vc_column-inner').forEach((e) => { e.style.height = skheightmax + 'px'; } );
} catch (error) {
}
}
window.addEventListener('DOMContentLoaded', teamheightfn );
window.addEventListener("resize", teamheightfn);

function ateamheightfn(){
try {
var ateamheight = document.querySelectorAll('.public-investment-team-section .row_col_wrap_12_inner > .vc_col-sm-3 > .vc_column-inner .wpb_text_column')
let askheight = [];
for (let i = 0; i < ateamheight.length; i++) {
	askheight.push(ateamheight[i].offsetHeight);
}

let askheightmax = 0;
askheightmax = Math.max(...askheight);
document.querySelectorAll('.public-investment-team-section .row_col_wrap_12_inner > .vc_col-sm-3 > .vc_column-inner').forEach((e) => { e.style.height = askheightmax + 'px'; } );
} catch (error) {
}
}
window.addEventListener('DOMContentLoaded', ateamheightfn );
window.addEventListener("resize", ateamheightfn);

try {
document.querySelectorAll('.public-investment-team-section .public-team-block h2').forEach((e) => { e.classList.add("fs-35") } );
}catch (error) {  

}
try {
var addnewone = document.createElement('a')
addnewone.setAttribute("rel", "nofollow");
addnewone.innerHTML =  "Site by Visible One."
addnewone.href ="https://visibleone.com/services/web-development/"
addnewone.style.color = "#fff"
document.querySelector('#copyright .widget > .textwidget >.col.text-right').appendChild(addnewone)
} catch (error) {
}
try {
document.querySelectorAll('.public-investment-team-section .row_col_wrap_12_inner > .wpb_column > .vc_column-inner').forEach(function(each){ each.addEventListener('click', function() { each.querySelector('a').click() } ) })	
} catch (error) {
}
try {
document.querySelectorAll('.our-team-toggle-section .row_col_wrap_12_inner > .wpb_column > .vc_column-inner').forEach(function(each){ each.addEventListener('click', function() { each.querySelector('a').click() } ) })	
} catch (error) {
}
// window.addEventListener('DOMContentLoaded', function(){
// 	window.open("https://devwp.visibleone.io/p196/")
// })

// function close_window() {
// 	if (confirm("Close Window?")) {
// 		window.open('','_self').close();
// 	}
//   }
// try {
// 	window.addEventListener('DOMContentLoaded', function(){
// 		document.querySelectorAll('.home-2 .mainbtn').forEach(function(each){ each.addEventListener('click', close_window ) })	
// 	});
// } catch (error) {
// }
function headerspacefn(){
	try {
	var headerspace = document.querySelector('#header-outer').clientHeight
	document.querySelector('#header-space').style.height = headerspace + 'px' + '!important';
	} catch (error) {}
}
window.addEventListener('DOMContentLoaded', headerspacefn );
window.addEventListener("resize", headerspacefn);

try {

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
	
} catch (error) {
}

try {
document.querySelectorAll('.tcu h3').forEach((e) => { e.classList.add("text-light" , "skpt-30" , "fs-30") } );
document.querySelectorAll('.tcu h3').forEach((e) => { e.style.fontWeight = 600 } );
document.querySelectorAll('.tcu h4').forEach((e) => { e.classList.add("fs-22") } );
document.querySelectorAll('.tcu h4').forEach((e) => { e.style.fontWeight = 600 } );
document.querySelectorAll('.tcu h4').forEach((e) => { e.style.color = "#505050" } );
document.querySelectorAll('.tcu h5').forEach((e) => { e.classList.add("fs-18" , "skpb-30" , "skmb-0") } );
document.querySelectorAll('.tcu h5').forEach((e) => { e.style.fontWeight = 600 } );
document.querySelectorAll('.tcu h6').forEach((e) => { e.classList.add("text-light","fs-18") } );
document.querySelectorAll('.tcu h6').forEach((e) => { e.style.fontWeight = 700 } );
document.querySelectorAll('.tcu p').forEach((e) => { e.classList.add("fs-18" , "skpb-30") } );
document.querySelectorAll('.tcu li').forEach((e) => { e.classList.add("fs-18") } );
document.querySelectorAll('.tcu p').forEach((e) => { e.style.color = "#5e5e5e" } );
document.querySelectorAll('.tcu li').forEach((e) => { e.style.color = "#5e5e5e" } );
}catch (error) {  

}

try {
document.querySelectorAll('.page-our-people .our-team-toggle-section .row_col_wrap_12_inner > .wpb_column > .vc_column-inner').forEach((e) => { e.classList.add("skpb-75") } );
}catch (error) {  

}
jQuery(function(){
try {
document.querySelectorAll('.nectar-post-grid ~ .load-more-wrap .load-more').forEach((e) => { e.classList.add("fs-18") } );
}catch (error) { }
});
try{
var skclose = document.querySelectorAll(".sknav .sknav-close");
skclose.forEach(function(e){ e.addEventListener("click", skclosefn)});
function skclosefn(){
document.querySelectorAll('.sknav').forEach(function(e){ e.style.transform="translateX(-100%)";});	
} 
} 
catch(error){}
try{
var skicon = document.querySelectorAll(".sknav-icon");
skicon.forEach(function(e){ e.addEventListener("click", skiconfn)});
function skiconfn(){
document.querySelectorAll('.sknav').forEach(function(e){ e.style.transform="translateX(-0%)";});
document.querySelectorAll('.sknav').forEach(function(e){ e.style.display="block";});		
}
}
catch(error){}

if( document.querySelector('html:lang(en) #sg-popup-content-wrapper-3919')
  || document.querySelector('html:lang(en) #sg-popup-content-wrapper-4027') 
  || document.querySelector('html:lang(en) #sg-popup-content-wrapper-4029')
  ){
try{
document.querySelectorAll('.sgpb-main-html-content-wrapper .d-flex').forEach((e) => { e.classList.add("skpt-30") } )
document.querySelectorAll('.sgpb-main-html-content-wrapper .content').forEach((e) => { e.classList.add("skpt-15") } )
document.querySelectorAll('.sgpb-main-html-content-wrapper h2').forEach((e) => { e.classList.add("skpb-15", "fs-45", "text-light") } )
document.querySelectorAll('.sgpb-main-html-content-wrapper h3').forEach((e) => { e.classList.add("skpb-15", "fs-30") } )
document.querySelectorAll('.sgpb-main-html-content-wrapper h2').forEach((e) => { e.style.fontWeight="600"} )
document.querySelectorAll('.sgpb-main-html-content-wrapper h3').forEach((e) => { e.style.fontWeight="600"} )
document.querySelectorAll('.sgpb-main-html-content-wrapper h6').forEach((e) => { e.classList.add("fs-22", "text-btn", "skfwb" , "skpt-15" , "skpb-15" , "skmb-0") } )
document.querySelectorAll('.sgpb-main-html-content-wrapper p').forEach((e) => { e.classList.add("skpb-30", "text-gray") } )
document.querySelectorAll('.sgpb-main-html-content-wrapper strong').forEach((e) => { e.classList.add("skfwn", "text-underline") } )
document.querySelectorAll('.sgpb-main-html-content-wrapper ul').forEach((e) => { e.classList.add("skmb-0") } )
document.querySelectorAll('.sgpb-main-html-content-wrapper ul li').forEach((e) => { e.classList.add("skpb-30", "text-gray") } )
document.querySelectorAll('.sgpb-main-html-content-wrapper button').forEach((e) => { e.classList.add("skbtn", "nectar-button", "w-205", "round-0" , "fs-18") } )
document.querySelectorAll('.sgpb-main-html-content-wrapper > div').forEach((e) => { e.classList.add("skpb-50", "btngroup") } )
document.querySelectorAll('.sgpb-main-html-content-wrapper > h6').forEach((e) => { e.style.paddingTop = "0px" } )	
}catch(error){}	
}

