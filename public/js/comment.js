async function editFormHandler() {
    const comment= document.querySelector('#bgcomment').value;
      
    
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if(comment)
    {
    const response = await fetch(`/blogcomment/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        comment
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    
    if (response.ok) {
      document.location.replace(`/viewblog/${id}`);
    } else {
      alert('Failed to add comment');
    }
  }
}
  
  
  document.querySelector('#comment').addEventListener('click', editFormHandler);