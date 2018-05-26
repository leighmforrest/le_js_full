function activateGallery() {
    let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
    let mainImage = document.querySelector("#gallery-photo img");

    thumbnails.forEach((thumbnail)=>{
        // preload large images.
        largeVersion = new Image();
        largeVersion.src = thumbnail.dataset.largeVersion;
        thumbnail.addEventListener("click", ()=>{
            let newImageSrc = thumbnail.dataset.largeVersion;
            mainImage.setAttribute("src", newImageSrc);

            // Change which image is current
            document.querySelector('.current').classList.remove("current");
            thumbnail.parentNode.classList.add("current");

            // Update image info
            let galleryInfo = document.querySelector("#gallery-info");
            let title = galleryInfo.querySelector(".title");
            let description = galleryInfo.querySelector(".description");

            title.innerHTML = thumbnail.dataset.title;
            description.innerHTML =thumbnail.dataset.description;
        });
    });
}
