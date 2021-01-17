function openImage(item) {
    var imageModal =  document.querySelector('.scale-image-content');
    var imageSrc = item.getAttribute('src');
    //console.log(imageSrc)
    imageModal.classList.add('active');
    popupModal.classList.add('is--visible');
    popupModal.classList.add('image-content');
    bodyBlackout.classList.add('is-blacked-out');
    body.addEventListener('click', function (e) {
        var target = e.target;
        if(target.classList.contains('bodyBlackout')){
            popupModal.classList.remove('is--visible');
            bodyBlackout.classList.remove('is-blacked-out');
        }
        imageModal.innerHTML = `<img class="open-images" src="${imageSrc}"> `


    })
}