// import data from './books.json';

// Sample book data (replace this with your JSON data)
const books = 
[
    {
        "title": "The Canterbury Tales",
        "author": "Geoffery Chaucer",
        "date_published": "2021-09-01",
        "copies_available": 5,
        "ISBN": "12ERTYU876IOKJH34567",
        "category": "Non-Fictional",
        "image_src": "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010__340.jpg"
    },
    {
        "title": "Beuwolf",
        "author": "Geofery Chaucer",
        "date_published": "2021-09-01",
        "copies_available": 5,
        "ISBN": "12MNBGYU76IOKJH98567",
        "category": "Non-Fictional",
        "image_src": "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010__340.jpg"
    },
    {
        "title": "Mid Summer Night's Dream",
        "author": "William Shakespeare",
        "date_published": "2021-09-01",
        "copies_available": 5,
        "ISBN": "KJHGFRTYU987654YTR",
        "category": "Non-Fictional",
        "image_src": "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010__340.jpg"
    },
    {
        "title": "The Defining Decade",
        "author": "Dr. Jay",
        "date_published": "2021-09-01",
        "copies_available": 5,
        "ISBN": "12ERTYU876IOKJH34567",
        "category": "Non-Fictional",
        "image_src": "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010__340.jpg"
    },
    {
        "title": "Maps of Meaning",
        "author": "Jordan Peterson",
        "date_published": "2021-09-01",
        "copies_available": 5,
        "ISBN": "12ERTYU876IOKJH34567",
        "category": "Non-Fictional",
        "image_src": "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010__340.jpg"
    },
    {
        "title": "12 Rules of Life",
        "author": "Jordan Peterson",
        "date_published": "2021-09-01",
        "copies_available": 5,
        "ISBN": "12ERTYU876IOKJH34567",
        "category": "Non-Fictional",
        "image_src": "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010__340.jpg"
    },
    {
        "title": "Ode to A Knightingale",
        "author": "John Keates",
        "date_published": "2021-09-01",
        "copies_available": 5,
        "ISBN": "12ERTYU876IOKJH34567",
        "category": "Non-Fictional",
        "image_src": "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010__340.jpg"
    },
    {
        "title": "Julius Ceaser",
        "author": "William Shakespeare",
        "date_published": "2021-09-01",
        "copies_available": 5,
        "ISBN": "12ERTYU876IOKJH34567",
        "category": "Non-Fictional",
        "image_src": "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010__340.jpg"
    },
    {
        "title": "Othello",
        "author": "William Shakespeare",
        "date_published": "2021-09-01",
        "copies_available": 5,
        "ISBN": "12ERTYU876IOKJH34567",
        "category": "Non-Fictional",
        "image_src": "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010__340.jpg"
    },
    {
        "title": "Paradise Lost",
        "author": "John Milton",
        "date_published": "2021-09-01",
        "copies_available": 5,
        "ISBN": "12ERTYU876IOKJH34567",
        "category": "Non-Fictional",
        "image_src": "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010__340.jpg"
    },
    {
        "title": "The Alchemist",
        "author": "Paulo Coelho",
        "date_published": "2021-09-01",
        "copies_available": 5,
        "ISBN": "12ERTYU876IOKJH34567",
        "category": "Non-Fictional",
        "image_src": "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010__340.jpg"
    }
]

// Function to create book elements in the DOM
function displayBooks() {
    const displaySection = document.querySelector('#displaySection');
    let idx = 0;

    books.forEach((book) => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('bookItem');

        const img = document.createElement('img');
        img.src = book.image_src;
        img.alt = '';

        const bookInfo = document.createElement('div');
        bookInfo.classList.add('bookInfo');

        const description = document.createElement('p');
        description.classList.add('description');
        description.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...';

        const title = document.createElement('p');
        title.classList.add('title');
        title.innerHTML = `<strong>Title:</strong> <em>${book.title}</em>`;

        const author = document.createElement('p');
        author.classList.add('author');
        author.innerHTML = `<strong>Author:</strong> <em>${book.author}</em>`;

        const date = document.createElement('p');
        date.classList.add('date');
        date.innerHTML = `<strong>Date Published:</strong> <em>${book.date_published}</em>`;

        const copies = document.createElement('p');
        copies.classList.add('copies');
        copies.innerHTML = `<strong>Copies Available:</strong> <em>${book.copies_available}</em>`;

        const isbn = document.createElement('p');
        isbn.classList.add('isbn');
        isbn.innerHTML = `<strong>ISBN:</strong> <em>${book.ISBN}</em>`;

        const category = document.createElement('p');
        category.classList.add('category');
        category.innerHTML = `<strong>Category:</strong> <em>${book.category}</em>`;

        const action = document.createElement('div');
        action.classList.add('action');

        const borrowBtn = document.createElement('button');
        borrowBtn.classList.add('borrowBtn');
        borrowBtn.textContent = 'Borrow';

        borrowBtn.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default form submission

            const borrowForm = document.createElement("form");
            borrowForm.setAttribute("id", "borrowForm");
            borrowForm.classList.add("borrowForm");

            const bookTitle = document.createElement("p");
            bookTitle.classList.add("borrowConst");
            bookTitle.textContent = title.textContent;
            borrowForm.appendChild(bookTitle);
            
            const bookAuthor = document.createElement("p");
            bookAuthor.classList.add("borrowConst");
            bookAuthor.textContent = author.textContent;
            borrowForm.appendChild(bookAuthor);

            const bookISBN = document.createElement("p");
            bookISBN.classList.add("borrowConst");
            bookISBN.textContent = isbn.textContent;
            borrowForm.appendChild(bookISBN);

            const userName = document.createElement("input");
            userName.classList.add("borrowInputField");
            userName.setAttribute("type", "text");
            userName.setAttribute("name", "userName");
            userName.setAttribute("placeholder", "Type your Name");
            borrowForm.appendChild(userName);

            const userEmail = document.createElement("input");
            userEmail.classList.add("borrowInputField");
            userEmail.setAttribute("type", "text");
            userEmail.setAttribute("name", "userEmail");
            userEmail.setAttribute("placeholder", "person@other.mail");
            borrowForm.appendChild(userEmail);

            const userPhone = document.createElement("input");
            userPhone.classList.add("borrowInputField");
            userPhone.setAttribute("type", "text");
            userPhone.setAttribute("name", "userPhone");
            userPhone.setAttribute("placeholder", "Type your Phone Number");
            borrowForm.appendChild(userPhone);

            const submitButton = document.createElement("button");
            submitButton.classList.add("borrowInputField");
            submitButton.setAttribute("type", "submit");
            submitButton.innerHTML = "Submit";
            borrowForm.appendChild(submitButton);

            // Append the form to the body
            document.body.appendChild(borrowForm);

            // Click event listener for submit button
            submitButton.addEventListener("click", function(event) {
                event.preventDefault(); // Prevent default form submission

                // Get the user's name, email, and phone number
                const name = userName.value;
                const email = userEmail.value;
                const phone = userPhone.value;

                if (name === "" || email === "" || phone === "") {
                    alert("Please fill out all fields!");
                    // return;
                }
                else if (isNaN(phone)) {
                    alert("Please enter a valid phone number!");
                    // return;
                }
                else {
                    const user = {
                        name: name,
                        email: email,
                        phone: phone
                    }
                    alert(`Thank you ${name} for borrowing this book!"`);

                    console.log(user);
                    
                }
                const form = document.getElementById("borrowForm");
                document.body.removeChild(form);
            });

            // Click event listener for window
            window.addEventListener("click", function(event) {
                event.preventDefault(); // Prevent default form submission
                if (event.target === borrowForm) {
                    const form = document.getElementById("borrowForm");
                    document.body.removeChild(form);
                }
            });

            // Stop event propagation to prevent window click event firing immediately
            borrowForm.addEventListener("click", function(event) {
                event.stopPropagation();
            });

            // Styling for modal appearance
            borrowForm.style.display = "block";
            borrowForm.style.position = "fixed";
            borrowForm.style.top = "50%";
            borrowForm.style.left = "50%";
            borrowForm.style.transform = "translate(-50%, -50%)";
            borrowForm.style.zIndex = "1000";
            borrowForm.style.backgroundColor = "white";
            borrowForm.style.padding = "20px";
            borrowForm.style.border = "1px solid black";
            borrowForm.style.borderRadius = "5px";
        });


        action.appendChild(borrowBtn);

        bookInfo.appendChild(description);
        bookInfo.appendChild(title);
        bookInfo.appendChild(author);
        bookInfo.appendChild(date);
        bookInfo.appendChild(copies);
        bookInfo.appendChild(isbn);
        bookInfo.appendChild(category);
        bookInfo.appendChild(action);

        if (idx % 2 === 0) {
            bookItem.appendChild(img);
            bookItem.appendChild(bookInfo);

        } else {
            bookItem.appendChild(bookInfo);
            bookItem.appendChild(img);
        }

        displaySection.appendChild(bookItem);
        idx++;
    });
}


// Call the function to display books
window.onload = displayBooks();
   