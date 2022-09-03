const loadCategory = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => displayCategory(data.data.news_category))
}

const displayCategory = categorys => {
    //console.log(categorys.data.news_category[0].category_name);
    const categoryContainer = document.getElementById('category-container');
    // for(const category in categorys){
    // }


    categorys.forEach(category => {
        const categoryli = document.createElement('li');
    categoryli.innerHTML = `
        <li class="nav-item">
            <a class="nav-link active px-3" aria-current="page" href="#">${category.category_name}</a>
        </li>
    `
    categoryContainer.appendChild(categoryli);
    })


    
    // const categoryli = document.createElement('li');
    // categoryli.innerHTML = `
    //     <li class="nav-item">
    //         <a class="nav-link active" aria-current="page" href="#">${categorys.data.news_category[0].category_name}</a>
    //     </li>
    // `
    // categoryContainer.appendChild(categoryli);
}

loadCategory();



//console.log(categorys.data.news_category[0].category_name);