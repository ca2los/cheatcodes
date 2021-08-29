``` jQuery

var name = document.getElementById('id_name');
var name = $('#id_name');

var title = document.createElement('h1');
var title = $('<h1>');

title.textContent = 'Example text';
title.text('Example text');

title.setAttribute('class','fancy');
title.attr('class','fancy');

title.style.color = "#000";
title.css('color','#000');

new_var.appendChild(title);
new_var.append(title);

```

``` jQuery

.on('click',function(){});
.addEventListener('click',function(){});

// Event Handler Attachment

var_name.on('click',function(){
    if (var_name_02 === true) {
        $('#id_name').css('border','1px solid #000');
    }
    else {
        $('#id_name').css({width:300px,height:200px,color:#000});
    }
});

``` 