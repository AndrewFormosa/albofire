class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="footer">
        <div class="footer_text">
          Albo Fire Protection | Tel: 07598 376704 | email: albofireprotection@gmail.com | Website by AJF
        </div>
      </div>
        `;
      }



  }

  customElements.define('footer-component', Footer);