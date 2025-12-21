
document.addEventListener('DOMContentLoaded', function(){
    let proiecte = [
  {id: 1, title: 'Coffee & Tea', link: 'https://coffee.mihaii.com/',des: 'The website of a practice company; its purpose is to provide an online presence, present services and products, and allow online purchasing.', image: 'ProjectsImg/coffee.png'},
  {id: 2, title: 'MSD', link: 'https://msd.mihaii.com/',des: 'A nonprofit association founded on May 16, 2024, dedicated to supporting children in need and communities in disadvantaged areas. Its mission is to bring positive change.', image: 'ProjectsImg/msd.png'},
  {id: 3, title: 'Profinex', link: 'https://profinex.mihaii.com/',des: 'A website created for a client to present the offered services in a modern way, including a contact email address.', image: 'ProjectsImg/Profinex1.jpg'},
  {id: 4, title: 'ePlants', link: 'https://eplants.mihaii.com/',des: 'A portfolio showcasing various applications, from local JSON functions to games like “Guess the Number” and scroll animations.', image: 'ProjectsImg/ePlants1.jpg'},
  {id: 5, title: 'mihaii.com', link: 'https://mihaii.com/',des: 'Archive of the old website, looks like.', image: 'ProjectsImg/creator.png'},
  {id: 6, title: 'Database', link: 'https://online-nx41.onrender.com/login',des: 'A project dedicated to server-based websites (Node.js) that can send and manage information in a database.', image: 'ProjectsImg/online.png'},
  {id: 7, title: 'Your Project!', link: '',des: 'By collaborating with us, you benefit from free promotion on our website.', image: 'ProjectsImg/soon.png'}
];


    const proiecteContainer = document.getElementById('project-container-all');
    proiecteContainer.innerHTML = '';
    proiecte.forEach(proiect => {
        const pr = `<div id='pr${proiect.id}' class="project-container">
                        <div class="img-back">
                            <img src='${proiect.image}'>
                        </div>
                        <div class="proj-info">
                            <div class="part1-info">
                                <p>${proiect.title}</p>
                            </div>
                            <div class="part2-info">
                                <div class='inf2-1'><p>${proiect.des}</p></div>
                                <div class='inf2-2'><a href='${proiect.link}'><button class="vezi-pr">Look<span> ↗</span></button></a></div>
                            </div>
                        </div>
                    </div>`;

        proiecteContainer.innerHTML += pr;
    })

    const showMore = document.getElementById('show-btn');
    const showContent1 = document.querySelectorAll('#pr1, #pr2, #pr3');
    const showContent2 = document.querySelectorAll('#pr4, #pr5, #pr6');
    const showContent3 = document.querySelectorAll('#pr7');
    const screenWidth = window.innerWidth;
    let step = 0;

    const allContent = document.querySelectorAll('#pr1, #pr2, #pr3, #pr4, #pr5, #pr6, #pr7');
    allContent.forEach(el => el.style.display = 'none');

    if (screenWidth > 925){
        width925();
    }
    else if (621 < screenWidth && screenWidth <= 925){
        width621();
    }
    else if (screenWidth < 620){
        width620();
    }

    let lastWidth = screenWidth;
    window.addEventListener('resize', function () {
        if (
            (lastWidth <= 620 && window.innerWidth > 620) ||
            (lastWidth <= 925 && window.innerWidth > 925) ||
            (lastWidth > 925 && window.innerWidth <= 925) ||
            (lastWidth > 620 && window.innerWidth <= 620)
        ) {
            location.reload();
        }
    });

    function width925() {
        if (screenWidth > 925){
        showContent1.forEach(el => el.style.display = 'block');
        showContent2.forEach(el => el.style.display = 'block');

        showMore.addEventListener('click', function () {
            step++;

            if (step === 1) {
                showContent3.forEach(el => el.style.display = 'block');
                showMore.textContent = 'Show less';
                console.log(step);
            }

            else {
                showContent3.forEach(el => el.style.display = 'none');
                showMore.textContent = 'Show more';
                step = 0;
                console.log(step);
            }
        })
    }
    }
    
    function width621() {
        if (621 < screenWidth && screenWidth < 925){
        showContent1.forEach(el => el.style.display = 'block');
        showContent2[0].style.display = 'block';

        showMore.addEventListener('click', function (){
            step++;

            if(step === 1){
                showContent2.forEach(el => el.style.display = 'block');
                showContent3.forEach(el => el.style.display = 'block');
                showMore.textContent = 'Show less';
                console.log(step);
            }

            else{
                showContent2[1].style.display = 'none';
                showContent2[2].style.display = 'none';
                showContent3.forEach(el => el.style.display = 'none');
                showMore.textContent = 'Show more';
                step = 0;
                console.log(step);
            }
        })
    }
    }
    
    function width620() {
        if (screenWidth < 620){
        showContent1.forEach(el => el.style.display = 'block');

        showMore.addEventListener('click', function(){
            step++;
            console.log(step);

            if (step === 1){
                showContent2.forEach(el => el.style.display = 'block');
                showMore.textContent = 'Show more';
                console.log(step);
            }

            else if (step === 2){
                showContent3.forEach(el => el.style.display = 'block');
                showMore.textContent = 'Show less';
                console.log(step);
            }

            else{
                showContent2.forEach(el => el.style.display = 'none');
                showContent3.forEach(el => el.style.display = 'none');
                showMore.textContent = 'Show more';
                step = 0;
                console.log(step);
            }
        })
    }
    }
})