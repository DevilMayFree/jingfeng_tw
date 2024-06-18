function sameheightfn(){
  try {
    var teamheight = document.querySelectorAll('.commentaries-section .nectar-post-grid .nectar-post-grid-item .content .post-heading')
    let skheight = [];
    for (let i = 0; i < teamheight.length; i++) {
      skheight.push(teamheight[i].clientHeight);
    }
    let skheightmax = 0;
    skheightmax = Math.max(...skheight);
    document.querySelectorAll('.commentaries-section .nectar-post-grid .nectar-post-grid-item .content .post-heading').forEach((e) => { e.style.height = skheightmax + 'px'; } );
  } catch (error) {}
}
window.addEventListener('DOMContentLoaded', sameheightfn );
window.addEventListener("resize", sameheightfn);

window.addEventListener('DOMContentLoaded', (event) => {
try {
document.querySelector("#breadcrumbs.yoast:lang(zh-CN) .breadcrumb_last").innerHTML = document.querySelector("#breadcrumbs.yoast:lang(zh-CN) .breadcrumb_last").innerHTML.toString().replace( 'pbcn', '' ); 
} catch (error) {}
try {
document.querySelector("#breadcrumbs.yoast:lang(zh):not(:lang(zh-CN))").innerHTML = document.querySelector("#breadcrumbs.yoast:lang(zh):not(:lang(zh-CN))").innerHTML.toString().replace( 'pbzh', '' ); 	
} catch (error) {}
});

function disclaimerAccept(arr,ck){
    arr.forEach(({id}) => {
      try {
      document.querySelector(` #sg-popup-content-wrapper-${id} .sgpb-main-html-content-wrapper div > button:last-child`).onclick = ()=>{ 
        document.querySelectorAll('#sgpb-popup-dialog-main-div-wrapper').forEach((e)=>{e.style.display = 'none';});
        document.querySelectorAll('.sgpb-popup-overlay').forEach((e)=>{e.style.display = 'none';});
    
        const date = new Date();
        const day = 7;const hour = 24;const minute = 60;const second = 60;const milisecond = 1000;
    
        date.setTime(date.getTime() + day * hour * minute * second * milisecond);
    
        document.cookie =`${ck}1; expires=` + date.toUTCString() +"; path=/";}
      } catch (error) {}
      });
}
function disclaimerCookie(arr,ck){
    try {
    var valueCookies = document.cookie.split("; ").find((r) => r.startsWith(`${ck}`))?.split("=")[1];	
    if (valueCookies=='1') {
    document.querySelectorAll('#sgpb-popup-dialog-main-div-wrapper').forEach((e)=>{e.style.display = 'none';});
    document.querySelectorAll('.sgpb-popup-overlay').forEach((e)=>{e.style.display = 'none';});
    }else{
	  document.querySelectorAll('.sgpb-popup-overlay').forEach((e)=>{e.style.display = 'block';});
      arr.forEach(({id}) => {
          try{document.querySelector(`#sg-popup-content-wrapper-${id}`).style.display = 'block';}catch(error){}
          try{document.querySelector(`.sgpb-popup-overlay-${id}`).style.display = 'block';}catch(error){}
      })
    }
    } catch (error) {}
}

  const homedp = [
  { id: '3919'},{ id: '4819'},{ id: '4817'}
  ];
  const homeck = "disclaimer_accept="
  const publicdp = [
  { id: '4027'},{ id: '4821'},{ id: '4818'}
  ];
  const publicck = "disclaimer_accept_b="
  const privatedp = [
  { id: '4029'},{ id: '4825'},{ id: '4820'}
  ];
  const privateck = "disclaimer_accept_v="
  disclaimerAccept(homedp,homeck)
  disclaimerAccept(publicdp,publicck)
  disclaimerAccept(privatedp,privateck)

  disclaimerCookie(homedp,homeck)
  disclaimerCookie(publicdp,publicck)
  disclaimerCookie(privatedp,privateck)

			
jQuery(function(){

  try {
	document.querySelectorAll('header .container').forEach((e) => { e.classList.add("skpt-30" , "skpb-30") });
	document.querySelectorAll('#top nav > ul > li > a').forEach((e) => { e.classList.add("fs-18") });
	document.querySelectorAll('#header-outer .sf-menu li ul li a').forEach((e) => { e.classList.add("fs-18") });
	document.querySelectorAll('.amr_widget .menu').forEach((e) => { e.classList.add("container") });
	document.querySelectorAll('#slide-out-widget-area.inner .off-canvas-menu-container li li a').forEach((e) => { e.classList.add("fs-18") });
	document.querySelectorAll('#slide-out-widget-area .inner .off-canvas-menu-container li a').forEach((e) => { e.classList.add("fs-18") });
	document.querySelectorAll('#footer-outer #footer-widgets .container').forEach((e) => { e.classList.add("skpt-100" , "skpb-100") });
	document.querySelectorAll('#footer-outer .container .col .widget_nav_menu div .menu').forEach((e) => { e.classList.add("skpt-30" , "skpb-30") });
	document.querySelectorAll('#footer-outer .container #black-studio-tinymce-3 .textwidget').forEach((e) => { e.classList.add("skpt-30" , "skpb-30") });
	document.querySelectorAll('#footer-outer #copyright .col').forEach((e) => { e.classList.remove("span_5") });
	document.querySelectorAll('#footer-outer #copyright').forEach((e) => { e.classList.remove("row") });
	document.querySelectorAll('#footer-outer').forEach((e) => { e.classList.add("fs-18") } );
	document.querySelectorAll('#footer-outer h4').forEach((e) => { e.classList.add("fs-22") } );
	document.querySelectorAll('#copyright').forEach((e) => { e.classList.add("fs-18") } );
    }catch (error) {  
    console.log(error)
  } 
}); 

try {
	document.querySelectorAll('.yoast').forEach((e) => { e.classList.add("fs-18") });
    }catch (error) {  
    console.log(error)
  }

try {
	document.querySelectorAll('.esg-section-two .row_col_wrap_12').forEach((e) => { e.classList.add("skpx-100" , "skpb-75") });
	document.querySelectorAll('.esg-section-two .row_col_wrap_12_inner > .vc_col-sm-8 > .vc_column-inner').forEach((e) => { e.classList.add("skpx-50") });
	document.querySelectorAll('.esg-section-two .row_col_wrap_12_inner > .vc_col-sm-4 > .vc_column-inner').forEach((e) => { e.classList.add("skpx-50") });
    }catch (error) {  
    console.log(error)
  } 

try {
	document.querySelectorAll('.page-id-1002 .container-wrap .main-content .row_col_wrap_12').forEach((e) => { e.classList.add("skpx-100") });
	document.querySelectorAll('.page-id-1002 .container-wrap .toggles.accordion').forEach((e) => { e.classList.add("fund-pricing") });
	document.querySelectorAll('.fund-pricing .toggle-title .toggle-heading').forEach((e) => { e.classList.add("fs-35") });	
    }catch (error) {  
    console.log(error)
  } 

try {
	document.querySelectorAll('.reports-section .row_col_wrap_12').forEach((e) => { e.classList.add("skpx-100") });

    }catch (error) {  
    console.log(error)
  } 

try {
    	document.querySelectorAll('.single-post .container-wrap .container .post-area .category-sustainability-related-disclosures').forEach((e) => { e.classList.add("skpx-100") });
    }catch (error) {  
    console.log(error)
  } 

try {
    	document.querySelectorAll('.single-post .container-wrap .container .post-area .category-fund-related-policy').forEach((e) => { e.classList.add("skpx-100") });
    }catch (error) {  
    console.log(error)
  } 

try {
	document.querySelectorAll('.update-announcement-section-two .nectar-button i.fa').forEach((e) => { e.classList.add("fs-22") });
	document.querySelectorAll('.update-announcement-section-two .row_col_wrap_12_inner > .vc_col-sm-6 > .vc_column-inner').forEach((e) => { e.classList.add("skpx-50" , "skpt-50" , "skpb-50") });
	document.querySelectorAll('.public-investment-team-section .row_col_wrap_12_inner > .wpb_column > .vc_column-inner').forEach((e) => { e.classList.add("public-team-block") });
	document.querySelectorAll('.public-investment-team-section .row_col_wrap_12_inner > .vc_col-sm-4 > .vc_column-inner .wpb_wrapper .wpb_content_element').forEach((e) => { e.classList.add("skpt-30" , "skpb-30") });
    }catch (error) {  
    console.log(error)
  } 

try {
	document.querySelectorAll('.commentaries-section .masonry.material .masonry-blog-item .meta-category a').forEach((e) => { e.classList.add("fs-18") });
	document.querySelectorAll('.commentaries-section .masonry.material .masonry-blog-item .meta-category a').forEach((e) => { e.removeAttribute("href") });
	document.querySelectorAll('.commentaries-section .nectar-post-grid-wrap .nectar-post-grid .content .meta-category').forEach((e) => { e.classList.add("fs-18") });
    }catch (error) {  
    console.log(error)
  } 

try {
	document.querySelectorAll('.get-in-touch-section .row_col_wrap_12').forEach((e) => { e.classList.add("skpx-100") });
	document.querySelectorAll('.contact-form-section .row_col_wrap_12').forEach((e) => { e.classList.add("skpx-100") });
	document.querySelectorAll('.contact-form-section .wpforms-field-number').forEach((e) => { e.classList.add("phone-number") });
	document.querySelectorAll('.contact-form-section .row_col_wrap_12 > .vc_col-sm-7:last-child > .vc_column-inner').forEach((e) => { e.classList.add("skpl-50") });
	document.querySelectorAll('.contact-form-section .wpforms-submit').forEach((e) => { e.classList.add("w-175" , "fs-18") });
	document.querySelectorAll('.contact-form-section .wpforms-container-full .wpforms-form .wpforms-field-label').forEach((e) => { e.classList.add("fs-18") });
	document.querySelectorAll('.contact-form-section .wpforms-container-full .wpforms-form .wpforms-field-label-inline').forEach((e) => { e.classList.add("fs-18") });
	document.querySelectorAll('.contact-form-section .wpforms-container-full .wpforms-form .wpforms-field-large').forEach((e) => { e.classList.add("fs-18") });
    }catch (error) {  
    console.log(error)
  } 

try {
	document.querySelectorAll('.our-team-toggle-section .toggle > .toggle-title a').forEach((e) => { e.classList.add("fs-45") });
	document.querySelectorAll('.our-team-toggle-section .toggle .inner-toggle-wrap .inner_row').forEach((e) => { e.classList.add("skpt-50") });
	document.querySelectorAll('.our-people-section-two .row_col_wrap_12 .vc_col-sm-8 .row_col_wrap_12_inner .vc_col-sm-4 h2').forEach((e) => { e.classList.add("skpt-30" , "fs-35" , "text-sub") });
	document.querySelectorAll('.our-people-section-two .row_col_wrap_12').forEach((e) => { e.classList.add("people-img-section") });
	document.querySelectorAll('.our-team-toggle-section .row_col_wrap_12').forEach((e) => { e.classList.add("skpx-100") });
	document.querySelectorAll('.our-team-toggle-section .row_col_wrap_12 .vc_col-sm-12 .vc_column-inner .toggles').forEach((e) => { e.classList.add("skpl-50") });
    }catch (error) {  
    console.log(error)
  } 

try {
	document.querySelectorAll('.fund-pricing-section .row_col_wrap_12_inner > .vc_col-sm-4 > .vc_column-inner').forEach((e) => { e.classList.add("esg-focus-bg") });
    }catch (error) {  
    console.log(error)
  } 


try {
	document.querySelectorAll('.single-post .wpb_wrapper .wpb_content_element').forEach((e) => { e.classList.add("skpt-30" , "fs-24") } );
	document.querySelectorAll('.single-post .wpb_wrapper .vc_custom_heading').forEach((e) => { e.classList.add("fw-600") } );
	document.querySelectorAll('.single-post .post-area').forEach((e) => { e.classList.add("skpt-50") });
	document.querySelectorAll('.single-post .post-area .post-content .content-inner').forEach((e) => { e.classList.add("skpx-100") });
	document.querySelectorAll('.single-post .container-wrap div.container').forEach((e) => { e.classList.add("fs-18") });
	document.querySelectorAll('#page-header-wrap').forEach((e) => { e.classList.add("skbanner") });
  	document.querySelectorAll('#page-header-wrap .container').forEach((e) => { e.classList.add("skpx-100") });
	document.querySelectorAll('.commentaries-section .post-area.masonry').forEach((e) => { e.classList.add("skpt-50" , "skpb-50") });
	document.querySelectorAll('.commentaries-section .post-area.masonry .next.page-numbers').forEach((e) => { e.innerHTML = '>'; });
	document.querySelectorAll('.commentaries-section .post-area.masonry .prev.page-numbers').forEach((e) => { e.innerHTML = '<'; });
    }catch (error) {  
    console.log(error)
  } 



// seko code start
try{
function setOrRemoveAttribute(element, attributeName, attributeValue) {
  if (attributeValue) {
    element.setAttribute(attributeName, attributeValue);
  } else {
    element.removeAttribute(attributeName);
  }
}

function removeWeirdStuff() {
  const targets = ["-%e7%b9%81", "-%e7%ae%80"];
  let elements = [];
  
  for (let i = 0; i < targets.length; i++) {
    const target = targets[i];
    
    const idElements = document.querySelectorAll(`[id*="${target}"]`);
    elements = elements.concat(Array.from(idElements));
    
    const classElements = document.querySelectorAll(`[class*="${target}"]`);
    elements = elements.concat(Array.from(classElements));
  }
  
  elements.forEach((element) => {
    const currentId = element.getAttribute('id');
    const currentClass = element.getAttribute('class');
    let newId = currentId || '';
    let newClass = currentClass || '';
    
    targets.forEach((target) => {
      newId = newId.replace(new RegExp(target, "g"), '');
      newClass = newClass.replace(new RegExp(target, "g"), '');
    });
    
    setOrRemoveAttribute(element, 'id', newId);
    setOrRemoveAttribute(element, 'class', newClass);
  });
  
  if (elements.length === 0) {
    clearInterval(intervalId);
  }
}

const intervalId = setInterval(removeWeirdStuff, 100);
}catch(error){}
// seko code end