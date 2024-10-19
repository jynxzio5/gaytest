let isPlaying = false; // لتتبع ما إذا كانت الموسيقى تعمل

document.getElementById('yes').addEventListener('click', function() {
    // إعادة توجيه المستخدم إلى حساب إنستغرام
    window.location.href = 'https://www.instagram.com/8kp.m/';
});

document.getElementById('no').addEventListener('click', function() {
    const audio = document.getElementById('backgroundMusic');
    
    // إذا لم تكن الموسيقى تعمل، شغلها
    if (!isPlaying) {
        audio.play(); // تشغيل الموسيقى
        isPlaying = true; // تعيين الحالة إلى التشغيل
    }
    
    // تحريك الزر "لا" بعيدًا
    const noButton = document.getElementById('no');
    noButton.style.transform = 'translate(' + (Math.random() * 200 - 100) + 'px,' + (Math.random() * 200 - 100) + 'px)';
});
