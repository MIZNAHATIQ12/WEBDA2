
function changeIndent(e){
    const text = document.querySelector('.book_content');
    if(e.target.id === "bold"){
        e.target.classList.toggle('active');
        text.classList.toggle('bold');
    }
    if(e.target.id === "italic"){
        e.target.classList.toggle('active');
        text.classList.toggle('italic');
    }
    if(e.target.id === "underline"){
        e.target.classList.toggle('active');
        text.classList.toggle('underline');
    }
}



function changeIndent2(e){
    const text = document.querySelector('.book_content3');
    if(e.target.id === "bold1"){
        e.target.classList.toggle('active1');
        text.classList.toggle('bold1');
    }
    if(e.target.id === "italic1"){
        e.target.classList.toggle('active1');
        text.classList.toggle('italic1');
    }
    if(e.target.id === "underline1"){
        e.target.classList.toggle('active1');
        text.classList.toggle('underline1');
    }
}






const btnAction = document.querySelector('.button-action');
btnAction.addEventListener('click', changeIndent);

const btnAction2 = document.querySelector('.button-action2');
btnAction2.addEventListener('click', changeIndent2);