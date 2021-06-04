$('.nav-links a').on('click',function(e){
  if(this.hash != ''){
    e.preventDefault();
    const hash= this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    },800);
  }
});
var amount=$('#inputAmount').val();
console.log(amount);
$("#inputChoose").change(function(){
  var type=$('#inputChoose option:selected').val();
  $('#dollar').val(type);
});
