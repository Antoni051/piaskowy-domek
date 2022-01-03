class Footer extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = `
        <!-- Footer Component -->
        <div class="footer-dark">
            <footer>
                <div class="container-fluid">
                    <!-- // <a href="#top" class="position-absolute bottom-0 end-0 p-5">
                    //     <img src="../assets/up-arrow-navicon.svg" alt="Go To Top" >
                    // </a> -->
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-3 item">
                            <h3 data-localize="footer.links">Links</h3>
                            <ul>
                                <li><a data-localize="header.location" href="#">Location</a></li>
                                <li><a data-localize="header.rooms" href="#">Rooms</a></li>
                                <li><a data-localize="header.pricing" href="#">Pricing</a></li>
                                <li><a data-localize="header.faq" href="#">FAQs</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-6 col-md-3 item">
                            <h3 data-localize="header.about" >About</h3>
                            <ul>
                                <li><a data-localize="footer.things-leba" href="#">Things to do in Leba</a></li>
                                <li><a data-localize="header.about" href="#">About</a></li>
                                <li><a data-localize="header.contact" href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                        <div class="col-md-6 item text">
                            <h3>Piaskowy Domek</h3>
                            <p>TODO - INSERT FULL ADDRESS AND PHONE NUMBER</p>
                        </div>

                        <div class="col item social">
                            <a href="#"><img src="../assets/facebook-social.svg" alt="facebook" ></a>
                            <a href="#"><img src="../assets/map-icon-social.svg" alt="google-maps" ></a>
                            </svg>
                        </div>
                    </div>
                    <p class="copyright">Piaskowy Domek © 2022</p>
                </div>
            </footer>
        </div>

        `;
        //        $("[data-localize]").localize("langs/lang", {language: "pl"})
    }


}

customElements.define('footer-component', Footer);
