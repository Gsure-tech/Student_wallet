document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.querySelector('.product-image-carousel-container');
    const detailsContainer = document.getElementById('product-details');
    let imageHeight = imageContainer.offsetHeight;
    let detailsHeight = detailsContainer.offsetHeight;

    window.addEventListener('scroll', () => {
        let scrollFromTop = window.pageYOffset;
        let imageEnd = imageContainer.offsetTop + imageHeight;
        let detailsEnd = detailsContainer.offsetTop + detailsHeight;

        // Adjust positions based on scroll
        if (scrollFromTop >= imageEnd) {
            imageContainer.style.position = 'fixed';
            imageContainer.style.top = '0';
            if (scrollFromTop >= detailsEnd) {
                detailsContainer.style.position = 'fixed';
                detailsContainer.style.top = '0';
            } else {
                detailsContainer.style.top = '50vh';
            }
        } else {
            imageContainer.style.top = '0';
            detailsContainer.style.top = '50vh';
        }
    });
});
