
var ihtml = "hi"

const cmenu = ()=>{
    if (ihtml == "hi")
    {
        ihtml = `<div class="content">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Chat</a></li>
            <li><a href="#">About us</a></li>
        </ul>
        </div>`
        document.getElementById("container").innerHTML = ihtml;
        ihtml = "no";
    }
    else{
        document.getElementById("container").innerHTML = "";
        ihtml = "hi";
    }
}