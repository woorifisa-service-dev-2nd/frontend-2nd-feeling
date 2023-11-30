const targetName = document.getElementById('Target_Name');
const comment = document.getElementById('Comment');
const submit = document.getElementById('POST');
const serverURL = '/submitComment';

function postData(event) {
  event.preventDefault();
  const requestMessage = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: targetName.value,
      comment: comment.value,
    }),
  };
  console.log(JSON.stringify(requestMessage));
  fetch(serverURL, requestMessage)
    .then((response) => response.json())
    .then((data) => console.log('response:', data))
    .catch((error) => console.log(error));
}
submit.addEventListener('click', postData);