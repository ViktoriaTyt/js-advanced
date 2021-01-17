function displayImages(images, imagesList) {

    imagesList.innerHTML = images.map(function (image, index) {
        return `
            <li data-item="${index}">
                <figure>
                <div class="wrapper-img">
                    <img src=${image.url} alt="Image ${index + 1}" class="li-images">
                </div>
                    <figcaption>
                        <p class="nameImage">${image.name}
                           <!-- <span class="edit active">Edit</span>
                            <span class="save"></span>-->

                        </p>
                        <p>${(image.size / 1000).toFixed(1)} kB</p>
                    </figcaption>
                    <div class="wrapper-btn">
                         <button class="editButton active">Edit name</button>
                         <button class="saveButton">Save</button>
                        <button class="removeButton">Remove</button>
                    </div>
                   
                </figure>
            </li>
        `
    }).join('');
}