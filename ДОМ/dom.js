// // // // console.log(document.querySelector('ul'));

// // // // const galleryList = document.querySelector('gallery__list')

// // // // console.log(galleryList)

// // // // const lists = document.querySelector('ul')

// // // // console.log(lists.children)

// // // // console.log(lists[1])

// // // // const text = document.querySelectorAll('.gallery__list .text')

// // // // console.log(text)

// // // // const checkBoxElement = document.querySelector('[type=checkbox]')

// // // // console.log(checkBoxElement)

// // // // // const idTest = document.querySelector('#test')

// // // // // console.log(idTest)

// // // // const idTest = document.getElementById('test')

// // // // console.log(idTest)

// // // // const element = document.querySelector('.elements__item')

// // // // console.log(element.parentNode)

// // // // const nextElement = element.nextElementSibling

// // // // console.log(nextElement)

// // // // const previousElement = nextElement.previousElementSibling

// // // // console.log(previousElement)

// // // // const allElements = element.childNodes

// // // // console.log(allElements)

// // // // const list = document.querySelector('ul')

// // // // const kids = list.firstElementChild

// // // // console.log(kids)

// // // // const lastKids = list.lastElementChild

// // // // console.log(lastKids)

// // // // АРТИКЛ

// // // const articleElement = document.querySelector('article')

// // // articleElement.style.border = '5px red solid'

// // // articleElement.style.borderRadius = '10px'

// // // articleElement.style.boxShadow = '10px 5px 5px 5px grey'

// // // articleElement.style.width = '500px'

// // // articleElement.style.background = 'lightblue'

// // // articleElement.classList.add('article__block')

// // // console.log(articleElement)

// // // console.log(articleElement)

// // // ////////////////////////////////////////////////////////

// // // // ТИТЛ

// // // const articleTitle = document.querySelector('.article__title')

// // // articleTitle.textContent = 'рецепт млинців'

// // // articleTitle.style.textShadow = '1px 1px 1px red'

// // // console.log(articleTitle)
// // // ////////////////////////////////////////////////////////

// // // // ТЕКСТ

// // // const articleText = document.querySelector('.article__text')

// // // articleText.textContent = 'Для приготування млинців найкраще підходить пшеничне борошно. Але якщо ви віддаєте перевагу пухким млинцям, тоді борошно можна використовувати вівсяне або гречане.'

// // // console.log(articleElement.classList.contains('article__text'))

// // // console.log(articleText())
// // // ////////////////////////////////////////////////////////
// // // const articlePhoto = document.querySelector('.article__photo')

// // // articlePhoto.src = 'https://yasensvit.ua/uploads/recipes/prev/632c48d4762e9.jpg'

// // // articlePhoto.alt = 'млинці'

// // // // articlePhoto.width = 300

// // // // ФОТО

// // // articlePhoto.style.width = '300px';

// // // console.log(articlePhoto)

// // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // ////////////////////////////////////////////////////////////////////////////////////////////////////////
// // ////////////////////////////////////////////////////////////////////////////////////////

// // const form = document.createElement('form');
// // form.classList.add('form');
// // const nameForm = document.createElement('input');
// // nameForm.placeholder = 'name: ';
// // nameForm.classList.add('form__name');
// // nameForm.style.display = 'block';
// // nameForm.style.border = '10px solid black';
// // nameForm.style.borderRadius = '10px';
// // nameForm.style.marginBottom = '20px';
// // const surnameForm = document.createElement('input');
// // surnameForm.placeholder = 'surname: ';
// // surnameForm.classList.add('form__surname');
// // surnameForm.style.display = 'block';
// // surnameForm.style.border = '10px solid red';
// // surnameForm.style.borderRadius = '10px';
// // surnameForm.style.marginBottom = '20px';
// // const levelForm = document.createElement('select');
// // levelForm.classList.add('form__level');
// // const optionData = ['стажер', 'junior', 'middle', 'senior'];
// // const optionsEls = optionData.map(optionInf => {
// //     const optionsEl = document.createElement('option');
// //     optionsEl.textContent = optionInf;
// //     optionsEl.setAttribute('value', optionInf);
// //     return optionsEl;
// // });
// // optionsEls.forEach(optionEl => levelForm.append(optionEl));
// // const buttonForm = document.createElement('button');
// // buttonForm.setAttribute('type', 'button');
// // buttonForm.style.display = 'block';
// // buttonForm.textContent = 'Відправити форму';
// // buttonForm.classList.add('form__button');
// // buttonForm.style.marginTop = '20px';
// // buttonForm.style.borderRadius = '30px';
// // buttonForm.style.width = '250px';
// // buttonForm.style.height = '50px';
// // form.append(nameForm, surnameForm, levelForm, buttonForm);
// // document.body.prepend(form);
prepend
// // const formEl = document.querySelector('.form');
// // const nameFormEl = document.querySelector('.form__name');
// // const surnameFormEl = document.querySelector('.form__surname');
// // const levelFormEl = document.querySelector('.form__level');
// // const butFormEl = document.querySelector('.form__button');
// // butFormEl.addEventListener('click', () => console.log(`Name: ${nameFormEl.innerHTML}, Surname: ${surnameFormEl.innerHTML}, Level: ${levelFormEl.value}`));

// const colorPickerOptions = [
//     { label: 'red', color: '#F44336'},
//     { label: 'green', color: '#4CAF50'},
//     { label: 'blue', color: '#2196F3'},
//     { label: 'grey', color: '#607D8B'},
//     { label: 'pink', color: '#E91E63'},
//     { label: 'indigo', color: '#3F51B5'},
//   ];
  
//   const createBut = (label, color) => {
//       const but = document.createElement('button');
//       but.style.background = color;
//       but.style.color = label;
//       but.textContent = label;
//       return but;
//   }
  
//   const buts = colorPickerOptions.map(butData => createBut(butData.label, butData.color));
//   buts.forEach(butEl => document.body.prepend(butEl));

const createArticle = () => {
    const articleElement = document.createElement('article');
    const titleElement = document.createElement('title');
    const textElement = document.createElement('p');
    const priceElement = document.createElement('p')

    articleElement.append(article)
    titleElement.append(title)
}