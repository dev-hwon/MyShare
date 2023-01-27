/********************************************************
    common.js
 ********************************************************/
const DOCUMENT = $(document);
const win = $(window);
const body = $('body');

DOCUMENT.on('click', '.btn_openNav', function(){
    $('#sidemenu').addClass('active');
    $('#sidemenu').before('<div class="dimm_overlay"></div>')
});
DOCUMENT.on('click', '.dimm_overlay', function(){
    $(this).remove();
    $('#sidemenu').removeClass('active');
});