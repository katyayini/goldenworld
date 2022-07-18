const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete blog');
      }
    }
  };

  async function editFormHandler(event) {
    event.preventDefault();
    const title= document.querySelector('#bgname').value;
    const content = document.querySelector('#bgcontent').value;
   
     
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
 
    
    const response = await fetch(`/api/blogs/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        content
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    
    if (response.ok) {
      document.location.replace(`/dashboard`);
    } else {
      alert('Failed to update blog');
    }
  }
  
   
  document.querySelector('.blog-update').addEventListener('click', editFormHandler);
    
  document.querySelector('.blog-list').addEventListener('click', delButtonHandler);