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
        items: document.querySelector('[data-listitems]'),
        button: document.querySelector('[data-listbutton]'),
        close: document.querySelector('[data-listclose]'),
        active: document.querySelector('[data-listactive]'),
        message: document.querySelector('[data-listmessage]'),
        blur: document.querySelector('[data-listblur]'),
        image: document.querySelector('[data-listimage]'),
        title: document.querySelector('[data-listtitle]'),
        subtitle: document.querySelector('[data-listsubtitle]'),
        description: document.querySelector('[data-listdescription]'),
    },
    search: {
        authors: document.querySelector('[data-searchauthors]'),
        genres: document.querySelector('[data-searchgenres]'),
        cancel: document.querySelector('[data-searchcancel]'),
        overlay: document.querySelector('[data-searchoverlay]'),
        form: document.querySelector('[data-searchform]'),
        title: document.querySelector('[data-searchtitle]'),
    },
    settings: {
        theme: document.querySelector('[data-settingstheme]'),
        cancel: document.querySelector('[data-settingscancel]'),
        overlay: document.querySelector('[data-settingsoverlay]'),
        form: document.querySelector('[data-settingsform]'),
    },
    header: {
        search: document.querySelector('[data-headersearch]'),
        settings: document.querySelector('[data-headersettings]'),  
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