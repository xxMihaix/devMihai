
document.addEventListener('DOMContentLoaded', function(){
    const menu = document.getElementById('menu');
    
    menu.addEventListener('click', function(){
        const dropdown = document.getElementById('dropdown-container');
        const dropdownStyle = window.getComputedStyle(dropdown);
        if(dropdownStyle.top === "-150px"){
            dropdown.classList.add('active');
        }
        else{
            dropdown.classList.remove('active');
        }
    })
})

document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('go');

    btn.addEventListener('click', function(){
        window.location.href = "index.html#all-contact-container";
    })

    const buttons = document.querySelectorAll('.nv-btn')
        
    buttons.forEach((button) => {
        
        button.addEventListener('click', function() {
            const target = button.dataset.target;

            window.location.href = `index.html#${target}`;
        })
    })
})