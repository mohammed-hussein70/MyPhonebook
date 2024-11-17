function myFunction() {
  let input = document.querySelector(".myInput");
  let filter = input.value.toUpperCase();
  let ul = document.querySelector("ul");
  let li = ul.querySelectorAll("li");
  for (i = 0; i < li.length; i++) {
    let a = li[i].querySelector("a");
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
