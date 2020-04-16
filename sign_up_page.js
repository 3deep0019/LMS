var selector;
var selector_t;
function pass()
{
	selector = document.getElementById('passwordd').value;
}

function confirmPassword()
{
	selector_t = document.getElementById('confirmpassword').value;
	if (selector_t != selector) 
	{
		document.getElementById('warning').innerHTML = "Password Doesn't Matched";
	}
	else
	{
		document.getElementById('warning').innerHTML = "";
	}
}
