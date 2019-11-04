//btn blir en array med alle elementan som har classname click_btn
var btn = document.getElementsByClassName(
    "click_btn"
);

//går igjennom alle elementan i array, og gir hver enkelt en onclick. viser modal som har et klassenavn tilsvarende id til buttonen
for (let i=0; i < btn.length; i++) {
    btn[i].onclick = () => {
      document.getElementsByClassName(btn[i].id)[0].style.display = "block"
    }
};

//henter alle close knappene, og gir dem onclick som skjuler tilsvarende modal
var closeBtns = document.getElementsByClassName("close");
for (let i = 0; i < closeBtns.length; i++){
  closeBtns[i].onclick = () => document.getElementsByClassName(btn[i].id)[0].style.display = "none";
}
