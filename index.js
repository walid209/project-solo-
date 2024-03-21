
let searchBox = document.querySelector('#search-box');
let images = document.querySelectorAll('.container .image-container .image');

searchBox.addEventListener('input', function() {
    images.forEach(image => image.style.display = 'none');
   
    let term = searchBox.value.toLowerCase();

    images.forEach(image => {
        let title = image.getAttribute('data-title').toLowerCase();
        if (title.includes(term) || term === '') {
            image.style.display = 'block';
        }
    });
});
