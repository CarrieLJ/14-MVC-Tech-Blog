async function getBlogs(event) {
    event.preventDefault();
        const title = document.querySelector('#title').value.trim();
        const content = document.querySelector('#content').value.trim();
        const entry = [{entry:title}, {entry:content}];
          
    //collects the user blog inputs and sends them to the blog route
    const response = await fetch('/api/blogs', {
        method: 'POST',
        body: JSON.stringify(entry),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
    // If successful, redirect the browser to the main page
        document.location.replace('/homepage');           
    } else {
        alert(response.statusText);
    }
};
        
document.querySelector('#blog-submit-form').addEventListener('submit',getBlogs);