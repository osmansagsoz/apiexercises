const baseEndPoint = 'https://jsonplaceholder.typicode.com/posts/';
document.querySelector('.get').addEventListener('click', fetchPosts);

async function fetchPosts() {
  const query = document.querySelector('input').value;

  const response = await fetch(`${baseEndPoint}${query}`);
  const data = await response.json();
  console.log(data);
  document.querySelector('h2').innerText = data.title;
  document.querySelector('.explanation').innerText = data.body;
}

const postTitle = document.querySelector('h3').innerText;
const postBody = document.querySelector('.postbody').innerText;
const sendButton = document.querySelector('.send');

function sendPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: postTitle,
      body: postBody,
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

sendButton.addEventListener('click', sendPosts);
