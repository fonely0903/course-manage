if($('.type-select :selected').text()!==""){
	var selectVal = $('.type-select :selected').text();
	console.log(selectVal);
	if(selectVal==="grade"){
		$('.grade-type').css("display","block");
		console.log("got!");
	}
	console.log("somehtin in");
}

$('.type-select').change(function(){
	$('.grade-type').css("display","none");
	$('.frequency-type').css("display","none");
	$('.other-type').css("display","none");
	$('.type-limit').css("display","none");
	$('.grade-enter').css("display","none");
	$('.frequency-enter').css("display","none");
	$('.other-enter').css("display","none");
	if($('.type-select :selected').text()==="成績類"){
		$('.grade-type').css("display","block");
		//$('.type-limit').css("display","block");
	}
	else if($('.type-select :selected').text()==="計次類"){
		$('.frequency-type').css("display","block");
	}
	else if($('.type-select :selected').text()==="其他"){
		$('.other-type').css("display","block");
	}
})
$('.grade-box').keypress(function(e){
	if(e.which==13){
		$('.type-limit').css("display","block");
	}
})
$('.type-limit').change(function(){
	$('.grade-enter').css("display","block");
})
$('.frequency-box').keypress(function(e){
	if(e.which==13){
		$('.frequency-enter').css("display","block");
	}
})
$('.other-box').keypress(function(e){
	if(e.which==13){
		$('.other-enter').css("display","block");
	}
})


$('.event-list-btn').click(function(){
	if(($('.grade-list').html()=="") && ($('.frequency-list').html()=="")){
		//console.log("hello");
		for(var i=0;i<data.score.length;i++){
			var str=data.score[i].option+data.score[i].limit;	
			var str1='<input type="radio" id="'+str+'" name="optionRadios"><label for="'+str+'"class="option-radio">'+data.score[i].option+data.score[i].limit+'</label></div>';
			$('.grade-list').append(str1);
		}
		for(var j=0;j<data.frequency.length;j++){
			var str=data.frequency[j].option;
			var str2='<input type="radio" id="'+str+'" name="optionRadios"><label for="'+str+'"class="option-radio">'+data.frequency[j].option+'</label></div>';
			$('.frequency-list').append(str2);	
		}
	}
});



$('.event-choice-btn').click(function(){
	console.log($("input[type='radio']:checked").next(".option-radio").text());
	var strEvent=$("input[type='radio']:checked").next(".option-radio").text();
	$('.chosenEvent').val(strEvent);
	$('#eventModal').modal('hide');
});


$(".icon-list-btn").click(function(){
	if($(".icon-list").html()==""){
		for(var i=0;i<font.class.length;i++){
			var str=font.class[i];
			var str1='<input type="radio" id="'+str+'" name="icon"><label for="'+str+'"class="icons"><i class="fa-4x '+ font.class[i] +'"></i></label>';
			$(".icon-list").append(str1);
		}
	}
});

$('.badge-choice-btn').click(function(){
	console.log($("input[type='radio']:checked").next(".icons").html());
	var strIcon=$("input[type='radio']:checked").next(".icons").html();
	$(".chosen-icon").html(strIcon);
	$('#badgeModal').modal('hide');
});

$('.badge-level-option').change(function(){
	console.log($('.badge-level-option :selected').text());
	$('.badge-set-enter').css("display","block");
});

$('.badge-enter').click(function(){
	$('.badge-level-option').size =$('select').length;
})

$(".badge-set-enter").click(function(){
	var event=$(".chosenEvent").val()
	var icon=$(".chosen-icon").html()
	var lv=$('.badge-level-option :selected').text();
	var name=$('.badge-name').val();
	var layout=new Array();
	layout[0]="\<badge-component eid=34 level=\" 金級\" name='"+name+"'lv=\"\" icon-class='"+icon+"' badge-color=\"firstlv\" award=\""+name+"\" award-event=\""+event+"\"\>\<\/badge-component\>"
	layout[1]="\<badge-component eid=34 level=\" 銀級\" name='"+name+"'lv=\"\" icon-class='"+icon+"' badge-color=\"secondlv\" award=\""+name+"\" award-event=\""+event+"\"\>\<\/badge-component\>"
	layout[2]="\<badge-component eid=34 level=\" 銅級\" name='"+name+"'lv=\"\" icon-class='"+icon+"' badge-color=\"thirdlv\" award=\""+name+"\" award-event=\""+event+"\"\>\<\/badge-component\>"
	layout[3]="\<badge-component eid=34 level=\" 4級\" name='"+name+"'lv=\"\" icon-class='"+icon+"' badge-color=\"fourthlv\" award=\""+name+"\" award-event=\""+event+"\"\>\<\/badge-component\>"
	layout[4]="\<badge-component eid=34 level=\" 5級\" name='"+name+"'lv=\"\" icon-class='"+icon+"' badge-color=\"fifthlv\" award=\""+name+"\" award-event=\""+event+"\"\>\<\/badge-component\>"
	layout[5]="\<badge-component eid=34 level=\" 6級\" name='"+name+"'lv=\"\" icon-class='"+icon+"' badge-color=\"sixthlv\" award=\""+name+"\" award-event=\""+event+"\"\>\<\/badge-component\>"
		var allstr="";
		for(var i=0;i<lv;i++){
			
			allstr += layout[i];
			$('#badgeSetArea').html(allstr);
			console.log(layout[i]);
		}
	//}
	Vue.component('badge-component',{
	
		template: "#badge",
		props: ['eid','level','name','lv','iconClass','badgeColor','badgeType','award','awardEvent'],
		data: function(){
			return{
				currentTotal: 0,
				textInBox: ""
			}
		},
		ready: function(){
			var vm = this;
			if(vm.badgeColor==="sixthlv"){
				vm.textInBox=vm.award+" 6級:"+vm.awardEvent+"已達x次,尚須x次"
			}else if(vm.badgeColor==="fifthlv"){
				vm.textInBox=vm.award+" 5級:"+vm.awardEvent+"已達x次,尚須x次"
			}else if(vm.badgeColor==="fourthlv"){
				vm.textInBox=vm.award+" 4級:"+vm.awardEvent+"已達x次,尚須x次"
			}else if(vm.badgeColor==="thirdlv"){
				vm.textInBox=vm.award+" 銅級:"+vm.awardEvent+"已達x次,尚須x次"
			}else if(vm.badgeColor==="secondlv"){
				vm.textInBox=vm.award+" 銀級:"+vm.awardEvent+"已達x次,尚須x次"
			}else if(vm.badgeColor==="firstlv"){
				vm.textInBox=vm.award+" 金級:"+vm.awardEvent+"已達x次,尚須x次"
			}
		},
		computed:{
			derivedClass:function(){
				var vm=this;
				return vm.badgeColor +" " ;//+vm.badgeType;
			}
		}
	})
	var parent = new Vue({
		el:"#badgeSetArea"
	})
});



var data={
	"score":[
		{"option":"作業",
		"limit":"100"},
		{"option":"作業",
		"limit":"90-99"},
		{"option":"作業",
		"limit":"80-89"},
		{"option":"作業",
		"limit":"70-79"},
		{"option":"作業",
		"limit":"60-69"},
		{"option":"作業",
		"limit":"60以下"},
		{"option":"小考",
		"limit":"100"},
		{"option":"小考",
		"limit":"90-99"},
		{"option":"小考",
		"limit":"80-89"},
		{"option":"小考",
		"limit":"70-79"},
		{"option":"小考",
		"limit":"60-69"},
		{"option":"小考",
		"limit":"60以下"},
		{"option":"期中",
		"limit":"100"},
		{"option":"期中",
		"limit":"90-99"},
		{"option":"期中",
		"limit":"80-89"},
		{"option":"期中",
		"limit":"70-79"},
		{"option":"期中",
		"limit":"60-69"},
		{"option":"期中",
		"limit":"60以下"},
		{"option":"期末",
		"limit":"100"},
		{"option":"期末",
		"limit":"90-99"},
		{"option":"期末",
		"limit":"80-89"},
		{"option":"期末",
		"limit":"70-79"},
		{"option":"期末",
		"limit":"60-69"},
		{"option":"期末",
		"limit":"60以下"},
		{"option":"課堂練習",
		"limit":"100"},
		{"option":"課堂練習",
		"limit":"90-99"},
		{"option":"課堂練習",
		"limit":"80-89"},
		{"option":"課堂練習",
		"limit":"70-79"},
		{"option":"課堂練習",
		"limit":"60-69"},
		{"option":"課堂練習",
		"limit":"60以下"},
	],
	"frequency":[
		{"option":"曠課一次"},
		{"option":"上課問答一次"},
	]
};

var font={
	"class":[
		"fa fa-bolt",
		"fa fa-book",
		"fa fa-briefcase",
		"fa fa-calculator",
		"fa fa-check-circle",
		"fa fa-comments-o",
		"fa fa-diamond",
		"fa fa-pencil-square-o",
		"fa fa-exchange",
		"fa fa-eye",
		"fa fa-fighter-jet",
		"fa fa-graduation-cap",
		"fa fa-users",
		"fa fa-key",
		"fa fa-gavel",
		"fa fa-magic",
		"fa fa-plus",
		"fa fa-rocket",
		"fa fa-paper-plane",
		"fa fa-smile-o",
		"fa fa-trophy",
		"fa fa-university",
		"fa fa-thumbs-o-up",
		"fa fa-usd"
	]
}
