const addBlog = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();

    console.log(title, content);

    if (title && content) {
      
      const response = await fetch('/api/homepage', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document.querySelector('#blog-form').addEventListener('submit', addBlog);

  document.querySelector("#update-blog").addEventListener('click', function viewList () {
    document.location.replace('/api/blog/byuser')
  });

