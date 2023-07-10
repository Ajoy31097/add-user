function myfunction(e) {
    e.preventDefault();
    var user_details = {
        Name: document.getElementById('name').value,
        Email: document.getElementById('email').value,
        Phone_No: document.getElementById('phone').value
    };
    var storedUserDetails = localStorage.getItem('userDetails');
    var userDetailsArray = storedUserDetails ? JSON.parse(storedUserDetails) : [];
    userDetailsArray.push(user_details);
    localStorage.setItem('userDetails', JSON.stringify(userDetailsArray));
    displayUserDetails(userDetailsArray);
}

function displayUserDetails(userDetailsArray) {
    var outputElement = document.getElementById('output');
    outputElement.innerHTML = ''; // Clear the output element
  
    userDetailsArray.forEach(function(userDetails, index) {
      var listItem = document.createElement('li');
      listItem.textContent = JSON.stringify(userDetails);
      var deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function() {
        userDetailsArray.splice(index, 1);
        localStorage.setItem('userDetails', JSON.stringify(userDetailsArray));
        displayUserDetails(userDetailsArray);
      });
  
      var editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.addEventListener('click', function () {
        editUserDetails(userDetailsArray, index);
      });
  
      listItem.appendChild(editButton);
      listItem.appendChild(deleteButton);
      outputElement.appendChild(listItem);
    });
  }
function editUserDetails(userDetailsArray, index) {
    var newName = prompt('Enter the new name:');
    var newEmail = prompt('Enter the new email:');
    var newPhone = prompt('Enter the new phone number');

    if (newName !== null && newEmail !== null && newPhone !== null && newName !== '' && newEmail !== '' && newPhone !== '') {
      var user_details = userDetailsArray[index];
      user_details.Name = newName;
      user_details.Email = newEmail;
      user_details.Phone_No = newPhone;
      localStorage.setItem('userDetails', JSON.stringify(userDetailsArray));
      displayUserDetails(userDetailsArray);
    }
}

  

document.getElementById('my_form').addEventListener('submit', myfunction);
var storedUserDetails = localStorage.getItem('userDetails');
if (storedUserDetails) {
    var userDetailsArray = JSON.parse(storedUserDetails);
    displayUserDetails(userDetailsArray);
}

window.addEventListener('load', function() {
    localStorage.removeItem('userDetails');
    
});