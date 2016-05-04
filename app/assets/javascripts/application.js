// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.


//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .

//animacion scroll
// jQuery(function($) {
// $('.elemento_deseo_animar').waypoint(function() {
// $(this).toggleClass( 'bounceIn animated' );
// },
// {
// offset: '70%',
// triggerOnce: true
// });

// });
//menu resposive
$(document).ready(main);
 
var contador = 1;
 
function main(){
    $('.menu_bar').click(function(){
        // $('nav').toggle(); 
 
        if(contador == 1){
            $('nav').animate({
                right: '0'
            });
            contador = 0;
        } else {
            contador = 1;
            $('nav').animate({
                right: '-100%'
            });
        }
 
    });
 
};

// target enlaces internos
$(document).ready(function(){
 $(".scroll").click(function(event){
 event.preventDefault();
 var offset = $($(this).attr('href')).offset().top;
 $('html, body').animate({scrollTop:offset}, 500);
 });
});
