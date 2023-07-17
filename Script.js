// function myfunction(event) {
//   event.preventDefault();

//   var user_details = {
//     Name: document.getElementById('name').value,
//     Email: document.getElementById('email').value,
//     Phone_No: document.getElementById('phone').value
//   };

  

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
  
  userDiv.appendChild(nameParagraph);
  userDiv.appendChild(emailParagraph);
  userDiv.appendChild(phoneParagraph);
  
  var outputContainer = document.getElementById('output');
  outputContainer.appendChild(userDiv);
}