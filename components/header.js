class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-md navbar-light bg-white">


        <a class="navbar-brand" href="#">
          <image class="logo_image" src="fire_image.jpeg"></image>
          <div class="logo_text">Albo Fire Protection</div>
        </a>
        <div class="tel_text">Tel: 07598 376704</div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="index.html">Home<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="template.html">TEMPLATE</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Our Customers</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                Services
              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Fire Equipment Servicing</a>
                <a class="dropdown-item" href="#">Fire Systems</a>
                <a class="dropdown-item" href="#">Risk Assesment</a>
              </div>
            </li>
          </ul>
        </div>
      </nav> 
        `;
      }



  }

  customElements.define('header-component', Header);