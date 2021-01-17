// 1. Navigation - done
// 2. Add event listener - done
// 3. Get info about each image - done
// 4. Create data structure - done
// 5. Save in localstorage - done
// 6. Display images - done

var uploader = document.getElementById('uploader');
var imagesList = document.querySelector('.images');
var bodyBlackout = document.querySelector('.bodyBlackout'),
    popupModal = document.querySelector(`.popupModal`),
    body = document.querySelector(`body`);

var images = JSON.parse(localStorage.getItem('images')) || [];

function uploadImages() {
    var files = this.files, i, image, fileLength = files.length;
    if(FileReader) {
        for(i = 0; i < fileLength; i += 1) {
            var fileReader = new FileReader(), file = files[i];
            fileReader.addEventListener('load', function (event) {
                image = {};
                image['name'] = file.name;
                image['size'] = file.size;
                image['url'] = event.target.result;
                images.push(image);
                displayImages(images, imagesList); //при загрузке новых элементов отображение элементов с localstorage
                localStorage.setItem('images', JSON.stringify(images));

                var progress = document.querySelector('.percent');
                //var result = document.querySelector(".result");
                progress.style.width = '100%';
                progress.textContent = '100%';
                setTimeout("document.getElementById('progress_bar').className='';", 2000);
            });
            fileReader.addEventListener('loadstart', function (event) {
                document.getElementById('progress_bar').className = 'loading';
            });
            fileReader.readAsDataURL(file);
        }
    } else {
        alert('FileReader API does not support by your browser!');
    }
}

displayImages(images, imagesList); //отображение элементов с localstorage


uploader.addEventListener('change', uploadImages);//вызывает функцию uploadImages при клике на инпут

var removeBtn = document.querySelectorAll('.removeButton');
var itemImage = document.querySelectorAll('.li-images');
var editButton = document.querySelectorAll('.editButton');

removeBtn.forEach(function (item) {
    item.addEventListener('click', removeElem.bind(null, item));
});

itemImage.forEach(function (item) {
    item.addEventListener('click', openImage.bind(null, item));
});
editButton.forEach(function (item) {
    item.addEventListener('click', editElem.bind(null, item));
});