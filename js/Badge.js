


//模組化標籤
Vue.component('badge-component',{
	
	template: "#badge",
	props: ['eid','name','lv','iconClass','badgeColor','badgeType','award','awardEvent'],
	data: function(){
		return{
			//iconFix: "fa fa-4x ",
			currentTotal: 0,
			textInBox: ""
		}
	},
	ready: function(){
		var vm = this;
		/*EventRecord.findByUserAndEid(currentUser,String(vm.eid)).then(function(s){
			vm.currentTotal=s.length;

			if(vm.badgeColor==="sixthlv"){
				vm.textInBox=vm.award+" 6級:"+vm.awardEvent
			}else if(vm.badgeColor==="fifthlv"){
				vm.textInBox=vm.award+" 5級:"+vm.awardEvent
			}else if(vm.badgeColor==="fourthlv"){
				vm.textInBox=vm.award+" 4級:"+vm.awardEvent
			}else if(vm.badgeColor==="thirdlv"){
				vm.textInBox=vm.award+" 銅級:"+vm.awardEvent
			}else if(vm.badgeColor==="secondlv"){
				vm.textInBox=vm.award+" 銀級:"+vm.awardEvent
			}else if(vm.badgeColor==="firstlv"){
				vm.textInBox=vm.award+" 金級:"+vm.awardEvent
			}

			if(vm.currentTotal < parseInt(vm.lv)){
				vm.textInBox=vm.textInBox+"已達"+vm.currentTotal+"次"+", 尚需"+(parseInt(vm.lv)-vm.currentTotal)+"次";
			}
			else if(vm.currentTotal >= parseInt(vm.lv)){
				vm.textInBox=vm.textInBox+"已達"+vm.lv+"次"
			}
			//console.log(vm.textInBox);
		},function(s){console.log(s);})*/
	},
	computed:{
		derivedClass:function(){
			var vm=this;
			//console.log("eid: "+vm.eid+" cur: " +vm.currentTotal+" need: "+ vm.lv+ " color: "+vm.badgeColor);
			//if(vm.currentTotal >=parseInt(vm.lv)) {
				return vm.badgeColor +" " +vm.badgeType;
			//}else {
			//	return "nolv " +  vm.badgeType;
			//}
			//console.log("eid: "+vm.eid+" cur: " +vm.currentTotal+" need: "+ vm.lv+ " color: "+vm.badgeColor);
		}
	}
})


//parent
var parent = new Vue({
	el:"#badgeArea"
})
