$('#FormSearch').submit(function(e){
    $.ajax({
        url: 'https://www.googleapis.com/youtube/v3/search',
        type: 'get',
        dataType: 'json',
        data: {
            'key':'AIzaSyAs3cH-wQ1vnWYhBbl2NCCvvMOi1ruwCdA',
            'part':'snippet',
            'q': $('#FormSearch input').val()
        },
        success:function(result){
            $('#Content').html('')
            $('#Content').append('<div class="content-content"><div class="content-title">Result: </div><div id="SearchResult" class="content-box"></div></div>')
            console.log(result)
            if(result.pageInfo.totalResults>0){
                var YTresult = result.items
                console.log(YTresult)
                $.each(YTresult,function(i,data){
                    $('#SearchResult').append('<div class="search-item d-flex"><a href=""><img src="'+ data.snippet.thumbnails.medium.url +'" class="search-thumb" alt=""></a><div class="search-item-text"><div><a href="" class="search-item-title">'+ data.snippet.title +'</a></div><div><a href="" div class="search-item-user">'+ data.snippet.channelTitle +'</a></div></div></div>')
                })
            }
            else{
                $('#SearchResult').append('<h3 style="color: var--(text1);">Not Found</h3>')
            }
        }
    })
    e.preventDefault()
})

