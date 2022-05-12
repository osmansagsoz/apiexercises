document.querySelector('button').addEventListener('click', getFetch);

function getFetch() {
  const choice = document.querySelector('input').value;
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector('h2').innerText = data.name;
      document.querySelector('h3').innerText = data.desc;
      document.querySelector('h4').innerText = data.classes[0].name;
      data.subclasses.forEach((cla) => {
        console.log(cla.name);
        const li = document.createElement('li');
        li.innerText = cla.name;
        document.querySelector('ul').appendChild(li);
        document.querySelector('button').addEventListener('click', () => {
          document.querySelector('ul').innerHTML = null;
        });
      });
    })
    .catch((err) => console.log(`error ${err}`));
}
