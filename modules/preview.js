import { authors } from './data.js'

export class PreviewCreator {
    constructor(id, image, title, author) {
      this.id = id;
      this.image = image;
      this.title = title;
      this.author = author;
    }
  
    createPreview() {
      const element = document.createElement('button');
      element.classList = 'preview';
      element.setAttribute('data-preview', this.id);
  
      element.innerHTML = `
        <img
          class="preview__image"
          src="${this.image}"
        />
        
        <div class="preview__info">
          <h3 class="preview__title">${this.title}</h3>
          <div class="preview__author">${authors[this.author]}</div>
        </div>
      `;
  
      return element;
    }
  }