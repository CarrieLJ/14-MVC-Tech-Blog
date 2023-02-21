const addBlog = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const contents = document.querySelector('#content').value.trim();

    console.log(title, contents);

    if (title && contents) {
      
      const response = await fetch('/api/blog', {
        method: 'POST',
        body: JSON.stringify({ title, contents }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      // if (response.ok) {
      //   document.location.reload();
      // } else {
      //   alert(response.statusText);
      // }
    }
    document.location.replace('/dashboard');
  };
  
  document.querySelector('#blog-form').addEventListener('submit', addBlog);

  // document.querySelector("#update-blog").addEventListener('click', function viewList () {
  //   document.location.replace('/api/blog/byuser')
  // });

