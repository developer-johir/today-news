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
                    <h5 class="card-title">${news.title}</h5>
                    <p class="card-text"><small class="text-muted">${news.details}</small></p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>

                <div class="container text-center">
                <div class="row row-cols-4">
                  <div class="col d-flex">
                    <div>
                      <img src="https://placeimg.com/80/80/people" style=" border-radius: 50%; width: 50px; height: 50px;" class="" alt="">
                    </div>
                    <div class="text-start ps-3 lh-sm">
                      <p class="mb-2">name</p>
                      <p><small>Sep 03, 2022</small> </p>
                    </div>
                  </div>
                  <div class="col mt-3">
                    <i class="fa-regular fa-eye"></i>
                  </div>
                  <div class="col mt-3">
                    <i class="fa-solid fa-star-half-stroke"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                  </div>
                  <div class="col mt-3">
                    <i class="fa-solid fa-arrow-right text-primary"></i>
                  </div>
                </div>
              </div>

            </div>
        </div>
        `
        newsContainer.appendChild(newsDiv);
    })
    //for(const news in newse){}
    
    
}

loadCategory();