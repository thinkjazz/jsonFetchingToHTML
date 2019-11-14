 function loadPosts() {

     var xhr = new XMLHttpRequest();

     xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

     xhr.onreadystatechange = function () {
         if (xhr.readyState != 4) return;

         button.parentNode.removeChild(button);

         if (xhr.status != 200) {
             // обработать ошибку
             alert(xhr.status + ': ' + xhr.statusText);
         } else {
             try {
                 var posts = JSON.parse(xhr.responseText);
             } catch (e) {
                 console.log("Некорректный ответ " + e.message);
             }
             showPosts(posts);
         }

     }

     xhr.send();

     button.innerHTML = 'Загружаю...';
     button.disabled = true;
 }

 function showPosts(posts) {

     posts.forEach(function (post) {
         var li = list.appendChild(document.createElement('li'));
         li.innerHTML = post.title;
     });

 }