var history = window.History;
var curState = -1;
history.Adapter.bind(window, 'statechange', function(){
    var state = history.getState();
    if(typeof state.data.state === 'undefined' || curState != state.data.state){
        for(var i = 0; i < postIndex.length; i++){
            if(state.url.endsWith(postIndex[i].url)){
                curState = i;
                break;
            }
        }
    }
    loadState(state.url);
});
String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};
$(document).ready(function(){
    if(curState < 0 && (window.location.pathname == "/" || window.location.pathname == "")){
        curState = 0;
        history.replaceState({state: 0}, postIndex[curState].title, postIndex[curState].url);
        loadState(postIndex[curState].url);
    }
});
function loadState(url){
    NProgress.start();
    $.get(url, function(result){
        var $html = $(result);
        $('.comic').html($html.find('.content .comic').remove().html());
        $('.post-header').html($html.find('header').html());
        $('.post-content').html($html.find('.content').html());
        switch(curState){
            case 0:
                $('.comic-nav').addClass('last-page').removeClass('first-page');
                break;
            case postIndex.length - 1:
                $('.comic-nav').addClass('first-page').removeClass('last-page');
                break;
            default:
                $('.comic-nav').removeClass('last-page').removeClass('first-page');
                break;
        }
        NProgress.done();
    });
}
$('.comic-nav a').click(function(e){
    e.preventDefault();
    var $this = $(this);
    var navTo = $this.parent('li').attr('class');
    var oldState = curState;
    switch(navTo){
        case 'last':
            if(curState > 0){
                curState = 0;
            }
            break;
        case 'next':
            if(curState > 0){
                curState--;
            }
            break;
        case 'rand':
            if(postIndex.length > 1){
                var newState = curState;
                while(newState == curState){
                    newState = Math.floor(Math.random() * postIndex.length);
                }
                curState = newState;
            }
            break;
        case 'prev':
            if(curState < postIndex.length - 1){
                curState++;
            }
            break;
        case 'first':
            if(curState < postIndex.length - 1){
                curState = postIndex.length - 1;
            }
            break;
    }
    if(curState != oldState){
        history.pushState(
            {state: curState},
            postIndex[curState].title,
            postIndex[curState].url
        );
    }
});
