//  DOM SELECTORS

//1) getElementsByTagName
// const listItem = document.getElementsByTagName('li')
// listItem.forEach((li) => {
//     console.log(i);
// });

// 2) getElementBy Class
// const listItem = document.getElementsByClassName('list-item')
// console.log(listItem); []- orqali tanlab olish mumkin

// 3) getElementById
// const clickBtn = document.getElementById('click-btn');
// console.log(clickBtn);

// 4) querySelector / querySelectorAll
// const listItem = document.querySelector('#title')
// console.log(listItem);

// listItem.forEach((item) => {
//     console.log(item);
// });

// <==============  TEXTCONTENT / INNERHTML =========>
// 1) textContent
// const title = document.getElementById('title')
// title.textContent += ' New text'

// const listItem = document.querySelectorAll('.list-item')
// listItem.forEach((item)=>{
//     item.textContent += ' darslari'
// })

// 2) innerHTML
// const title = document.getElementById('title')
// title.innerHTML = ' <i> New text</i>'

// const names = [`Ilyos`, ` Ma'ruf`, `Shahzod`];
// const ol = document.querySelector("ol");
// names.forEach((name) => {
//   ol.innerHTML +=  `<li>${name}</li>`;
// });

// <============== get & set Attributes ==========>
// const link = document.querySelector('a')
// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.yandex.ru')
// link.textContent += ' Go to Yandex Main Page'
// const text = document.querySelector('p')
// console.log(text.getAttribute('class'));
// text.setAttribute('class', 'success')
// text.setAttribute('style', 'color: red')


// <=====DOM=====>
//  const heading = document.querySelector('h1')
//  heading.setAttribute('style', 'margin: 50px')
// console.log(heading.style);
// heading.style.margin = '50px'
// heading.style.color = 'crimson'
// heading.style.fontSize = '50px'
// heading.style.margin = ''
// heading.style.background = '#ccc'


// <========== add & remove ==========>

// const content = document.querySelector('p')
//  console.log(content.classList);
//  content.classList.add('success')
//  content.classList.remove('success')
//  content.classList.add('error')


// const para = document.querySelectorAll('p')
// para.forEach((item) =>{
//  if(item.textContent.includes('success')){
//     item.classList.add('success')
//  }else{
//     item.classList.add('error')
//  }
// })

//Toggle
//Toggle - ni asosiy vazifasi bu berilayotgan class bo'lsa olib tashlaydi aks holda o'sha classni qo'shib beradi
// const heading =  document.querySelector('h1')
// heading.classList.toggle('success')
// heading.classList.toggle('success')
// heading.classList.toggle('success')


// <=== PARENT CHILDREN SIBLINGS =====>

// const article = document.querySelector('article')
// console.log(article.children);
// Array.from(article.children).forEach((child) =>{
//     child.classList.add('article-child')
// })
 

// const title = document.querySelector('h2')
// console.log(title.parentElement);
// console.log(title.parentElement.parentElement);
// console.log(title.nextElementSibling);
// console.log(title.previousElementSibling);

//chaining
// console.log(title.nextElementSibling.parentElement.children);


// <======== todols =======>

// const ul = document.querySelector('ul')
// ul.remove()

// const button = document.querySelector('button')
// button.addEventListener('click', () => {
//     // ul.innerHTML += ` <li> Something new text 😉</li>`

//     // js da element yaratish
//     const li = document.createElement('li')
//     li.textContent = 'Something new text 😉'
//     console.log(li);
    
//     ul.appendChild(li) // pastdan qo'shib beradi
//     ul.prepend(li) // tepadan qo'shib beradi
// })

// const items = document.querySelectorAll('li')

// items.forEach((item)=>{
//     item.addEventListener('click',(e) =>{
//         e.target.remove()
//     })
// })
