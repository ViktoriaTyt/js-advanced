// 1. Navigation - done
// 2. Add event listeners - done
// 3. Add item - done
// 4. Display item - done
// 5. Add possibility to edit, remove item and connect it in localStorage - done
// 6. If delete item - show popup Are you sure? - done
// 7. After reload page all data should be correct- done

var itemsList = document.querySelector('.plates');
var addItems = document.querySelector('.add-items');
var items = JSON.parse(localStorage.getItem('items')) || [];
var body = document.querySelector('body');
function addItem(event) {
    event.preventDefault();
    var text = this.querySelector('[name=item]').value;
    var item = {
        text: text,
        done: false
    };
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();

}

function populateList(plates, platesList) {
    platesList.innerHTML = plates.map(function (plate, index) {
        return `
            <li data-item="${index}">
                <input type="checkbox" id="item${index}">
                <label for="item${index}">${plate.text}</label>
                <span class="navigation">
                   <a class="edit-item"></a>
                    <a class="save-item"></a>
                    <a class="remove-item"></a>
                </span>
            </li>
        `
    }).join('');
    var removeItem = document.querySelectorAll('.remove-item');
    var editItem = document.querySelectorAll('.edit-item');
    removeItem.forEach(function (item) {
        item.addEventListener('click', removeElem.bind(null, item));
    });
    editItem.forEach(function (item) {
        item.addEventListener('click', editElem.bind(null, item));
    });
    document.querySelectorAll('input').forEach(function (item) {
        item.addEventListener('click', changeState.bind(null, item));
    });
   var checkboxes = platesList.querySelectorAll('input');
    plates.forEach(function (item, i) {
        checkboxes[i].checked = item.done;
    });
}

populateList(items, itemsList);

addItems.addEventListener('submit', addItem);

function editElem(itemEl) {
    var li = itemEl.closest('li');
    var checkbox = li.querySelector('input');
    var label = li.querySelector('label');
    var iconEdit = li.querySelector('.edit-item');
    var iconSave = li.querySelector('.save-item');
    var liIndex = li.getAttribute('data-item');
    body.addEventListener('click', function (e) {
        if(e.target.classList.contains('save-item')){
            iconEdit.setAttribute('style','display:block;');
            iconSave.setAttribute('style','display:none;');
            checkbox.disabled = false;
            items[liIndex].text = label.textContent;
            localStorage.setItem('items', JSON.stringify(items));
            populateList(items, itemsList);
        }
    })

    iconEdit.setAttribute('style','display:none;');
    iconSave.setAttribute('style','display:block;');

    checkbox.disabled = true;
    label.contentEditable = 'true';
    label.focus();
}

function removeElem(itemEl) {
    var bodyBlackout = document.querySelector('.bodyBlackout'),
     popupModal = document.querySelector(`.popupModal`);
    popupModal.classList.add('is--visible');
    bodyBlackout.classList.add('is-blacked-out');
    body.addEventListener('click', function (e) {
        var target = e.target;
        if(target.classList.contains('btn-true')){
            var li = itemEl.closest('li');
            li.remove();
            var liIndex = li.getAttribute('data-item');
            items.splice(liIndex, 1);
            localStorage.setItem('items', JSON.stringify(items));
            popupModal.classList.remove('is--visible');
            bodyBlackout.classList.remove('is-blacked-out');
        }
        if(target.classList.contains('btn-false')){
            popupModal.classList.remove('is--visible');
            bodyBlackout.classList.remove('is-blacked-out');
        }
    })
}

function changeState(itemEl){
    var li = itemEl.closest('li');
    var liIndex = li.getAttribute('data-item');
    items[liIndex].done = itemEl.checked;
    localStorage.setItem('items', JSON.stringify(items));
}

