function expand(){
    $(".ex" + this.id).css("visibility", "visible");
    $(".mem" + this.id).css("visibility", "hidden");
}
function revert(){
    $(".ex" + this.id).css("visibility", "hidden");
    $(".mem" + this.id).css("visibility", "visible");
}
$(".member").hover(expand,revert);