class MealItem extends HTMLElement{

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode : "open"});
    }

    set meal(meal) { //menetapkan nilai meal ke properti this._meal yang nantinya akan digunakan pada fungsi render
        this._meal = meal;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>

    
        *{
            margin : 0;
            padding :0;
            box-sizing : box-border;
           
        }
            
            
            :host{
                
                display: block;
                margin-bottom: 18px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                overflow: hidden;
                background-color: #e7e7de;
                
            }

            .fan-art-meal {
                width: 100%;
                max-height: 300px;
                object-fit: cover;
                object-position: center;
            }

            .meal-info {
                padding: 24px;
                width : 100%;
                max-width: 600px;
                text-align : center;
                
            }

            .meal-info > h2 {
                font-weight: bold;
                padding-bottom : 10px;
                
            }

            .meal-info > p {
                margin-top: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 10; /* number of lines to show */
            }
            @media screen and (max-width: 550px){

                .meal-info{
                    max-width : 200px;
                }
            
            }
                    </style>
        
        
        <div class="meal-info">
        <h2>${this._meal.strMeal}</h2>
        <img class="fan-art-meal" src="${this._meal.strMealThumb}" alt="Fan Art">
        <p>${this._meal.strInstructions}</p>
        </div>
        </div>`;
    }
}

customElements.define("meal-item", MealItem);