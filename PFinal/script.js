let darkMode;

if(localStorage.getItem("darkMode")) {
    darkMode = localStorage.getItem("darkMode")
} else {
    darkMode = "light"
}

localStorage.setItem("darkMode", darkMode)

$(() => {
    if(localStorage.getItem("darkMode") == "dark") {
        $("#divContenedorAbout").addClass("darkMode")
        $("#header").addClass("darkMode")
        $("#projects").addClass("darkMode2")
        $("#technologies").addClass("darkMode")
        $("#footer").addClass("darkMode2")
        $("#projects_cards1").addClass("darkModeCard")
        $("#projects_cards2").addClass("darkModeCard")
        $("#projects_cards3").addClass("darkModeCard")
        $("#projects_cards4").addClass("darkModeCard")
        $("#btn").addClass("btnDark")
        $("#logo").addClass("darkSvg")
        $("#logo2").addClass("darkSvg")
        $("#btnDark").hide()
        $("#btnLight").show()
    } else {
        $("#btnLight").hide()
    };

    $("#btnLight").click(() => {
        $("#btnDark").show()
        $("#btnLight").hide() 
        $("#divContenedorAbout").removeClass("darkMode")
        $("#header").removeClass("darkMode")
        $("#projects").removeClass("darkMode2")
        $("#technologies").removeClass("darkMode")
        $("#footer").removeClass("darkMode2")
        $("#projects_cards1").removeClass("darkModeCard")
        $("#projects_cards2").removeClass("darkModeCard")
        $("#projects_cards3").removeClass("darkModeCard")
        $("#projects_cards4").removeClass("darkModeCard")
        $("#btnDark").removeClass("btnDark")
        $("#logo").removeClass("darkSvg")
        $("#logo2").removeClass("darkSvg")
        localStorage.setItem("darkMode", "light")
    })

    $("#btnDark").click(() => {
        $("#btnDark").hide()
        $("#btnLight").show() 
        $("#divContenedorAbout").addClass("darkMode")
        $("#header").addClass("darkMode")
        $("#projects").addClass("darkMode2")
        $("#technologies").addClass("darkMode")
        $("#footer").addClass("darkMode2")
        $("#projects_cards1").addClass("darkModeCard")
        $("#projects_cards2").addClass("darkModeCard")
        $("#projects_cards3").addClass("darkModeCard")
        $("#projects_cards4").addClass("darkModeCard")
        $("#btnLight").addClass("btnDark")
        $("#logo").addClass("darkSvg")
        $("#logo2").addClass("darkSvg")
        localStorage.setItem("darkMode", "dark")
    })
})

/////HERO SVG 

// const logo = document.querySelectorAll("#logo path");

// for(let i = 0; i<logo.length; i++){
//     console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
// }
//// ABOUT SVG

const logo = document.querySelectorAll("#logo2 path");

for(let i = 0; i<logo.length; i++){
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}

/////SCROLLING

    
        const projects = document.querySelectorAll('.anim');

        observer = new IntersectionObserver((entries) => {

            console.log(entries);

            entries.forEach(entry => {
                if(entry.intersectionRatio > 0) {
                    entry.target.style.animation = `anim1 2s ${entry.target.dataset.delay} forwards ease-out`;
                }
                else {
                    entry.target.style.animation = 'none';
                }
            })

        })

        projects.forEach(image => {
            observer.observe(image)
        })
    