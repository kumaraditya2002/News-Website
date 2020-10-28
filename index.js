let newsacc = document.getElementById('newsaccordian');

let apiKey = "15deb215901a48a3b66437aacca7219c";
const xhr = new XMLHttpRequest();
xhr.open('GET', `http://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`, true);
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        Array.from(articles).forEach((news,index)=>{
            if(news.content!=null && news.title!=null)
            {
                let html = `<div class="card">
                                <div class="card-header" id="headingOne">
                                    <h2 class="mb-0">
                                        <button class="btn btn-link collapsed"  type="button" data-toggle="collapse"
                                            data-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                                            <b>Breaking news ${index+1}:</b>${news.title}
                                        </button>
                                    </h2>
                                </div>
    
                                <div id="collapse${index}" class="collapse" aria-labelledby="headingOne"
                                    data-parent="#newsaccordian">
                                    <div class="card-body">
                                        ${news.content}.
                                        <a href="${news['url']}" target="_blank" >Read more here</a> 
                                    </div>
                                </div>
                            </div>`;
                newsHtml += html;
            }
        });
        newsacc.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}
xhr.send();


