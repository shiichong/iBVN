import $ from 'jquery'

$(function () {


});

$(document).ready(function() {

    $('.js-nav').click(function () {

        if( $('body').hasClass('has-menu') ){
            $('body').removeClass('has-menu');
        }

        $('body, html').animate({scrollTop: $(this).hasClass('home') ? 0: $('.carousel').outerHeight() }, '500');
    });

    

    function resizeMenu(){
        
        var $el = $('#global-actions');
        var $more = $('[data-global-action=more]');

        if( $(window).width() >= 748  ){


            $.each($more.find('>.sup>li'), function () {
                $more.before( $(this).addClass('nav-item') );
            });


            var w = $el.outerWidth();
            var sW = $more.outerWidth();
            $.each( itemsMenu.not('[data-global-action=more]'), function () {

                // console.log( $(this).data('w') );
                sW+= $(this).data('w');
                if( sW > w ){
                    $(this).removeClass('nav-item').appendTo( $more.find('.sup')[0] );
                }
                
            });

            // console.log( '__nav', $(window).width(), w, sW );
        }
        else{
   
            $.each($more.find('>.sup>li'), function () {
                $(this).addClass('nav-item').appendTo( '#global-actions>.nav' );
            });
            
        }

        if( $more.find('.sup>li').length==0 ){
            $more.hide(0);
        }
        else{
            $more.show(0);
        }
    }

    function resizeYoutube(){
        $.each( $('.home-youtube-iframe'), function () {
            
            var w = $(this).width();
            var width = $(this).attr('width');
            var height = $(this).attr('height');

            if( $(window).width() >= 748  ){
                
                $(this).removeAttr('style');
            }
            else{
                $(this).css({
                    height: (w*height) / width
                });
            }


        } );
    }

    var itemsMenu = $('#global-actions').find('.nav>li');
    $.each( itemsMenu, function(){
        $(this).data('w', $(this).outerWidth() );
    } );

	resizeMenu(), resizeYoutube(), $(window).load(function(){

	}), $(window).resize(function() {
        resizeMenu();
        resizeYoutube();
        
        
	}), $(window).scroll(function() {
		// pageScroll();
	}), $(window).on(function() {
		
	});
});
