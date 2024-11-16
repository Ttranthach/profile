function changeBackground() {
    const colors = [
        "linear-gradient(45deg, #ff9a9e, #fad0c4)",
        "linear-gradient(45deg, #a18cd1, #fbc2eb)",
        "linear-gradient(45deg, #fad0c4, #ffd1ff)",
        "linear-gradient(45deg, #ffecd2, #fcb69f)",
        "linear-gradient(45deg, #a1c4fd, #c2e9fb)",
    ];
    
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.background = colors[randomIndex]; // Đổi màu nền
}


const outerCircles = document.querySelectorAll('.outer-circle');

outerCircles.forEach(circle => {
    circle.addEventListener('mousemove', () => {
        circle.classList.add('animate');
    });

    circle.addEventListener('mouseleave', () => {
        circle.classList.remove('animate');
    });
});

// Thêm sự kiện nhấn vào các phần tử liên hệ
document.querySelectorAll('.profile-contact a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Ngăn chặn hành động mặc định
        changeBackground(); // Gọi hàm đổi nền
        
        // Thêm hiệu ứng cho liên kết (tuỳ chọn)
        link.style.color = "#fff";
        link.style.background = "rgba(0, 0, 0, 0.1)";
        link.style.transition = "color 0.3s, background 0.3s";
        
        setTimeout(() => {
            window.location.href = link.href; // Điều hướng sau khi đổi nền
        }, 300);
    });
});
