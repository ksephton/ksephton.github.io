function searchMaths() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue, val, wid;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');
  val = 0;
  wid = window.innerWidth;

  topics = document.getElementById("area-tiles");
  ul.style.display = "block";
  topics.style.display = "none";
  
  

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("div")[0];
    txtValue = a.id;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      val += 500;
      if (wid < 800) {
        val = val * 1.5
      }
      document.getElementById("page").style.height = val + "px";
    } else {
      li[i].style.display = "none";
    }
  }

  if (filter == "") {
    ul.style.display = "none";
    topics.style.display = "block";
    document.getElementById("page").style.height = "";
  }
  
}