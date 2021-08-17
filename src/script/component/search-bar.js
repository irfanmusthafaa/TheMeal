class SearchBar extends HTMLElement{

    constructor() { //menerapkan Shadow DOM
        super();
        this.shadowDOM = this.attachShadow({mode : "open"});
    }
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {  // elemen ini terdapat <button> yang harus memiliki sebuah event ketika ia ditekan, maka kita harus menyediakan setter.
        this._clickEvent = event;
        this.render();
    }

    get value() { // Agar mudah mendapatkan nilai value dari elemen <input> yang terdapat pada search bar, kita buat fungsi getter yang mengembalikan nilai value dari elemen <input> tersebut.
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
       .background-main{
        padding : 50px 0 50px 0;
        background-color : #00587a;
        background-size : cover;
         text-align : center;
         color : white ;
            
       }

        .background-main > h1{
            font-size : 35px;
            opacity : 0.7;
            margin-bottom : 10px;
            letter-spacing : 5px ;
        }

        .background-main > p{
            color : white ;
            opacity : 0.7;
            margin-bottom : 16px;
            font-size : 15px;
        }


        .background-main > input {
            width: 300px;
            padding: 16px;
            font-weight: bold;
            border-radius : 5px;
            border : 0;
        }
        
        .background-main > input:focus {
            outline: 0;
        
        }
        
        .background-main > input:focus::placeholder {
            font-weight: bold;
        }
        
        .background-main >  input::placeholder {
            color: #0a043c;
            font-weight: normal;
        }
        
        .background-main > button {
            width: 100px;
            cursor: pointer;
            margin-left: auto;
            padding: 16px;
            background-color: #0a043c;
            color: white;
            border: 0;
            text-transform: uppercase;
            border-radius: 5px;
        }
        .background-main > button:hover{
            background-color: #bbbbbb;
            color: black;
        
        }
        
        @media screen and (max-width: 550px){

            .background-main{
                text-align : center;
            }

            .background-main > h1{
                font-size : 17px;
                opacity : 0.7;
                margin-bottom : 10px;
                letter-spacing : 5px ;
            }
    
            .background-main > p{
                color : white ;
                opacity : 0.7;
                margin-bottom : 16px;
                font-size : 10px;
            }
            .search-container {
                flex-direction: column;
                position: static;
            }
        
            .background-main > input {
                width: 70%;
                margin-bottom : 12px;
                
            }
        
            .background-main > button {
                width: 70%;
            }

            
        }
        </style>
        <div class="background-main">
        <h1>find your favorite food and treats </h1>
        <p> get to know all the foods from different countries </p>
        <input placeholder="Search food and treats" id="searchElement" type="search">
        <button id="searchButtonElement" type="submit">Search</button>
        </div>
        </div>
        
        `;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent); // terapkan this._clickEvent sebagai event pada element <button> dengan cara menuliskan kode berikut pada akhir fungsi render()
    }
}

 customElements.define("search-bar", SearchBar); //definisikan custom element yang kita buat agar dapat digunakan pada DOM.