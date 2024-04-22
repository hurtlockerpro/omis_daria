
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

function refreshBooksList(){
    let bookListContainer = document.querySelector('.list-group')

    /*
    CORS options
    {
  mode: 'cors',
  headers: {
    'Access-Control-Allow-Origin':'*'
  }
}
    */
    fetch('http://localhost/books')
    .then(res => res.json())
    .then(books => {

        bookListContainer.innerHTML = ''
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
                    .then(response => response.text())
                    .then(form => {

                        modalBody.innerHTML = form

                        fetch('http://localhost/book/' + editButtonID)
                        .then(res => res.json())
                        .then(data => {

                            let forma = document.getElementById('frmBook')
                            forma.elements.book_name.value = data.book_name
                            forma.elements.book_author.value = data.book_author
                            forma.elements.book_pages.value = data.book_pages
                            forma.elements.book_in_stock.checked = data.book_in_stock
                            /*
                            Array.from(forma.elements).forEach(input => {
                                input.value = books[editButtonID].book_name // todo 
                            })*/

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
                fetch('http://localhost/book/delete/' + event.target.dataset.id, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                })
                .then(res => res.json())
                .then(deleteResult => {
                    if (deleteResult.result == 'deleted OK')
                    {
                        refreshBooksList()
                    }    
                })
            })
        }) 
    })

}

refreshBooksList()

let btnSave = document.getElementById('btnAction')
btnAction.addEventListener('click', event => {
    let form = document.getElementById('frmBook')
    let currentForm = new FormData(form)

    let tmpFormData = []
    Array.from(form.elements).forEach(el => {
        tmpFormData[el.id] = el.value
        /*
        if(el.id == 'book_in_stock')
        {
            if (el.value == 'on'){
                tmpFormData[el.id] = true
            } else {
                tmpFormData[el.id] = false
            }
        } else {
            tmpFormData[el.id] = el.value
        }*/
    })
        
    

    fetch('http://localhost/book/edit', {
        method: "POST",
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify(
            Object.assign({}, tmpFormData)
        )
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
})
