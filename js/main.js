// listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e) {
    // get form values
    var siteName = document.getElementById('siteName');
    console.log(siteName);
    // prevent default from submitting
    e.preventDefault();
}