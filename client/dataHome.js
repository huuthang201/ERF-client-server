var postApi = "http://localhost:5000/posts";

const getData = (callback) => {
    fetch(postApi)
        .then((res) => {
            return res.json();
        })
        .then(callback);
};

const renderData = (data) => {
    var testData = document.querySelector(".test");
    var htmls = data.map((item) => {
        return `<div class="item">
                    <div class="title">${item.title}</div>
                    <div class="content">${item.content}</div>
                    <div class="author">${item.likes}</div>
                </div>`;
    });
    testData.innerHTML = htmls.join("");
};

const start = () => {
    getData(renderData);
};

start();

// var htmls =
