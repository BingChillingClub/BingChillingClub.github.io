showingQueenText = false;


function changeText()
{
    const el = document.getElementById('main-header');

    if (showingQueenText = !showingQueenText)
    {
        el.textContent = "Queen Elizabeth II is dead.";
    }
    else
    {
        el.textContent = "Long live King Charles III!";
    }   
}


window.setInterval(changeText, 1000);
