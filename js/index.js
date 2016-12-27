$(document).ready(function() {
    // $("#date").datepicker();
    if(isAPIAvailable()) {
        $('#files').bind('change', handleFileSelect);
    }
});

function isAPIAvailable() {
    // Check for the various File API support.
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        // Great success! All the File APIs are supported.
       return true;
    } 
    else {
        // source: File API availability - http://caniuse.com/#feat=fileapi
        // source: <output> availability - http://html5doctor.com/the-output-element/
        console.error('The HTML5 APIs used in this form are only available in the following browsers:<br />');
        // 6.0 File API & 13.0 <output>
        console.error(' - Google Chrome: 13.0 or later<br />');
        // 3.6 File API & 6.0 <output>
        console.error(' - Mozilla Firefox: 6.0 or later<br />');
        // 10.0 File API & 10.0 <output>
        console.error(' - Internet Explorer: Not supported (partial support expected in 10.0)<br />');
        // ? File API & 5.1 <output>
        console.error(' - Safari: Not supported<br />');
        // ? File API & 9.2 <output>
        console.error(' - Opera: Not supported');
        return false;
    }
}
function Log (o){
    console.log (o) ;
}

function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object
    var fileName = evt.target.fileName ;
    var file = files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(evt){
        console.log("fileName",fileName);
        var csv = evt.target.result;
        var data = $.csv.toObjects(csv);
        console.log(data);
        var len=data.length
        /*for(var i=0;i<data.length;i++){
            console.log(data[i].id+" "+data[i].name+" "+data[i].score);
        }*/ 
        var id=new Array(len);
        var name=new Array(len);
        var score=new Array(len);
        for(var i=0;i<len;i++){
            id[i]=data[i].id;
            name[i]=data[i].name;
            score[i]=data[i].score;
        }
        for(var i=0;i<len;i++){
            console.log(i);
            $.get("https://script.google.com/macros/s/AKfycbwWxM61puRGsbv_HM8-8EajeexTVCdUKW91ux00J1U-Emsziw/exec", {           
                "id":id[i],
                "name":name[i],
                "score":score[i]
            });
        }
    };
    reader.onerror = function(){ alert('Unable to read ' + file.fileName); };
  }