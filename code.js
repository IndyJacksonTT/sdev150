// Code for the Gallery on events page.
const galleryItems = [
    "No events are active at the moment....\nServer is wiping when Valguero comes out!\nSo check back here by then for information on all the newest events!",
    "Nothing on this page.......",
];

const gallery = document.getElementById("gallery");
const gallery_selector = document.getElementById("galleryselector");

galleryItems.forEach((text, i) => {
    const slide = document.createElement("div");
    slide.textContent = text;
    slide.className = 'gallery_slide';
    if (i !== 0) slide.style.display = 'none';
    gallery.appendChild(slide);
});

galleryItems.forEach((_, i) => {
    const notch = document.createElement('span');
    notch.className = 'gallery_notch';
    if (i === 0) notch.classList.add('active');
    notch.addEventListener("click", () => showSlide(i));
    gallery_selector.appendChild(notch);
});

let currentIndex = 0;

document.getElementById("prevSlide").addEventListener("click", () => {
    showSlide(currentIndex - 1);
});

document.getElementById("nextSlide").addEventListener("click", () => {
    showSlide(currentIndex + 1);
});

function showSlide(index) {
    const slides = document.querySelectorAll(".gallery_slide");
    const notches = document.querySelectorAll(".gallery_notch");

    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentIndex = index;

    slides.forEach(slide => {
        slide.style.display = "none";
    });

    notches.forEach(notch => {
        notch.classList.remove("active");
    });

    document.querySelectorAll(".gallery_slide")[index].style.display = "flex";
    document.querySelectorAll(".gallery_notch")[index].classList.add("active");
}
// -------------------------------
