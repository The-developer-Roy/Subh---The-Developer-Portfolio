const githubBtn = document.getElementById('githubBtn');
const resume = document.getElementById('resume');

var typed = new Typed('#element', {
    strings: ['Web Developer.', 'Frontend Developer.', 'Backend Developer.', 'Tech Nerd.'],
    typeSpeed: 40,
    backspeed: 40
});

function goToGithub(){
    githubBtn.addEventListener("click", ()=>{
        const githubURL = "https://github.com/The-developer-Roy";
        window.open(githubURL, "_blank");
    });
};


// Create the anchor element once
const anchor = document.createElement("a");
anchor.style.display = "none";
document.body.appendChild(anchor);

resume.addEventListener("click", function() {
    const pdfURL = "./resume.pdf";
    anchor.href = pdfURL;
    anchor.download = "Suhadeep Roy's Resume";
    anchor.click();
});
