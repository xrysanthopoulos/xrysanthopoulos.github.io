//Function to alternate the active buttons in projects tabs.
function onClickFunction() {
  var x = document.getElementById("projects");
  var y = x.getElementsByClassName("nav-link");

  for (var i = 0; i < y.length; i++) {
    y[i].classList.remove("active");
  }
  var current = document.activeElement;
  current.classList.add("active");
}

function filterSelection(c) {
  var x = document.getElementsByClassName("filter");
  if (c == "all") {
    c = "";
  }
  for (var i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) {
      addClass(x[i], "show");
    }
  }
  var l = 0;
  var z = document.getElementById("row");
  var a = z.getElementsByClassName("filter");
  for (var i = 0; i < a.length; i++) {
    var b = a[i].className.split(" ");
    //console.log(i + ": " + b);
    //console.log(b.length);
    for (var j = 0; j < b.length; j++) {
      if (b.length == 4) {
        l++;
      }
    }


  }
  //console.log("l " + l);
  if (l == 4) {
    $(".filter").removeClass("col-md-6").addClass("col-md-12");
    $(".project-row").css({"margin": "0 auto", "paddding-left": "0", "paddding-right": "0"});
    $(".filter").css({"width": "auto", "margin": "0 auto"});
  } else {
    $(".filter").removeClass("col-md-12").addClass("col-md-6");
  }
}

//Function for add class.
function addClass(element, name) {
  var arr1 = element.className.split(" ");
  var arr2 = name.split(" ");
  for (var i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }



}

//Function for remove class.
function removeClass(element, name) {
  var arr1 = element.className.split(" ");
  var arr2 = name.split(" ");
  for (var i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
