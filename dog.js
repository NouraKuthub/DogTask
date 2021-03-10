$(document).ready(function(){
    const url = 'https://dog.ceo/api/breeds/list/all';
    fetch(url)
      .then((resp) => resp.json()) // Transform the data into json
      .then(function(data) {
        dog_list = data.message;
        for (dog in dog_list) {
            let li = document.createElement("li");
            let node = document.createTextNode(dog);
            li.appendChild(node);
            myList.appendChild(li);
        }
        })
    
       $(document).on("click","li" , function() {
          var dogname= $(this).text();
          var imgurl='https://dog.ceo/api/breed/'+dogname+'/images/random';
          fetch(imgurl)
          .then((resp) => resp.json()) // Transform the data into json
          .then(function(data1) {
            dog_image = data1.message;
          });
          $('#myImg').attr("src",dog_image);
       });
    
    });