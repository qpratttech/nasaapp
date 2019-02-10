function loadImg() {
		var index = $('#nasaImage').data('index');
		var today = new Date();
		var date = new Date(today);
		date.setDate(today.getDate() - index);
		var dateDay = date.getDate();
		var dateMonth = date.getMonth() + 1;
		if (dateDay < 10) {
			dateDay = '0' + dateDay;
		}
		if (dateMonth < 10) {
			dateMonth = '0' + dateMonth;
		}
		var imageDate = date.getFullYear() + '-' + dateMonth + '-' + dateDay;
		console.log(imageDate);
		var incrementedIndex = index + 1;
		$('#nasaImage').data('index',incrementedIndex);
		var url = "https://api.nasa.gov/planetary/apod?date=" + imageDate + "&api_key=Eo6F0ZtdMR3lVPcXypYUwTWyZriorJgLS3ndVBSL";
		$.ajax({url: url, success: function(result){
			if(result.media_type == 'video') {
				$("#nasaVideo").attr('src',result.url);
				$("#nasaVideo").css('display','block');
				$("#nasaImage").css('display','none');
			} else {
				$("#nasaImage").attr('src',result.url);
				$("#nasaVideo").attr('src','');
				$("#nasaVideo").css('display','none');
				$("#nasaImage").css('display','block');
			}
			if(result.copyright != null){
				$("#copyrightNotice").text(result.copyright);
			} else {
				$("#copyrightNotice").text('Public Domain');
			}
		},
			error: function (jqXHR, exception) {
		alert(jqXHR.status);  
		}});
}