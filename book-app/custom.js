//Delete books
let listWrap = document.querySelector('.bookList > ul');
listWrap.addEventListener('click',function(e){
	if(e.target.className == 'deleteBtn'){
		e.target.parentElement.remove();
	}
});

let ClearTime,clearMessage;
//Add Books 
let addBookForm = document.forms['addBook'];
addBookForm.addEventListener('submit',function(e){
	e.preventDefault();
	let bookName = addBookForm.querySelector('input[type="text"]').value;

	if(bookName==""){
		alert("Please enter value");
		return false;
	}

	//Create Elements
	let li = document.createElement('li');
	let title = document.createElement('span');
	let btn = document.createElement('button');

	//Add values
	title.textContent = bookName;
	btn.textContent = "Delete";

	//Add Classes
	title.classList.add("title");
	btn.classList.add("deleteBtn");

	//Append Elements
	li.appendChild(title);
	li.appendChild(btn);
	listWrap.appendChild(li);

	//Clearing already setted timeouts
	if(ClearTime != undefined){
		clearTimeout(ClearTime); //Avoiding previous setted timeouts
		clearTimeout(clearMessage); //Avoiding previous setted Messages timeout
	}

	//Create new element for append purpose.
	let flashMessage = document.createElement("p");
	flashMessage.classList.add("flashMessage");
	flashMessage.textContent = "Successfully Added";

	//Appending flash message after 1sec for successful addition of book.
	ClearTime = setTimeout(function(){ document.querySelector("body").appendChild(flashMessage); }, 1000);
	
	//Removing flash Message after 1sec for successful addition of book.
	clearMessage = setTimeout(function(){ 
			document.querySelector(".flashMessage").remove();
		 }, 4000);

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