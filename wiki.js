$(function () {
        $('#randomWiki').click(function () {
            window.open('http://en.wikipedia.org/wiki/Special:Random', 'content');
        });

        $('#search').click(function () {
            
            $.ajax({
                url: 'https://en.wikipedia.org/w/api.php',
                data: {
                    action: 'query',
                    titles: $('#keyword').val(),
                    prop: 'revisions',
                    rvprop: 'content',
                    format: 'json'
                },
                type: 'get',
                dataType: 'jsonp',
                success: function (response) {
                    var id = Object.keys(response.query.pages)[0];
                    var url = 'https://en.wikipedia.org/?curid='+id;
                    window.open(url, 'content');
                },
                error:function(xhr,status,error){
                    alert("错误提示： " + xhr.status + " " + xhr.statusText);
                }
            });
        });
    }

);
