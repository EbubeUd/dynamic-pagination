function paginate(currentPage, maxPage, maxButtonsToDisplay)
{

    var upperLimit = Math.min(maxPage,(maxButtonsToDisplay + Math.max(0, (currentPage - ((maxButtonsToDisplay + maxButtonsToDisplay % 2 )/2)))));
    var lowerLimit = upperLimit - (maxButtonsToDisplay-1);

    var pages = [];

    if(lowerLimit > 1) pages.push(-1);
    for(var i = lowerLimit; i <= upperLimit; i++ )
    {
        pages.push(i);
    }
    if(upperLimit < maxPage) pages.push(-1);

     return pages;
}




//This is how to use it
var currentPage = 1;
var maxNumberOfPages = 100;
var buttonsPerPage = 10;
var pageButtons = paginate(currentPage,maxNumberOfPages,buttonsPerPage);

if(pageButtons[0] == -1){
  //Show the previous Btn
}
for(var i = 0; i < pageButtons.length; i++)
{
  if(pageButtons[i] < 1) continue;
  //Show the div element with the Button (<button>pageButtons[i]</button>)
}

if(pageButtons[pageButtons.length-1] == -1){
  //Show the next Btn
}