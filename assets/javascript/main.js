const body = document.querySelector('body');
const removeButton = document.createElement('button');
removeButton.append('Remove Main Element');
body.append(removeButton);

const createInput = document.createElement('input');
body.append(createInput);

const createButton = document.createElement('button');
createButton.append('Create Element');
body.append(createButton);

const removeInput = document.createElement('input');
body.append(removeInput);

const removeButtonCSS = document.createElement('button');
removeButtonCSS.append('Remove Element by CSS Selector');
body.append(removeButtonCSS);

const main = document.createElement('main');
body.append(main);

const image = document.createElement('img');
image.src = './assets/images/1st-ed-pika.jpg';
image.classList.add('image');
main.append(image);

const link = document.createElement('a');
link.append('Click here to go to Google');
link.href = 'https://google.com';
link.classList.add('link');
main.append(link);

removeButton.addEventListener('click', () => {
    main.remove();
});

createButton.addEventListener('click', () => {
    const newElement = document.createElement('div');
    newElement.append(`${createInput.value}`);
    body.append(newElement);
});

removeButtonCSS.addEventListener('click', () => {
    document.querySelector(`${removeInput.value}`).remove();
})