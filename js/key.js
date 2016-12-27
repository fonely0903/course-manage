var isIE = /*@cc_on!@*/false || !!document.documentMode;
if (isIE){
  alert("IE 無法使用此平台，請使用其他瀏覽器，建議使用 Chrome");
  location.href="/";
}


Parse.serverURL= "http://programming101.cs.nccu.edu.tw:11337/pm-fonely"
Parse.initialize("programming101-1051-dev","rtyutyorqierquwoi");
console.log ("Key.js status : pm_fonely");