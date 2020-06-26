$(function() {
    let params = new URLSearchParams(location.search);
    let query = params.get('name')
    let articleTitle = params.get('title')
    $(".breadcrumb-last").text(query + ' > ');
    $(".breadcrumb-last").attr('href','secao.html?name='+ query);
    $(".breadcrumb-current").text(articleTitle);
    items.forEach(function(val) { 
        if(val.name == query) {
            val.sections.forEach(function(val2) { 
                if(val2.name == articleTitle) {
                    let article = val2;
                    $(".article-title").text(val2.name)
                    $(".article-image").attr('src',val2.article.image)
                    $(".article-paragraph").html(val2.article.content)
                    console.log(val2)
                }
            })
        }
    })
});