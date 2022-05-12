const baseEndPoint = 'https://jsonplaceholder.typicode.com/posts/';
document.querySelector('button').addEventListener('click', fetchPosts);

async function fetchPosts() {
  const query = document.querySelector('input').value;

  const response = await fetch(`${baseEndPoint}${query}`);
  const data = await response.json();
  console.log(data);
  document.querySelector('h2').innerText = data.title;
  document.querySelector('.explanation').innerText = data.body;
}
