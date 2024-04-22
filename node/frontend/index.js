let books = [
    {
        book_id: 1,
        book_name: 'Book 1',
        book_author: 'VK1',
        book_pages: 10,
        book_in_stock: true
    },
    {
        book_id: 2,
        book_name: 'Book 2',
        book_author: 'VK2',
        book_pages: 100,
        book_in_stock: true
    },
    {
        book_id: 3,
        book_name: 'Book 3',
        book_author: 'VK3',
        book_pages: 15,
        book_in_stock: true
    },
]

/*
{
    id: 1,
    title: '',
    classes: [],
    tagName: '',
    attributes: [{
        key:value
    }]
}
*/

function createEl(options = {}){
    let el = document.createElement(options.tagName)
    if (options.hasOwnProperty('classes') 
            && Array.isArray(options.classes))
        {
            options.classes.forEach(className => {
                el.classList.add(className)
            })
    }
    if (options.hasOwnProperty('attributes') 
            && Array.isArray(options.attributes)){

            options.attributes.forEach(attribute => {
                let attr = Object.entries(attribute)
                el.setAttribute(attr[0][0], attr[0][1])
            })
        
    }
    el.innerText = options.title
    return el
}

let bookListContainer = document.querySelector('.list-group')

books.forEach(book => {
    let li = createEl({
        id: book.book_id,
        title: book.book_name,
        classes: ['list-group-item', 'd-flex', 'justify-content-between', 'align-items-center'],
        tagName: 'li'
    })

    let buttonsContainer = createEl({
        tagName: 'div'
    })

    let btnDelete = createEl({
        title: 'Delete',
        classes:['btn', 'btn-danger', 'btn-delete'],
        tagName: 'div',
        attributes: [{
            'data-id': book.book_id,
                
        }]
    })

    let btnEdit = createEl({
        title: 'Edit',
        classes:['btn', 'btn-primary', 'btn-edit'],
        tagName: 'div',
        attributes: [{
            'data-id': book.book_id
        }]
    })

    buttonsContainer.innerHTML = btnDelete.outerHTML + btnEdit.outerHTML
    li.innerHTML += buttonsContainer.outerHTML

    bookListContainer.innerHTML += li.outerHTML

})


let editButtons = document.querySelectorAll('.btn-edit')
let editButtonID = -1

editButtons.forEach(btnEdit => {
    btnEdit.addEventListener('click', event => {
        console.log(event.target.dataset.id);
        editButtonID = event.target.dataset.id

        const myModalEl = document.getElementById('exampleModal')
      
        const myModalAlternative = new bootstrap.Modal(myModalEl, {})
        myModalAlternative.show(myModalEl)
        
        myModalEl.addEventListener('shown.bs.modal', event => {
            // do something...
            console.log('modal is shown ');
            let modalBody = myModalEl.querySelector('#modal-body')
            fetch('../frontend/form.html')
            .then(response => {
                return response.text()
            })
            .then(form => {

                modalBody.innerHTML = form

                let forma = document.getElementById('frmBook')
                //var data = new FormData(form);
                Array.from(forma.elements).forEach(input => {
                    input.value = books[editButtonID].book_name // todo 
                })


                //inp.value = books[editButtonID].book_name

                //modalBody.innerHTML = doc.body.innerHTML 
            })
        })
        
    })
}) 

let deleteButtons = document.querySelectorAll('.btn-delete')
deleteButtons.forEach(btnDelete => {
    btnDelete.addEventListener('click', event => {
        console.log(event.target.dataset.id);
    })
}) 