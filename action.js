

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