var gender = document.getElementsByName("gender");
var drink = document.getElementsByName("drink");
var food = document.getElementsByName("food");
var cancer = document.getElementsByName("cancer");
var arr = new Array(5);
poll1 = document.getElementById("poll1");
poll2 = document.getElementById("poll2");

function genderOf(btn) {
  if (gender[0].checked) {
    arr[0] = "Мужчина";
    console.log(arr[0]);
    poll1.style.cssText = "display: none";
    poll2.style.cssText = "display: block";
  } else if (gender[1].checked) {
    arr[0] = "Женщина";
    console.log(arr[0]);
    poll1.style.cssText = "display: none";
    poll2.style.cssText = "display: block";
  } else {
    console.log((btn.textContent = "Пожалуйста, выберите ответ"));
  }
}

function drinkOf(btn) {
  if (drink[0].checked) {
    arr[1] = "Я не пью";
    console.log(arr[1]);
    poll2.style.cssText = "display: none";
    poll3.style.cssText = "display: block";
  } else if (drink[1].checked) {
    arr[1] = "Несколько раз в месяц";
    console.log(arr[1]);
    poll2.style.cssText = "display: none";
    poll3.style.cssText = "display: block";
  } else if (drink[2].checked) {
    arr[1] = "Несколько раз в неделю";
    console.log(arr[1]);
    poll2.style.cssText = "display: none";
    poll3.style.cssText = "display: block";
  } else if (drink[3].checked) {
    arr[1] = "Каждый день";
    console.log(arr[1]);
    poll2.style.cssText = "display: none";
    poll3.style.cssText = "display: block";
  } else {
    btn.textContent = "Пожалуйста, выберите ответ";
  }
}

function foodOf(btn) {
  if (food[0].checked) {
    arr[2] = "Я часто ем фаст-фуд";
    console.log(arr[2]);
    poll3.style.cssText = "display: none";
    poll4.style.cssText = "display: block";
  } else if (food[1].checked) {
    arr[2] = "Несколько раз в неделю";
    console.log(arr[2]);
    poll3.style.cssText = "display: none";
    poll4.style.cssText = "display: block";
  } else if (food[2].checked) {
    arr[2] = "Редко, но бывает";
    console.log(arr[2]);
    poll3.style.cssText = "display: none";
    poll4.style.cssText = "display: block";
  } else if (food[3].checked) {
    arr[2] = "Я не ем фаст фуд";
    console.log(arr[2]);
    poll3.style.cssText = "display: none";
    poll4.style.cssText = "display: block";
  } else {
    btn.textContent = "Пожалуйста, выберите ответ";
  }
}

function cancerOf(btn) {
  if (cancer[0].checked) {
    arr[3] = "Я часто ем фаст-фуд";
    console.log(arr[3]);
    poll4.style.cssText = "display: none";
    poll5.style.cssText = "display: block";
  } else if (cancer[1].checked) {
    arr[3] = "Несколько раз в неделю";
    console.log(arr[3]);
    poll4.style.cssText = "display: none";
    poll5.style.cssText = "display: block";
  } else if (cancer[2].checked) {
    arr[3] = "Редко, но бывает";
    console.log(arr[3]);
    poll4.style.cssText = "display: none";
    poll5.style.cssText = "display: block";
  } else if (cancer[3].checked) {
    arr[3] = "Я не ем фаст фуд";
    console.log(arr[3]);
    poll4.style.cssText = "display: none";
    poll5.style.cssText = "display: block";
  } else {
    btn.textContent = "Пожалуйста, выберите ответ";
  }
}

function dataOf() {
  poll5.style.cssText = "display: none";
  poll6.style.cssText = "display: block";
  var day = document.getElementById("data_birth").value;
  var mounth = document.getElementById("month_birth").value;
  var eyer = document.getElementById("year_birth").value;
  arr[4] = `${day}, ${mounth}, ${eyer}`;
  console.log(arr);
}

function nextOf() {
  poll6.style.cssText = "display: none";
  poll7.style.cssText = "display: block";
  text.style.cssText = "display: block";
}

//select

var x, i, j, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      /* When an item is clicked, update the original select box,
        and the selected item: */
      var y, i, k, s, h;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      h = this.parentNode.previousSibling;
      for (i = 0; i < s.length; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          for (k = 0; k < y.length; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x,
    y,
    i,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
