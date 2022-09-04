const loadCategory = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => displayCategory(data.data.news_category))
}

const displayCategory = categorys => {
    const categoryContainer = document.getElementById('category-container');
    if(categorys.length !== 0){
        const sumItems = document.getElementById('sum-items');
        sumItems.innerText = categorys;
    }
    else{
        const sumItems = document.getElementById('sum-items');
        sumItems.innerText = categorys;
    }
    categorys.forEach(category => {
        const categoryli = document.createElement('li');
    categoryli.innerHTML = `
        <li class="nav-item">
            <a onclick="loadNewsDetail('${category.category_id}')" class="nav-link active px-3" aria-current="page" href="#">${category.category_name}</a>
        </li>
    `
    categoryContainer.appendChild(categoryli);
    })
    toggleSpinner(false);
} 

const loadNewsDetail = (category_id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayNews(data.data))
}

const displayNews = newse => {
    //console.log(newse);
    const newsContainer = document.getElementById('news-container');
    toggleSpinner(true);
    newsContainer.textContent = '';
    if(newse.length === 0){
        const noFound = document.getElementById('no-found');
        noFound.classList.remove('d-none');
    }
    else{
        const noFound = document.getElementById('no-found');
        noFound.classList.add('d-none');
    }
    newse.forEach(news => {
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('card');
        newsDiv.innerHTML = `
        <div onclick="loadModalDetail('${news.news_id}')" data-bs-toggle="modal" data-bs-target="#newsDetailModal" class="row g-0 p-3">
            <div class="col-md-4">
                <img src="${news.thumbnail_url}" class="img-fluid rounded-start" alt="...">
                </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${news.title}</h5>
                    <p class="card-text"><small class="text-muted">${news.details.length > 400 ? news.details.slice(0,400) + '...' : news.details}</small></p>
                </div>

                <div class="container text-center">
                <div class="row row-cols-4">
                  <div class="col d-flex">
                    <div>
                      <img src="${news.image_url}" style=" border-radius: 50%; width: 50px; height: 50px;" class="" alt="">
                    </div>
                    <div class="text-start ps-3 lh-sm">
                      <p class="mb-2">${news.author.name}</p>
                      <p><small>Sep 03, 2022</small> </p>
                    </div>
                  </div>
                  <div class="col mt-3">
                    <i class="fa-regular fa-eye"> ${news.total_view}</i>
                  </div>
                  <div class="col mt-3">
                    <i class="fa-solid fa-star-half-stroke"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                  </div>
                  <div class="col mt-3">
                    <button class="border-0 bg-white" href=""><i class="fa-solid fa-arrow-right text-primary"></i></button>
                  </div>
                </div>
              </div>

            </div>
        </div>
        `
        newsContainer.appendChild(newsDiv);
    })
}


const toggleSpinner = isLoading => {
    const loderSection = document.getElementById('loader');
    if(isLoading){
        loderSection.classList.remove('d-none')
    }
    else{
        loderSection.classList.add('d-none')
    }
}

// const loadModalDetail = async news_id =>{
//     const url = `https://openapi.programming-hero.com/api/news/${news_id}`;
//     const res = await fetch(url);
//     const data = await res.json();
//     console.log(data.data);
// }



const loadModalDetail = (news_id) => {
    const url = `https://openapi.programming-hero.com/api/news/${news_id}`
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data.data))
}

// const displayModal = modals => {
//     console.log(modals)
//     const newsDetailModal = document.getElementById('modalDetail');
//     modals.forEach(modal => {
//         const modalDiv = document.createElement('div')
//     modalDiv.classList.add('modal')
//     modalDiv.innerHTML = `
//     <div class="modal fade" id="newsDetailModal" tabindex="-1" aria-labelledby="newsDetailModalLabel" aria-hidden="true">
//       <div class="modal-dialog">
//         <div class="modal-content">
//           <div class="modal-header">
//             <h5 class="modal-title" id="newsDetailModalLabel">Modal title</h5>
//             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//           </div>
//           <div class="modal-body">
//             ...
//           </div>
//           <div class="modal-footer">
//             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//           </div>
//         </div>
//       </div>
//     </div>
//     `
//     newsDetailModal.appendChild(modalDiv)
//     })
// }

loadCategory();