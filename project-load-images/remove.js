function removeElem(itemEl) {
    var contentModal =  document.querySelector('.remove-content');
    contentModal.classList.add('active');
    popupModal.classList.add('is--visible');
    bodyBlackout.classList.add('is-blacked-out');
    body.addEventListener('click', function (e) {
        var target = e.target;
        if(target.classList.contains('btn-true')){
            var li = itemEl.closest('li');
            li.remove();
            var liIndex = li.getAttribute('data-item');
            images.splice(liIndex, 1);
            localStorage.setItem('images', JSON.stringify(images));
            popupModal.classList.remove('is--visible');
            bodyBlackout.classList.remove('is-blacked-out');
            contentModal.classList.remove('active');
        }
        if(target.classList.contains('btn-false')){
            popupModal.classList.remove('is--visible');
            bodyBlackout.classList.remove('is-blacked-out');
            contentModal.classList.remove('active');
        }
    })
}