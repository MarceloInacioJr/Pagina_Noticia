const headline = document.querySelector(".headline");
const fade = document.querySelector(".style-fade");
const formNews = document.querySelector(".form-news");

const nameWriter = document.querySelector("#name-writer");
const lastNameWriter = document.querySelector("#last-name-writer");
const typeNews = document.querySelector("#type-news");
const newsTitle = document.querySelector("#news-title");
const newsSubtitle = document.querySelector("#news-subtitle");
const bodyNews = document.querySelector("#news-body");
const newImage = document.querySelector("#news-image");
const btnFormNews = document.querySelector("#btn-new-news");
const btnPostNews = document.querySelector("#btn-post-news");
const btnClose =  document.querySelector("#btn-close");




// fuction

const loadImg = (event, img) => {
  let reader = new FileReader();
  reader.onload = () => {
    const dataURL = reader.result;
    img.src = dataURL;
  }
  return reader.readAsDataURL(event.files[0]);
};


const saveNews = () => {
  if (typeNews.value === "headline") {
    //headline
    const content = document.querySelector(".content");
    const headline_content = document.querySelector(".headline-content")

    const headline = document.createElement("div");



    let img = document.querySelector("#headline-img");
    const event = document.querySelector("#news-image");
    loadImg(event, img);

    const title = document.querySelector("#headline-title");
    title.innerText = newsTitle.value;
    headline_content.appendChild(title);

    const body_news = document.querySelector("#headline-body");
    body_news.innerText = bodyNews.value;
    headline_content.appendChild(body_news);

    const name_writer = document.querySelector("#headline-sources");
    name_writer.innerHTML = `${nameWriter.value} ${lastNameWriter.value}`;
    headline_content.appendChild(name_writer);

    content.appendChild(headline);


  } else {
    // new news

    const news = document.createElement("div");
    news.classList.add("news");

    let img = document.createElement("img");
    img.setAttribute("id", "news-img");
    news.appendChild(img);
    const event = document.querySelector("#news-image");
    loadImg(event, img);

    const news_content = document.createElement("div");
    news_content.classList.add("news-content");

    const title = document.createElement("h1");
    title.classList.add("news-title");
    title.innerText = `${newsTitle.value}`;
    news_content.appendChild(title);

    const body_news = document.createElement("p");
    body_news.classList.add("news-body");
    body_news.innerText = bodyNews.value;
    news_content.appendChild(body_news);

    const name_writer = document.createElement("p");
    name_writer.classList.add("news-sources");
    name_writer.innerText = `por ${nameWriter.value} ${lastNameWriter.value}`;
    news_content.appendChild(name_writer);

    news.appendChild(news_content);
    let news_parent = document.querySelector(".news_parent");
    news_parent.appendChild(news);
  }

  //clearing vars 
  nameWriter.value = "";
  lastNameWriter.value = "";
  newsTitle.value = "";
  newsSubtitle.value = "";
  bodyNews.value = "";
}

// events

if (btnFormNews) {
  btnFormNews.addEventListener("click", (e) => {
    e.preventDefault();

    const formNews_parents = formNews;
    formNews_parents.classList.toggle("hide");

    const fade_parents = fade;
    fade_parents.classList.toggle("fade");

  });
}

if(btnClose){
  btnClose.addEventListener("click", (e) => {
    const formNews_parents = formNews;
    formNews_parents.classList.toggle("hide");

    const fade_parents = fade;
    fade_parents.classList.toggle("fade");

  });
}




if (btnPostNews) { 
  btnPostNews.addEventListener("click", (e) => {
    e.preventDefault();
    saveNews();
  });

}



