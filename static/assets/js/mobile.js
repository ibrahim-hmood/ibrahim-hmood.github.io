
//Sets visibility for all tab buttons
function setTabButtonsVisibility(visibility)
{
    //Change visibility of the tabs
    if(visibility)
    {
        visibility = "visible";
    }
    else
    {
        visibility = "hidden";
    }

    var tabsDivs = document.getElementsByClassName("tab");
    Array.prototype.forEach.call(tabsDivs, function(tabs) {
        tabs.style.visibility = visibility;
    });
}

//Shows hidden menu options in mobile page
function showOptions()
{
    //Check if the hamburger menu was already clicked
    var hamburger = document.getElementsByClassName("hamburger")[0];
    var isClicked = hamburger.getAttribute("is_clicked");
    var body = document.getElementById("content");
    if(isClicked)
    {
        //Been clicked, lets hide the tab buttons
        setTabButtonsVisibility(false);

        //And slide the body back in place
        body.classList.remove('animate_sliding_right');
        body.classList.add('animate_sliding_left');
        hamburger.removeAttribute("is_clicked");
    }
    else
    {
        //Lets show the tab buttons
        setTabButtonsVisibility(true);

        //Slide the body to the right
        body.classList.remove('animate_sliding_left');
        body.classList.add('animate_sliding_right');
        hamburger.setAttribute('is_clicked', true);
    }
}