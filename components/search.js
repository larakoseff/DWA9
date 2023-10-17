import { getHtml } from "../modules/html.js"

const template = document.createElement("template");

template.innerHTML = /* html */ `
<style>

* {
    box-sizing: border-box;
  }


  .overlay {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    border-width: 0;
    box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12);
    animation-name: enter;
    animation-duration: 0.6s;
    z-index: 10;
    background-color: rgba(var(--color-light), 1);
  }
  
  @media (min-width: 30rem) {
    .overlay {
      max-width: 30rem;
      left: 0%;
      top: 0;
      border-radius: 8px;;
    }
  }
  
  .form {
    padding-bottom: 0.5rem;
    margin: 0 auto;
  }
  
  .row {
    display: flex;
    gap: 0.5rem;
    margin: 0 auto;
    justify-content: center;
  }
  
  .button {
    font-family: Roboto, sans-serif;
    background-color: rgba(var(--color-blue), 0.1);
    transition: background-color 0.1s;
    border-width: 0;
    border-radius: 6px;
    height: 2.75rem;
    cursor: pointer;
    width: 50%;
    color: rgba(var(--color-blue), 1);
    font-size: 1rem;
    border: 1px solid rgba(var(--color-blue), 1);
  }
  
  .button_primary {
    background-color: rgba(var(--color-blue), 1);
    color: rgba(var(--color-force-light), 1);
  }
  
  .button:hover {
    background-color: rgba(var((var(--color-blue))), 0.2);
  }
  
  
  .button_primary:hover {
    background-color: rgba(var(--color-blue), 0.8);
    color: rgba(var(--color-force-light), 1);
  }
  
  .input {
    width: 100%;
    margin-bottom: 0.5rem;
    background-color: rgba(var(--color-dark), 0.05);
    border-width: 0;
    border-radius: 6px;
    width: 100%;
    height: 4rem;
    color: rgba(var(--color-dark), 1);
    padding: 1rem 0.5rem 0 0.75rem;
    font-size: 1.1rem;
    font-weight: bold;
    font-family: Roboto, sans-serif;
    cursor: pointer;
  }
  
  .input_select {
    padding-left: 0.5rem;
  }
  
  .field {
    position: relative;
    display: block;
  }
  
  .label {
    position: absolute;
    top: 0.75rem;
    left: 0.75rem;
    font-size: 0.85rem;
    color: rgba(var(--color-dark), 0.4);
  }
  
  .input:hover {
    background-color: rgba(var(--color-dark), 0.1);
  }
  
  .title {
    padding: 1rem 0 0.25rem;
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 1;
    letter-spacing: -0.1px;
    max-width: 25rem;
    margin: 0 auto;
    color: rgba(var(--color-dark), 0.8)
  }
  
  .blur {
    width: 100%;
    height: 200px;
    filter: blur(10px);
    opacity: 0.5;
    transform: scale(2);
  }
  
  .image {
    max-width: 10rem;
    position: absolute;
    top: 1.5m;
    left: calc(50% - 5rem);
    border-radius: 2px;
    box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12);
  }
  
  .data {
    font-size: 0.9rem;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;  
    overflow: hidden;
    color: rgba(var(--color-dark), 0.8)
  }
  
  .data_secondary {
    color: rgba(var(--color-dark), 0.6)
  }
  
  .content {
    padding: 2rem 1.5rem;
    text-align: center;
    padding-top: 3rem;
  }
  
  .preview {
    overflow: hidden;
    margin: -1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .background {
    background: rgba(var(--color-dark), 0.6);
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  }
  
  /* backdrop */
  
  .backdrop {
    display: none;
    background: rgba(var(--color-dark), 0.3);
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  }
  
  .overlay[open] ~ .backdrop {
    display: block;
  }
</style>  

<dialog class="overlay" data-searchoverlay>
<div class="content">
  <form class="form" data-searchform id="search">
    <label class="field">
      <div class="label">Title</div>
      <input class="input" data-searchtitle name="title" placeholder="Any"></input>
    </label>

    <label class="field">
      <div class="label">Genre</div>
      <select class="input input_select" data-searchgenres name="genre"></select>
    </label>

    <label class="field">
      <div class="label">Author</div>
      <select class="input input_select" data-searchauthors name="author">
      </select>
    </label>
  </form>

  <div class="row">
    <button class="button" data-searchcancel>Cancel</button>
    <button class="button button_primary" type="submit" form="search">Search</button>
  </div>
</div>
</dialog>
`

export class Search extends HTMLElement {
    #open = false;

    #elements = {
        /**
         * @type {undefined | HTMLElement}
         */
        searchform: undefined,
        /**
         * @type {undefined | HTMLElement}
         */
        searchcancel: undefined,
    
        /**
         * @type {undefined | HTMLElement}
         */
        searchoverlay: undefined,

        /**
         * @type {undefined | HTMLElement}
         */
        searchauthors: undefined,

         /**
         * @type {undefined | HTMLElement}
         */
         searchtitle: undefined,

          /**
         * @type {undefined | HTMLElement}
         */
        searchgenres: undefined,
      };

        /**
   * @type {ShadowRoot}
   */
  #inner = this.attachShadow({ mode: "closed" });

  constructor() {
    super();
    const { content } = template;
    this.#inner.appendChild(content.cloneNode(true));
  }

  connectedCallback() {
    this.#elements = {
      form: getHtml({ dataAttr: "searchform", target: this.#inner }),
      cancel: getHtml({ dataAttr: "searchcancel", target: this.#inner }),
      overlay: getHtml({ dataAttr: "searchoverlay", target: this.#inner }),
      authors: getHtml({ dataAttr: "searchauthors", target: this.#inner }),
      title: getHtml({ dataAttr: "searchtitle", target: this.#inner }),
      genres: getHtml({ dataAttr: "searchgenres", target: this.#inner }),
    };

    this.open = this.getAttribute('open') !== null

    this.#elements.form.addEventListener("submit", (event) => {
        event.preventDefault();
  
        if (!(event.target instanceof HTMLFormElement)) {
          throw new Error("form not found");
        }
  
        const entries = new FormData(event.target);
        const response = Object.fromEntries(entries);
  
        const added = new CustomEvent("added", {
          bubbles: true,
          detail: response,
        })
  
        this.dispatchEvent(added)
  
        event.target.reset();
        this.open = false;
      });
    }
  
  /**
   * Whether the overlay modal is shown or not
   */
    set open(newValue) {
      if (newValue === this.#open) return;
      this.#open = newValue;
  
      if (!(this.#elements.overlay instanceof HTMLDialogElement)) {
        throw new Error("Dialog element required");
      }
  
      if (newValue) {
        this.#elements.overlay.showModal();
      } else {
        this.#elements.overlay.close();
      }
    }
  
    get open() {
      return this.#open;
    }
  }
  
  customElements.define("search-overlay", Search);
  
  
  export default Search

