//Opens a page
function openPage(event, pageID)
{
    var i, tabcontent, tablinks;

    //Get every tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for(i = 0; i < tabcontent.length; i++)
    {
        tabcontent[i].style.display = "none";
    }

    //Get all tablinks
    tablinks = document.getElementsByClassName("tablink");
    for(i = 0; i < tablinks.length; i++)
    {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    //Show the current tab and make the button that showed it "active"
    document.getElementById(pageID).style.display = "block";
    event.currentTarget.className += " active";
}

//Load the default tab when page is loaded
function onPageLoaded()
{
    //Identify the default tablink
    var tablinks = document.getElementsByClassName("tablink");
    var i;

    for(i = 0; i < tablinks.length; i++)
    {
        //Get current tablink
        var tablink = tablinks[i];

        //And check if it should be opened by default
        if(tablink.hasAttribute("default"))
        {
            //Click on the link
            tablink.click();
        }
    }
}

window.addEventListener("load", onPageLoaded, false);