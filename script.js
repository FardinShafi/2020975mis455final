function connect() {

    var searchText = document.getElementById('searchBox').value ;
   
    console.log(searchText);
   
   var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
   console.log(url);
   
    fetch(url)
    .then(res => res.json() )
    .then(data => showData(data));
    document.getElementById('searchBox').value = "";
    

   
   }

function showData(data){
    
    var searchNumber= document.getElementById('number').value;
       console.log("data from showData Function", data);
       document.getElementById('number').value="";

       var oldContent = document.getElementById('container');
       oldContent.textContent= "";

       for (var i=0; i<searchNumber; i++){
        console.log(data.meals[i]);

        var newDiv = document.createElement('div');
        newDiv.innerHTML = `<div class="card bg-dark" style="width: 18rem; margin-bottom:20px;margin-top:20px; ">
                            <img src="${data.meals[i].strMealThumb}" class="card-img-top" alt="">
                            <div class="card-body">
                            <h5 class="card-title">${data.meals[i].strMeal}</h5>
                            <p class="card-text bg-dark">Meal Category: ${data.meals[i].strCategory}</p>
                            <a href="${data.meals[i].strYoutube}"> Youtube Video Instructions>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                            </div>
                            `;
                            newDiv.classList.add("col-sm");
                            

                            

                            oldContent.appendChild(newDiv);
     

       }
   

}















