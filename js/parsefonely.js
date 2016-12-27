$('.grade-enter').click(function(){
	var ei = new Event_Info()
	var er = new User();
	//console.log("grade-btn clicked")
	var eventType = $('.type-select :selected').text();
	var eventName = $('.grade-box').val()+" 達 "+$('.event-limit :selected').text()+"分";
	var eventDescription = "你的 "+$('.grade-box').val()+" 達"+$('.event-limit :selected').text()+"分一次";
	
	console.log(eventType+" "+eventDescription);
	er.set("username","fonely");
	ei.set("name",eventName);
	ei.set("description",eventDescription);
	ei.set("user",er);

	ei.save().then(function(ei){
		console.log("success");
	},Log);

})