function getTitles(){
  let titles = []
  items.forEach(function(val) { 
    titles.push({
      name: val.name,
      color: val.color,
      icon: val.icon,
    })
  })
  return titles;
}

function fillItems(name = null){
  $(".item").not(".item-first").remove()
  getTitles().forEach(function(val) {
    if(name == null || val.name.toLowerCase().indexOf(name.toLowerCase()) > -1) {
      let item = $(".item-first").clone();
      item.removeClass('d-none').removeClass('item-first').appendTo(".content-list");
      item.find('.item-title').text(val.name);
      item.find('a').attr("href",'secao.html?name='+val.name);
      item.find('.item-icon').css('background', val.color).addClass(val.icon);
    }
  })
}

$(function() {
  fillItems();
  $('#txtSearch').on('input',function(event){
    fillItems(event.target.value)
  });
});

