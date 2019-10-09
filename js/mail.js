function sendEmail() {
    Email.send({
        SecureToken : "52ce27ab-20df-4a87-a372-e6eb04b6a850",
        To : 'kingdomdev.io@gmail.com',
        From : 'kingdomdev.io@gmail.com',
        Subject : "Заявка с сайта kingdom.io",
        Body : `From:  ${document.getElementById('name').value}
                Email: ${document.getElementById('email').value}
                Phone: ${document.getElementById('phone').value}
                Message: ${document.getElementById('message').value}`
    }).then(
        message => message === 'OK' ? alert("Success") : alert(message)
    );
}