//Opens a page
function openPage(event, pageID)
{
    var i, tabcontent, tablinks;
    //Get every tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    //Get all tablinks
    tablinks = document.getElementsByClassName("tablink");
    for(i = 0; i < tablinks.length; i++)
    {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    for(i = 0; i < tabcontent.length; i++)
    {
        tabcontent[i].style.display = "none";
    }

    //Show the current tab and make the button that showed it "active"
    var selectedPage = document.getElementById(pageID);
    if(selectedPage)
    {
        selectedPage.style.display = "block";
        event.currentTarget.className += " active";
    
        //Now animate the page sliding up
        animateSlidingUpToCenter(selectedPage);
    }
}

//Applies the sliding up animation to tabcontent
function animateSlidingUpToCenter(tabcontent)
{
    tabcontent.classList.add('animate_slide_up_center');
}


function onItemClicked(event)
{
    //Try and open the associated project's url
    var item = event.currentTarget;
    if(item.hasAttribute("url"))
    {
        //Open the url in a new tab
        var url = item.getAttribute("url");
        window.open(url, "_blank");
    }
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

    //For the projects, make sure you redirect to their url when project item is clicked
    var projectItems = document.getElementsByClassName("item");
    for(i = 0; i < projectItems.length; i++)
    {
        var item = projectItems[i];
        item.addEventListener("click", onItemClicked, false);
    }
}
