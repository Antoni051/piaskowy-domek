class Header extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = `


        <h1 data-localize="greeting"> Hello! </h1>

        <div class="container">
            abc
        </div>
        
        <script>
        $("[data-localize]").localize("langs/lang", {language: "pl"})
        </script>
        `;

    }
}
customElements.define('header-component', Header)
