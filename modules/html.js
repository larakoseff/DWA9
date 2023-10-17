// Two different ways of abstracting HTML 

/**
 * 
 * @typedef {object} Html 
 * @prop {object} list 
 * @prop {object} search 
 * @prop {object} settings 
 * @prop {object} header 
 */
export const html = {
    list: {
        items: document.querySelector('[data-list-items]'),
        button: document.querySelector('[data-list-button]'),
        close: document.querySelector('[data-list-close]'),
        active: document.querySelector('[data-list-active]'),
        message: document.querySelector('[data-list-message]'),
        blur: document.querySelector('[data-list-blur]'),
        image: document.querySelector('[data-list-image]'),
        title: document.querySelector('[data-list-title]'),
        subtitle: document.querySelector('[data-list-subtitle]'),
        description: document.querySelector('[data-list-description]'),
    },
    search: {
        authors: document.querySelector('[data-search-authors]'),
        genres: document.querySelector('[data-search-genres]'),
        cancel: document.querySelector('[data-search-cancel]'),
        overlay: document.querySelector('[data-search-overlay]'),
        form: document.querySelector('[data-search-form]'),
        title: document.querySelector('[data-search-title]'),
    },
    settings: {
        theme: document.querySelector('[data-settings-theme]'),
        cancel: document.querySelector('[data-settings-cancel]'),
        overlay: document.querySelector('[data-setting-soverlay]'),
        form: document.querySelector('[data-settings-form]'),
    },
    header: {
        search: document.querySelector('[data-header-search]'),
        settings: document.querySelector('[data-header-settings]'),  
    },
   
}


/**
 *
 * ...
 *
 * @param {object} props
 * @param {string} props.dataAttr
 * @param {string} [props.value]
 * @param {HTMLElement | ShadowRoot} [props.target]
 * @returns {HTMLElement}
 */
export const getHtml = (props) => {
  const { dataAttr, value, target } = props;

  const selector = value
    ? `[data-${dataAttr}="${value}"]`
    : `[data-${dataAttr}]`;

  const scope = target || document;
  const element = scope.querySelector(selector);
  const isHtmlElement = element instanceof HTMLElement;

  if (!isHtmlElement) {
    throw new Error(`${selector} attribute not found in HTML`);
  }

  return element;
};