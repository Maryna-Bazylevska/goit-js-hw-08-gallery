const galleryItems = [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
      description: 'Mountain Lake Sailing',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
      description: 'Alpine Spring Meadows',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
      description: 'Nature Landscape',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
      description: 'Lighthouse Coast Sea',
    },
  ];
  
  const ref={
    galleryList:document.querySelector('.js-gallery'),
    //  lightbox:document.querySelector('.lightbox'),
     modal:document.querySelector('.js-lightbox'),
     modalOverlay:document.querySelector('.lightbox__overlay'),
    //  lightbox__content:document.querySelector('.lightbox__content'),
     modalContentImage:document.querySelector('.lightbox__image'),
     closeButton:document.querySelector('button[data-action="close-lightbox"]')
     
  };
  const makeList=({preview,original,description})=>{
    return `<li class="gallery__item">
    <a
      class="gallery__link"
      href='${original}'
    >
      <img
        class="gallery__image"
        src='${preview}'
        data-source='${original}'
        alt='${description}'
      />
    </a>
  </li>`
  }
  const makeEl=galleryItems.map(makeList).join('');

   ref.galleryList.insertAdjacentHTML('beforeend',makeEl);
  
  
 
  function onOpenModal(event){
    
    event.preventDefault();
    ref.modal.classList.add('is-open');
    ref.modalContentImage.src = event.target.dataset.source; 
    ref.modalContentImage.alt = event.target.alt;
    
    
  }
  
  function onCloseModal(event){
    ref.modal.classList.remove('is-open');
    ref.modalContentImage.src = '';
    ref.modalContentImage.alt = '';
   
  }
  ref.galleryList.addEventListener("click",onOpenModal);
  ref.closeButton.addEventListener("click",onCloseModal);
  ref.modalOverlay.addEventListener("click",onClickOverlay);
 window.addEventListener("keydown",onEscKeyPress);
  function onClickOverlay(event){
    if (event.currentTarget === event.target) {
      onCloseModal();
    }
  }
  function onEscKeyPress(event) {
    const ESC_KEY_CODE = 'Escape';
    const isEscKey = event.code === ESC_KEY_CODE;
  
    if (isEscKey) {
      onCloseModal();
    }
  }