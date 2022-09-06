/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
function openNav() {
  document.getElementById('myNav').style.display = 'block';
}

function closeNav() {
  document.getElementById('myNav').style.display = 'none';
}
const pName = ['Tonic', 'Multi-Post Stories', 'Facebook360', 'Uber Navigation'];
const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea";
const technologies = ['Html', 'Css', 'Javascript'];
const featuredimg = ['./assets/desktop1.png', './assets/Snapshoot1.png', './assets/Snapshoot2.png', './assets/desktop1.png'];
const liveLink = [];
const sourceLink = [];
const infoArray = [
  {
    name: pName[0],
    featuredimg: featuredimg[0],
    description,
    technologies,
    liveLink: liveLink[0],
    sourceLink: sourceLink[0],
  },
  {
    name: pName[1],
    featuredimg: featuredimg[1],
    description,
    technologies,
    liveLink: liveLink[0],
    sourceLink: sourceLink[0],
  },
  {
    name: pName[2],
    featuredimg: featuredimg[2],
    description,
    technologies,
    liveLink: liveLink[0],
    sourceLink: sourceLink[0],
  },
  {
    name: pName[3],
    featuredimg: featuredimg[3],
    description,
    technologies,
    liveLink: liveLink[0],
    sourceLink: sourceLink[0],
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn1');
  btn.addEventListener('click', () => {
    const div1 = document.createElement('div');
    div1.classList.add('div1');
    const element1 = document.querySelector('.works');
    element1.appendChild(div1);
    console.log(element1);
    for (let i = 0; i < infoArray.length; i++ ) {
      const title1 = document.createElement('h2');
      title1.classList.add('h2-pop');
      div1.appendChild(title1);
      document.getElementsByClassName('h2-pop')[i].textContent = infoArray[i].name;
    }
    console.log(document.getElementsByClassName('h2-pop')[0]);
  });
});

function newFunc() {

}