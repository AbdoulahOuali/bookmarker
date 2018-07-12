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

    // local storage text
    // parse json into string and return it back into json
    localStorage.setItem('test', 'Hello world');

    // prevent default from submitting
    e.preventDefault();
}