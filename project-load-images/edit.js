function editElem(itemEl) {
    var li = itemEl.closest('li');
    var parentNumber = li.getAttribute('data-item');
    var saveBtn = li.querySelector('.saveButton');

    var textName = li.querySelector('.nameImage');
    textName.contentEditable = 'true';
    textName.focus();
    saveBtn.classList.add('active');
    itemEl.classList.remove('active');

    saveBtn.addEventListener('click',function () {
        images[parentNumber].name = textName.textContent;
        localStorage.setItem('images', JSON.stringify(images));
        itemEl.classList.add('active');
        saveBtn.classList.remove('active');
    });
}