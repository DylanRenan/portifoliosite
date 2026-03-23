// ===== CARREGAR HEADER =====
async function loadComponent(id, file) {
    const res = await fetch(file);
    const data = await res.text();
    document.getElementById(id).innerHTML = data;

    // só roda para o header
    if (id === "header") {
        initHeader();
    }
}
loadComponent("header", "header.html");
loadComponent("footer", "footer.html");


// ===== FUNÇÕES DO HEADER =====
function initHeader() {

    const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav");
    const header = document.getElementById("main-header");

    if (!toggle || !nav || !header) {
        console.warn("Header não encontrado ainda");
        return;
    }

    // menu mobile
    toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    // fechar menu ao clicar
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
        });
    });

    // scroll
    window.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 10);
    });

    // link ativo
    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".nav-links a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
}