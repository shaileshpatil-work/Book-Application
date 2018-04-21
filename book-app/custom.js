//Delete books
let listWrap = document.querySelector('.bookList > ul');
listWrap.addEventListener('click',function(e){
	if(e.target.className == 'deleteBtn'){
		e.target.parentElement.remove();
	}
});

//Add Books 
let addBookForm = document.forms['addBook'];
addBookForm.addEventListener('submit',function(e){
	e.preventDefault();
	let bookName = addBookForm.querySelector('input[type="text"]').value;

	//Create Elements
	let li = document.createElement('li');
	let title = document.createElement('span');
	let btn = document.createElement('button');

	//Add values
	title.textContent = bookName;
	btn.textContent = "button";

	//Add Classes
	title.classList.add("title");
	btn.classList.add("deleteBtn");

	//Append Elements
	li.appendChild(title);
	li.appendChild(btn);
	listWrap.appendChild(li); 
});

//Search Books
let searchBook = document.forms['searchBooks'].querySelector('input[type="text"]');
searchBook.addEventListener('keyup',function(e){
	let term = e.target.value.toLowerCase();
	let books = listWrap.getElementsByTagName('li');
	//convert collection into array for using foreach loop
	Array.from(books).forEach(function(book){
		let bookTitle = book.firstElementChild.textContent;
		
		if(bookTitle.toLowerCase().indexOf(term) != -1){
			book.style.display="block";
		}
		else{
			book.style.display="none";
		}
	})
});