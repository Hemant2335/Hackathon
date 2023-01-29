// Sidebar Starts


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

// Sidebar Ends

// local connections Starts

const socket = io.connect("http://localhost:5500");

const form = document.getElementById("send-cont");
const msginpt = document.getElementById("msgInp");
const msgcont = document.querySelector(".chatbox");

const append=(msg , position)=>{
    const msg_el = document.createElement("div");
    msg_el.innerText = msg;
    msg_el.classList.add("msg")
    msg_el.classList.add(position);
    msgcont.append(msg_el)

}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const message = msginpt.value;
    append(`You : ${message}`,"right")
    socket.emit("send",message)
    msginpt.value = "";
})
const name  = prompt("Enter your name");

socket.emit("new_user_joined", name);

socket.on("user_joined" , name =>{
    append(`${name} has joined the chat`, "left"); 
})

socket.on("recieve" , data =>{
    append(`${data.message} : ${data.user} `,`left`); 
})

// local connection ends
