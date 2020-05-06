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
		c.addEventListener("click", function(e) {
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
	a.addEventListener("click", function(e) {
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

/* If the user clicks anywhere outside the select box,
then close all select boxes: */

document.addEventListener("click", closeAllSelect);

document.getElementById("password").value = "";

function submit(btn) {
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var nationality = document.getElementById("nationality").value;
	var day = document.getElementById("data_birth").value;
	var mounth = document.getElementById("month_birth").value;
	var eyer = document.getElementById("year_birth").value;
	var gender = document.getElementsByName("gender");
	var password = document.getElementById("password").value;
	var confirm = document.getElementById("confirm").value;
	var pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
	var patternPas = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,64}$/;
	var gen;
	if (gender[0].checked) {
		gen = "male";
	} else {
		gen = "female";
	}
	function Obj(name, surname, nation, day, mounth, eyer, gendr, pass) {
		this.name = name;
		this.surname = surname;
		this.nation = nation;
		this.day = day;
		this.mounth = mounth;
		this.eyer = eyer;
		this.gendr = gendr;
		this.pass = pass;
		this.key = Math.random();
	}

	var person = new Obj(
		firstName,
		lastName,
		nationality,
		day,
		mounth,
		eyer,
		gen,
		password
	);

	if (!pattern.test(String(email.value).toLowerCase())) {
		btn.setAttribute("class", "btn_eror");
	} else if (!patternPas.test(password)) {
		btn.setAttribute("class", "btn_eror");
	} else if (password != confirm) {
		btn.setAttribute("class", "btn_eror");
		document.getElementById("password").style.cssText =
			"border-bottom: 2px solid red";
		document.getElementById("confirm").style.cssText =
			"border-bottom: 2px solid red";
	} else {
		document.getElementById("form").style.cssText = "opacity: 0";
		document.getElementById("head").style.cssText = "opacity: 0";
		btn.style.cssText = "opacity: 0";
		document.getElementById("registr").innerHTML =
			'<h1 class="thanks">Thank You!</h1> <p class="sub">you registered!</p>';

		var xhr = new XMLHttpRequest();

		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
				console.log("hello");
			}
		};
		var myObj = JSON.stringify(person);
		console.log(myObj);
	}
}
