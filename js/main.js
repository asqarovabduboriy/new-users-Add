const Dark = document.querySelector('.Dark-ligt-btn');
const body = document.querySelector('body');
const ligth = document.querySelector('.Ligth');

Dark.addEventListener('click', () => {
    body.style.background = 'black';
    body.style.color = 'white';
    form.style.background = 'white';
});

ligth.addEventListener('click', () => {
    body.style.background = 'White';
    body.style.color = 'black';
    form.style.background = ' #fffccc';
});

////////////////////////////////////////form

const form = document.querySelector('.form');
const inputName = document.querySelector('.inputname');
const inputJob = document.querySelector('.inputJob');
const inputUnversitiy = document.querySelector(".inputUnversity");
const wraper = document.querySelector('.card-wraper');


let Data = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let NewUsers = {
        id: `id-${new Date().getTime()}`,
        name: inputName.value,
        job: inputJob.value,
        unversity: inputUnversitiy.value
    }

    Data.push(NewUsers);
    console.log(Data);
    createDiv(Data);
    inputJob.value = "";
    inputName.value = "";
    inputUnversitiy.value = "";
})


function createDiv(Data) {
    while (wraper.firstChild) {
        wraper.firstChild.remove();
    };
    Data.forEach((user, index) => {
        let div = document.createElement("div");
        div.innerHTML = `
        <div class="card-one">
                <div class="border-radius">
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" width="100px"
                        height="100px">
                </div>
                <div class="text-content">
                    <span>${index + 1}</span>
                    <h1>${user.name}</h1>
                    <p>${user.job}</p>
                    <p>${user.unversity}</p>
                </div>
                <div class="icon-container">
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin"></i>
                </div>
                <div class="delete-btn">
                    <button onclick="DeleteUser(${index})" class="danger-btn">Delete User</button>
                </div>
            </div>
        `
        wraper.appendChild(div);
    });
}

createDiv(Data);

function DeleteUser(index) {
    Data.splice(index, 1);
    createDiv(Data)

}





