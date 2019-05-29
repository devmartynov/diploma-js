function image() {
    let works = document.querySelector('.works'),
        links = works.getElementsByTagName('a'),
        cont = works.getElementsByClassName('container')[0],
        div = document.createElement('div'),
        bigImage = document.createElement('img'),
        ol = document.querySelector('.overlay');
        


    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener('click', (event) => {
        event.preventDefault();
        div.classList.add('popup_img');
        bigImage.src = links[i].getAttribute('href');
        bigImage.classList.add('myimage');
        div.appendChild(bigImage);
        cont.appendChild(div);
        document.body.style.overflow = "hidden";
        ol.style.display = 'block';
        div.style.display = 'block';
      });
    }

    div.addEventListener('click', (event) => {
      if (event.target != bigImage) {
        ol.style.display = 'none';
        div.style.display = 'none';
        document.body.style.overflow = "auto";
      }  
    });
}
module.exports = image;