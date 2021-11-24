const tabs = document.querySelectorAll('.content-item');
const content = document.querySelectorAll('.content-box');

const changeClass = el => {
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    el.classList.add('active');
}

tabs.forEach(item => {
    item.addEventListener('click', e => {
        const currTab = e.currentTarget.dataset.btn;
        console.log(e.target)

        changeClass(e.currentTarget)
        for (i = 0; i < content.length; i++) {
            content[i].classList.remove('active');
            if (content[i].dataset.content === currTab) {
                content[i].classList.add('active')
            }
        }
    })
})

let tabOne = document.querySelector('.content-item').click();

const buttons = document.querySelectorAll('.works__tab');
const contentBtn = document.querySelectorAll('.works__content-box');

const changeBtn = elem => {
    for (i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active')
    }
    elem.classList.add('active');
}

buttons.forEach(item => {
    item.addEventListener('click', e => {
        const currentTab = e.target.dataset.id;
        changeBtn(e.target)
        for (i = 0; i < contentBtn.length; i++) {
            contentBtn[i].classList.remove('active');
            if (contentBtn[i].dataset.box === currentTab) {
                contentBtn[i].classList.add('active')
            }
        }
    })
});

document.querySelector('.works__tab').click();


const buttonQuestions = document.querySelectorAll('.questions__box-subtitle');
const box = document.querySelectorAll('.questions__box');

buttonQuestions.forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentNode;

        if (parent.classList.contains('active')) {
            parent.classList.remove('active')
        } else {
            box.forEach((child) => child.classList.remove('active'))
            parent.classList.add('active');
        }
    });
});

document.querySelector('.questions__box-subtitle').click();
