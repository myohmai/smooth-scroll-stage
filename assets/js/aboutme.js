let skillsButtons = document.querySelectorAll('.intro-skills__button');

skillsButtons.forEach((skillsButton) =>{
    skillsButton.addEventListener('click',()=>{
        skillsButton.classList.toggle('active');
        let sibling = skillsButton.nextElementSibling;
        sibling.classList.toggle('active');
        let buttonActive = skillsButton.classList.contains('active');
        if (buttonActive) {
            skillsButton.textContent = 'Close';
        } else {
            skillsButton.textContent = 'Detail';
        }
    });
});