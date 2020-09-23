import galleryItems from './gallery-items.js';
console.log(galleryItems);
const list = document.querySelector('.js-gallery');
const div = document.querySelector('.js-lightbox');
console.log(div);
const modalImg = document.querySelector('.lightbox__image');
console.log(modalImg);
const btn = document.querySelector('.lightbox__button');
console.log(btn);


  // / <li class="gallery__item">
//   <a
//     class="gallery__link"
//     href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
//   >
//     <img
//       class="gallery__image"
//       src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
//       data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
//       alt="Tulips"
//     />
//   </a>
// </li>

galleryItems.map((item) => {
  // console.log(item);
  const img = document.createElement('img');
  // console.log(img);
  img.classList.add('gallery__image');
  img.src = item.preview;
  img.setAttribute('data-source', item.original);
  img.alt = item.description

  const link = document.createElement('a');
 // console.log(link);
  link.classList.add('gallery__link');
  link.href = item.original;

  link.append(img);

  const li = document.createElement('li');
  //console.log(li);
  li.classList.add('gallery__item');

  li.append(link);

  list.append(li);
});


list.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e.target);
  console.log(e.target.dataset.source);
  let modalLink = e.target.dataset.source;
  div.classList.add('is-open');
  modalImg.src = modalLink;
});

btn.addEventListener('click', () => {
  div.classList.remove('is-open');
  modalImg.src = '';
});













