function calculateInterest(form)
{
    var P = parseFloat(form.elements['principal'].value);
    var R = parseFloat(form.elements['rate'].value);
    var T = parseFloat(form.elements['time'].value);

    var Result = (P * R * T) / 100;

    document.getElementById('result').innerHTML = "Simple Interest: " + Result;
}