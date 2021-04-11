// 1 way

// const titleField = document.querySelector('#title');
// const btn = document.querySelector('#btn');


// btn.addEventListener('click', function () {
//     console.log(titleField.value);
// });


// 2 way FormData
const todoForm = document.querySelector('#todoForm');
const btn = document.querySelector('#btn');


btn.addEventListener('click', function () {
    const form = new FormData(todoForm);

    for (var val of form.values()) {
        console.log(val);
    }
});

