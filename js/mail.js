document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault()
    sendEmail()
})

function sendEmail() {
    Email.send({
        SecureToken: "1778863d-b8ee-4e57-a584-700d1deffc67",
        To : 'btuuganbekov@gmail.com',
        From : "kingdomdev.io@gmail.com",
        Subject : "Заявка с сайта kingdom.io",
        Body : `From:  ${document.getElementById('name').value} \n
        Email: ${document.getElementById('email').value}
        Phone: ${document.getElementById('phone').value}
        Message: ${document.getElementById('message').value}`
    }).then(
      message => message === "OK" ? alert("Сообщение отправлено") : alert(message)
    ).then( () => {
        document.getElementById('name').value = ""
        document.getElementById('email').value = ""
        document.getElementById('phone').value = ""
        document.getElementById('message').value = ""
    })
}