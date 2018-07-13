// listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e) {
    // get form values
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;

    var bookMark = {
            name: siteName,
            url: siteUrl
        }
        /*
            // local storage text
            // parse json into string and return it back into json
            localStorage.setItem('test', 'Hello world');
            console.log(localStorage.getItem('test'));
            localStorage.removeItem('test');
            console.log(localStorage.getItem('test'));
        */

    // Test if bookmarks is null
    if (localStorage.getItem('bookmarks') === null) {
        // Declare an array for storing bookmarks
        var bookmarks = [];
        // add values to array 
        bookmarks.push(bookmark);
        // set to localstorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    // prevent default from submitting
    e.preventDefault();
}