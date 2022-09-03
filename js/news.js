const loadCategory = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => displayCategory(data.data.news_category))
}

const displayCategory = categorys => {
    const categoryContainer = document.getElementById('category-container');
    categorys.forEach(category => {
        const categoryli = document.createElement('li');
    categoryli.innerHTML = `
        <li class="nav-item">
            <a onclick="loadNewsDetail('${category.category_id}')" class="nav-link active px-3" aria-current="page" href="#">${category.category_name}</a>
        </li>
    `
    categoryContainer.appendChild(categoryli);
    })
} 

const loadNewsDetail = (category_id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayNews(data.data))
}

const displayNews = newse => {
    console.log(newse);
    const newsContainer = document.getElementById('news-container');
    newse.forEach(news => {
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('card');
        newsDiv.innerHTML = `
        <div class="row g-0 p-3">
            <div class="col-md-4">
                <img src="${news.thumbnail_url}" class="img-fluid rounded-start" alt="...">
                </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
        `
        newsContainer.appendChild(newsDiv);
    })
    //for(const news in newse){}
    
    
}

loadCategory();