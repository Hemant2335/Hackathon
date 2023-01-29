
function search(){
    let url = "https://kontests.net/api/v1/all"
    let response = fetch(url)
    response.then((v)=>{
        return v.json()
    }).then((contest)=>{
        console.log(contest)
        let ihtml = "";
        for (item in contest){
            console.log(contest[item])
            ihtml += `<div class="card">
            <h4 class="kilo">Name:${contest[item].name} </h4>
            <p class="kilop">Starts at: ${contest[item].start_time}</p>
            <p class="kilop">Ends at: ${contest[item].end_time}</p>
        </div>` 
        
        document.getElementById("cardcont").innerHTML = ihtml;
        }
    })
}
