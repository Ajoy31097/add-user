window.onload = function() {
  axios.get('https://crudcrud.com/api/390c532274d344838cf2c93bce04747e/user_details')
    .then(function(response) {
      console.log(response.data);
      for (var i = 0; i < response.data.length; i++) {
        ShowUserOnScreen(response.data[i]);
      }
    })
    .catch(function(error) {
      console.error(error);
    });
};

function ShowUserOnScreen(user_details) {
  var userDiv = document.createElement('div');
  
  var nameParagraph = document.createElement('p');
  nameParagraph.textContent = 'Name: ' + user_details.Name;
  
  var emailParagraph = document.createElement('p');
  emailParagraph.textContent = 'Email: ' + user_details.Email;
  
  var phoneParagraph = document.createElement('p');
  phoneParagraph.textContent = 'Phone Number: ' + user_details.Phone_No;
  
  var deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function() {
    event.stopPropagation();
    DeleteUser(user_details._id, userDiv);
  });
  
  userDiv.appendChild(nameParagraph);
  userDiv.appendChild(emailParagraph);
  userDiv.appendChild(phoneParagraph);
  userDiv.appendChild(deleteButton);
  
  var outputContainer = document.getElementById('output');
  outputContainer.appendChild(userDiv);
}

function DeleteUser(userId, userDiv) {
  axios.delete(`https://crudcrud.com/api/390c532274d344838cf2c93bce04747e/user_details/${userId}`)
    .then(function(response) {
      console.log(response.data);
      if (response.status === 200) {
        userDiv.remove();
      }
    })
    .catch(function(error) {
      console.error(error);
    });
}