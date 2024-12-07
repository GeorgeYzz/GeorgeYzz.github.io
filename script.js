// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 表单提交处理
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('感谢您的留言！我会尽快回复。');
    this.reset();
});

// 页面加载动画
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
}); 