$(function() {
  $('tab').on('click', function() {
        if($('nav').hasClass('hidden')) {
            $('nav.hidden').removeClass('hidden');
            $('body').addClass('hidden');
            
        } else {
            $('nav').addClass('hidden');
            $('body').removeClass('hidden');
            
        }
  });
    
    $('[data-background-image]').each(function(){
        $(this).css({"background-image" : "url("+$(this).attr('data-background-image')+")"});
    });
    
    $('[data-color]').each(function(){
        $(this).css({"color" : $(this).attr('data-color')});
    });
    
    $('[data-background-position]').each(function(){
        $(this).css({"background-position" : $(this).attr('data-background-position')});
    });
    
    $('[data-overlay]').each(function(){
        $(this).addClass('overlay-' + $(this).attr('data-overlay'));
    });
    
    $('[data-href]').each(function(){
        var href = $(this).attr('data-href');
        $(this).on('click', function() { window.open(href, '_blank'); });
    });
    
    $('[data-link]').each(function(){
        var href = $(this).attr('data-link');
        $(this).on('click', function() { window.location = href; });
    });
    
    $('nav ul').each(function() {
        
        var bool = false;
        
        $('nav ul li').each(function() {
            (bool ? $(this).css('border-bottom', "1px solid rgba(0,0,0,0.5)") : $(this).css('border-top', "1px solid rgba(0,0,0,0.5)"));
        });
    });
    
    $('[data-background-color]').each(function(){
        $(this).css({"background-color" : $(this).attr('data-background-color')});
    });
    
    
    
    
});