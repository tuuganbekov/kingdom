var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } }

document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault()
    sendEmail()
})

function sendEmail() {
    Email.send({
        SecureToken: "ae47d805-36be-419d-bc32-dc5429a86765",
        To : 'btuuganbekov@gmail.com',
        From : "kingdomdev.io@gmail.com",
        Subject : "Заявка с сайта kingdom.io",
        Body : `From:  ${document.getElementById('name').value} 
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