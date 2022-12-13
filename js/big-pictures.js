import { isEscape } from './utils.js';

const bigPicture = document.querySelector('.big-picture');
const commentCounter = document.querySelector('.social__comment-count');
const commentLoader = document.querySelector('.comments-loader');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const commentTemplate = bigPicture.querySelector('.social__comment');

const onDocumentEscKeyDown = (evt) => {
  if(isEscape){
    bigPicture.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');

    document.removeEventListener('keydown', onDocumentEscKeyDown);
  }
};

const createComment = (comment, template) => {
  const newComment = template.cloneNode(true);
  const avatar = newComment.querySelector('.social__picture');
  avatar.src = comment.avatar;
  avatar.alt = comment.name;
  newComment.querySelector('.social__text').textContent = comment.message;

  return newComment;
};

const addPictureClickHandler = (picture, pictureData) =>{
  picture.addEventListener('click', () => {
    bigPicture.classList.remove('hidden');

    bigPicture.querySelector('.big-picture__img').querySelector('img').src = pictureData.url;
    bigPicture.querySelector('.likes-count').textContent = pictureData.likes;
    bigPicture.querySelector('.comments-count').textContent = pictureData.comments.length;
    bigPicture.querySelector('.social__caption').textContent = pictureData.description;

    const comments = bigPicture.querySelector('.social__comments');

    comments.innerHTML = '';

    pictureData.comments.forEach((comment) => {
      comments.appendChild(createComment(comment, commentTemplate));
    });

    commentCounter.classList.add('hidden');
    commentLoader.classList.add('hidden');
    document.body.classList.add('modal-open');

    document.addEventListener('keydown', onDocumentEscKeyDown);
  });
};

closeButton.addEventListener('click', ()=> {
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
});

export { addPictureClickHandler };
