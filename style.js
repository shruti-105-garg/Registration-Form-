var btn = document.getElementById("submit");
    btn.addEventListener("click", insert);

    function insert() {
        document.getElementById("fName").innerText = document.getElementById("inFName").value;
        document.getElementById("lName").innerText = document.getElementById("inLName").value;
        document.getElementById("email").innerText = document.getElementById("inMail").value;
        document.getElementById("age").innerText = document.getElementById("inAge").value;
        document.getElementById("gen").innerText = document.querySelector("[name=Gen]:checked").id;
    }