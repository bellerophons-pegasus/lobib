    var header = document.querySelector('header');
    var section = document.querySelector('section');
  
    var requestURL = 'https://bellerophons-pegasus.github.io/lobib/test.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    
    request.onload = function() {
      var glypticLiterature = request.response;
      showLiterature(glypticLiterature);
    }

function showLiterature(jsonObj) {
  var litlist = jsonObj['literature'];
      
  for (var i = 0; i < litlist.length; i++) {
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myList = document.createElement('ul');

    myH2.textContent = litlist[i].date;
    myPara1.textContent = 'Title: ' + litlist[i].workLabel;
    myPara2.textContent = 'topics: ' + litlist[i].topics;
        
/*    var superPowers = litlist[i].powers;
    for (var j = 0; j < superPowers.length; j++) {
      var listItem = document.createElement('li');
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }
*/

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}
