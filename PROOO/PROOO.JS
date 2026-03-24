const dot = document.getElementById("dot");

window.addEventListener("mousemove", function (event) {
    const x = event.clientX;
    const y = event.clientY;
    dot.style.transform = `translate(${x - 6}px, ${y - 6}px)`;
});

loding = document.getElementById('loding');
home = document.getElementById('web');

setTimeout(function zoom() {
    loding.style.height = '0vh';
    loding.style.animation = `10s ease`;
    home.style.display = 'block';
}, 2000);

let nav = document.getElementById('nav');
setInterval(function ggg() {
    nav.style.transform = `translateY(0%)`
    nav.style.animationDelay = '0.3s'
}, 20)
function updateClock() {
    const now = new Date();

    // ساعات ودقايق
    let hours = now.getHours();
    let minutes = now.getMinutes();

    // تزبيط لو أقل من 10
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    document.getElementById("time").textContent = `${hours}:${minutes}`;
}

// أول تشغيل
updateClock();
// تحديث كل دقيقة
setInterval(updateClock, 1000 * 60);

const text = document.getElementById("text");

window.addEventListener("scroll", () => {
    if (text) {
        const blurValue = Math.max(0, 8 - window.scrollY / 50);
        text.style.filter = `blur(${blurValue}px)`;
    }
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const navItems = document.querySelectorAll("#nav-links a");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

navItems.forEach(item => {
    item.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
    });
});

const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const btn = this.querySelector('button');
        const originalText = btn.textContent;
        btn.textContent = "SENDING...";

        /* للمرة الأولى فقط، سيصلك إيميل تفعيل من FormSubmit، قم بتأكيده لتبدأ بتلقي الرسائل */
        fetch("https://formsubmit.co/ajax/a.sherif.student@gmail.com", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: this.name.value,
                email: this.email.value,
                message: this.message.value,
                _subject: "New Message from Portfolio"
            })
        })
            .then(response => response.json())
            .then(data => {
                alert("Message sent successfully!");
                this.reset();
                btn.textContent = originalText;
            })
            .catch(error => {
                console.log(error);
                alert("Error sending message.");
                btn.textContent = originalText;
            });
    });
}

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);