class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="footer">
        <div class="footer_text">
          You can contact us at any time on 07742 640432 or email us at albofireprotection@gmail.com
        </div>
      </div>
        `;
      }



  }

  customElements.define('footer-component', Footer);