// إضافة حدث عند الضغط على زر "نعم"
document.getElementById('yes').addEventListener('click', function() {
    // إعادة توجيه المستخدم إلى حساب إنستغرام
    window.location.href = 'https://www.instagram.com/8kp.m/';
});

// إضافة حدث عند الضغط على زر "لا"
document.getElementById('no').addEventListener('click', function() {
    const noButton = document.getElementById('no');
    // تحريك الزر "لا" بعيدًا
    noButton.style.transform = 'translate(' + (Math.random() * 200 - 100) + 'px,' + (Math.random() * 200 - 100) + 'px)';
});
