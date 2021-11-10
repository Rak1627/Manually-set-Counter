// const value = document.querySelector('#value');
// const btn = document.querySelectorAll('#btn');

// count = 0;
// btn.forEach((Funcall) => {
//     Funcall.addEventListener('click', (Funcall) => {
//         let target = Funcall.currentTarget.classList;
//         if(target.contains('decrease')){
//             count--;
//         }else if (target.contains('increase')){
//             count++;
//         }else {
//             count = 0;
//         }
//         value.textContent = count;
//         if (count > 0){
//             value.style.color = 'green';
//         }else if (count < 0){
//             value.style.color = 'red';
//         }else if (count === 0){
//             value.style.color = '#fff';
//         }
//     })
// })


// const value = document.querySelector('#value');
// const btn = document.querySelectorAll('#btn');

// count = 0;
// btn.forEach((calling) => {
//     calling.addEventListener('click', (btnCalling) => {
//         let target = btnCalling.currentTarget.classList;
//         if (target.contains('increase')){
//             count++;
//         }else if (target.contains('decrease')){
//             count--;
//         }else {
//             count = 0;
//         }
//         value.textContent = count;
//         if(count < 0){
//             value.style.color = 'red';
//         }else if (count > 0){
//             value.style.color = 'green';
//         }else if (count === 0){
//             value.style.color = '#fff';
//         }
//     })
// })



const value = document.querySelector('#value');
const btn = document.querySelectorAll('#btn');
count = 0;
btn.forEach((calling) => {
    calling.addEventListener('click', (btnCalling) => {
        let target = btnCalling.currentTarget.classList;
        if (target.contains('increase')) {
            count++;
        } else if (target.contains('decrease')) {
            count--;
        } else {
            count = 0;
        }
        value.textContent = count;
    }) 
})