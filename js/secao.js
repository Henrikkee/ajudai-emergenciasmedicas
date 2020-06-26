$(function() {
    let params = new URLSearchParams(location.search);
    let query = params.get('name')
    let title = ''
    let icon = null
    let secao = []
    let randomColors = ['#ffb7ff','#bfbbff','#f6c2a0','#97ffd8','#75d2af']
    items.forEach(function(val) { 
        if(val.name == query) {
            title = val.name
            icon = val.icon
            secao = val.sections
            $("#lblSecaoTitle").text(title);
            $(".breadcrumb-current").text(title);
            secao[0].articles.forEach(function(val) { 
                const randomElement = randomColors[Math.floor(Math.random() * randomColors.length)];
                let item = $(".item-first").clone();
                item.removeClass('d-none').removeClass('item-first').appendTo(".content-list");
                item.find('.item-title').text(val.title);
                item.find('a').attr("href",'artigo.html');
                item.find('.item-icon').css('background', randomElement).addClass(icon);
            })
        }
    })
});