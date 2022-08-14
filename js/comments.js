window.addEventListener('load', ()=>{
    let checkData = localStorage.getItem("_comment")
    if(!checkData){
        return localStorage.setItem("_comment", "[]")
    }
})

const handleComment = (event)=>{
    event.preventDefault()

    const {name, phone, send, kehadiran} = event.target


    console.info({
        name : name.value,
        phone : phone.value,
        send : send.value,
        kehadiran : kehadiran.value,
    })

    let currentComment = JSON.parse(localStorage.getItem("_comment"))
    let newComment = currentComment.push({
        name : name.value,
        phone : phone.value,
        send : send.value,
        kehadiran : kehadiran.value,
    })

    localStorage.setItem("_comment", JSON.stringify(currentComment))

}

window.addEventListener("load", ()=>{
    const root = document.getElementById("root")
    const contactData = JSON.parse(localStorage.getItem("_comment"))
    console.log(contactData)

    contactData.map((e)=>{
        root.innerHTML +=`
            <div class="comment_card">
                <h3>${e.name}</h3>
                <p>${e.phone}</p>
                <p>${e.send}</p>
                <small>${e.kehadiran}</small>
            </div>
        `
    })
})