
function myfunction(event) {
  event.preventDefault();
  
  var user_details = {
    Name: document.getElementById('name').value,
    Email: document.getElementById('email').value,
    Phone_No: document.getElementById('phone').value
  };
  
  axios.post('https://crudcrud.com/api/390c532274d344838cf2c93bce04747e/user_details', user_details)
    .then(function(response) {
      console.log(response.data);
      window.location.reload();
    })
    .catch(function(error) {
      console.error(error);
    });
}
  