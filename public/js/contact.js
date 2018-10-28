function validateForm() {

    var x = document.forms["Form1"]["FirstName"].value;
	var w = document.forms["Form1"]["Question"].value;
    var y = document.forms["Form1"]["Lastname"].value;
    var z = document.forms["Form1"]["location"].value;
    var u = document.forms["Form1"]["Email"].value;
	if (w == "" && isNaN(w))
    {
        alert("Please fill your question and submit");
        return false;
    }
    else if (x == "" && isNaN(x))
    {
        alert("First Name must be filled out");
        return false;
    }
    else if (y == "" && isNAN(y))
    {
        alert("Last Name must be filled out");
        return false;
    }
    else if (z == "" && isNAN(z))
    {
        alert("Location must be filled out");
        return false;
    }
    else if(u == "" && isNAN(u))
    {
        alert("Email must be filled out");
        return false;
    }

}
	