class AppBar extends HTMLElement{ // buat class dengan nama AppBar yang mewarisi sifat HTMLElement.


    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode : "open"});
    }

    connectedCallback() {    //connectedCallback() akan terpanggil ketika element telah diterapkan pada DOM
        this.render();    //memanggil fungsi this.render() di dalam connectedCallback
       
    }

    render() {
        this.shadowDOM.innerHTML = ` 
        <style>
        * {
            margin : 0;
            padding : 0;
            box-sizing : box-border;
            font-family : PottaOne;
            
            
        }
        :host {
            display:block; // agar custom element nampak karna bersifat inline element
            width: 100%;
            background-color: #0f3057;
            color: white;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }
        h2{
            padding : 16px;
        }
        </style> 
        <h2>Food and Treats</h2>`;
    
    }
}

customElements.define("app-bar", AppBar);