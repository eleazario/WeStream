
$('.bars').click(function(){
    if($('#Sidebar').is(":visible")){
        $('#Sidebar').hide();
        $('#Content').css('padding-left','36px');
    }
    else{
        $('#Sidebar').show();
        $('#Content').css('padding-left','276px');
    }
});

$(function(){
    $('#Popup-profile-btn').click(function(event){
        $('#Popup-Profile').css('visibility','visible');
        event.stopPropagation();
    });
    $('#Popup-Profile').click(function(event){
        event.stopPropagation();
    });
    $(document).click(function(){
        $('#Popup-Profile').css('visibility','hidden');
    });
});

$('#SideChannel .side-item').attr('href','screen.html');
$('#linktoporfile').attr('href','profile.html');