document.getElementById('search-button').addEventListener('click',function(){
    const query = document.getElementById('search-input').ariaValueMax;
    alert('you search for:'  +query);
});


//script .js
document.getElementById('openSearchBtn').addEventListener("click", function(){
    document.getElementById("fullscreensearch").style.display = "flex";

});
document.getElementById("closeSearchbtn").addEventListener("click",function(){
    document.getElementById("fullscreensearch").style.display = "none";
});