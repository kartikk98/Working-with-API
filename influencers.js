var requestURL = "http://demo4469839.mockable.io/influencers"
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var influence = request.response;
  showInfluencers(influence);
}


function showInfluencers(jsonObj){
  var influencers = jsonObj.data.allInfluencers;
  
  for (var i = 0; i < influencers.length; i++){
    var myArticle = document.createElement('article');
    var mydivOut = document.createElement('div');
    var myImg = document.createElement('img');
    var mydivIn = document.createElement('div');
    var myh5 = document.createElement('h5');
    var myp1 = document.createElement('p');
    var myp2 = document.createElement('p');
    var myp3 = document.createElement('p');
    
    mydivOut.classList.add("card", "card-width");
    myImg.classList.add("card-img-top");
    mydivIn.classList.add("card-body");
    myh5.classList.add("card-title");
    myp1.classList.add("card-text");
    myp2.classList.add("card-text");
    myp3.classList.add("card-text");

    myImg.setAttribute("src", influencers[i].picture);
    myh5.textContent = influencers[i].username;
    if(influencers[i].stats != null){
      
      myp1.textContent = 'Follower Count: ' + influencers[i].stats.followerCount
      myp2.textContent = 'Average Likes Ratio: ' + influencers[i].stats.engagement.avgLikesRatio
      myp1.textContent = 'Average Comment Ratio: ' + influencers[i].stats.engagement.avgCommentsRatio
      
    }
    
    else{
      myp1.textContent = 'NA'
      myp2.textContent = 'NA'
      myp1.textContent = 'NA'
    }
    
    mydivIn.appendChild(myh5);
    mydivIn.appendChild(myp1);
    mydivIn.appendChild(myp2);
    mydivIn.appendChild(myp3);
    
    mydivOut.appendChild(myImg);
    mydivOut.appendChild(mydivIn);
    myArticle.appendChild(mydivOut);
    
    section.appendChild(myArticle);

  }
}
