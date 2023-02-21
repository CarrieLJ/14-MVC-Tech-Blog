const addBlog = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();

    if (title && content) {
        const response = await fetch('/api/blogs/addnew', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
    });   

    if (response.ok) {
        document.location.replace('/dashboard');           
    } else {
        alert(response.statusText);
    }
    }
};
        
    document.querySelector('#blog-submit-form').addEventListener('submit',getBlogs);

    document.querySelector("#update-blogs").addEventListener('click', function viewList () {
        document.location.replace('/api/blogs/byuser')
      });
        