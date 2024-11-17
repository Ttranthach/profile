// Hàm đổi màu nền
function changeBackground() {
    const colors = [
        "linear-gradient(45deg, #ff9a9e, #fad0c4)",
        "linear-gradient(45deg, #a18cd1, #fbc2eb)",
        "linear-gradient(45deg, #fad0c4, #ffd1ff)",
        "linear-gradient(45deg, #ffecd2, #fcb69f)",
        "linear-gradient(45deg, #a1c4fd, #c2e9fb)"
    ];
    
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.transition = "background 0.5s ease"; // Thêm hiệu ứng chuyển nền
    document.body.style.background = colors[randomIndex];
}

// Hiệu ứng động cho các vòng ngoài `.outer-circle`
const outerCircles = document.querySelectorAll('.outer-circle');
outerCircles.forEach(circle => {
    // Hiệu ứng khi di chuột
    circle.addEventListener('mousemove', () => {
        circle.classList.add('animate');
    });

    // Gỡ bỏ hiệu ứng khi rời chuột
    circle.addEventListener('mouseleave', () => {
        circle.classList.remove('animate');
    });

    // Hiệu ứng khi click
    circle.addEventListener('click', () => {
        circle.classList.add('animate');
        setTimeout(() => circle.classList.remove('animate'), 300);
    });
});

// Thêm sự kiện click vào liên kết
document.querySelectorAll('.profile-contact a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Ngăn điều hướng mặc định
        changeBackground(); // Gọi hàm đổi màu nền
        
        // Thêm hiệu ứng cho liên kết khi click
        link.style.color = "#fff";
        link.style.background = "rgba(0, 0, 0, 0.1)";
        link.style.transition = "color 0.3s, background 0.3s";
        
        // Chuyển hướng đến liên kết sau 300ms
        setTimeout(() => {
            window.location.href = link.href;
        }, 300);
    });
});
// Hàm đổi màu nền
function changeBackground() {
    const colors = [
        "linear-gradient(45deg, #ff9a9e, #fad0c4)",
        "linear-gradient(45deg, #a18cd1, #fbc2eb)",
        "linear-gradient(45deg, #fad0c4, #ffd1ff)",
        "linear-gradient(45deg, #ffecd2, #fcb69f)",
        "linear-gradient(45deg, #a1c4fd, #c2e9fb)"
    ];
    
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.transition = "background 0.5s ease"; // Thêm hiệu ứng chuyển nền
    document.body.style.background = colors[randomIndex];
}

// Hiệu ứng động cho các vòng ngoài `.outer-circle`
const outerCircles = document.querySelectorAll('.outer-circle');
outerCircles.forEach(circle => {
    // Hiệu ứng khi di chuột
    circle.addEventListener('mousemove', () => {
        circle.classList.add('animate');
    });

    // Gỡ bỏ hiệu ứng khi rời chuột
    circle.addEventListener('mouseleave', () => {
        circle.classList.remove('animate');
    });

    // Hiệu ứng khi click
    circle.addEventListener('click', () => {
        circle.classList.add('animate');
        setTimeout(() => circle.classList.remove('animate'), 300);
    });
});

// Thêm sự kiện click vào liên kết
document.querySelectorAll('.profile-contact a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Ngăn điều hướng mặc định
        changeBackground(); // Gọi hàm đổi màu nền
        
        // Thêm hiệu ứng cho liên kết khi click
        link.style.color = "#fff";
        link.style.background = "rgba(0, 0, 0, 0.1)";
        link.style.transition = "color 0.3s, background 0.3s";
        
        // Chuyển hướng đến liên kết sau 300ms
        setTimeout(() => {
            window.location.href = link.href;
        }, 300);
    });
});
