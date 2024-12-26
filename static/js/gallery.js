document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const gallery = document.querySelector(".gallery");
    const sliderContainer = document.querySelector(".slider-container");
    const swiperWrapper = document.querySelector(".swiper-wrapper");
    const backButton = document.querySelector(".back-button");
    const fullscreenOverlay = document.querySelector(".fullscreen-overlay");
    const fullscreenImage = fullscreenOverlay.querySelector("img");
    const closeButton = fullscreenOverlay.querySelector(".close-button");

    // Initialize Swiper
    const swiper = new Swiper(".swiper", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // Fetch JSON data
    fetch("/media/cards.json")
        .then(response => response.json())
        .then(data => {
            const galleryId = new URLSearchParams(window.location.search).get("gallery");
            const galleryData = data.gallery[galleryId];

            if (!galleryData || !galleryData.images.length) {
                gallery.innerHTML = `<p>Изображения не найдены</p>`;
                return;
            }

            // Create gallery cards
            galleryData.images.forEach((imageUrl, index) => {
                const card = document.createElement("div");
                card.classList.add("card");
                card.style.backgroundImage = `url('${imageUrl}')`;
                card.dataset.image = imageUrl;
                gallery.appendChild(card);

                // Create Swiper slides
                const slide = document.createElement("div");
                slide.classList.add("swiper-slide");
                slide.innerHTML = `<img src="${imageUrl}" alt="Work Image">`;
                swiperWrapper.appendChild(slide);
            });

            swiper.update(); // Update Swiper with new slides
        })
        .catch(error => {
            gallery.innerHTML = `<p>Error loading gallery data.</p>`;
        });

    // Card click functionality
    gallery.addEventListener("click", (e) => {
        const card = e.target.closest(".card");
        if (card) {
            const cardIndex = Array.from(gallery.children).indexOf(card);
            swiper.slideTo(cardIndex); // Go to the clicked slide
            container.classList.add("hidden");
            sliderContainer.classList.remove("hidden");
        }
    });

    // Back button functionality
    backButton.addEventListener("click", () => {
        container.classList.remove("hidden");
        sliderContainer.classList.add("hidden");
    });

    // Open fullscreen on image click
    swiperWrapper.addEventListener("click", (e) => {
        if (e.target.tagName === "IMG") {
            fullscreenImage.src = e.target.src;
            fullscreenOverlay.style.display = "flex";
        }
    });

    // Close fullscreen
    closeButton.addEventListener("click", () => {
        fullscreenOverlay.style.display = "none";
    });

    // Close fullscreen on background click
    fullscreenOverlay.addEventListener("click", (e) => {
        if (e.target === fullscreenOverlay) {
            fullscreenOverlay.style.display = "none";
        }
    });
});
