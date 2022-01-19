let darkMode;

if(localStorage.getItem("darkMode")) {
    darkMode = localStorage.getItem("darkMode")
} else {
    darkMode = "light"
}

localStorage.setItem("darkMode", darkMode)

$(() => {
    if(localStorage.getItem("darkMode") == "dark") {
        $("#header").addClass("darkMode")
        $("#projects").addClass("darkMode2")
        $("#technologies").addClass("darkMode")
        $("#footer").addClass("darkMode2")
        $("#projects_cards").addClass("darkModeCard")
        $("#btnDark").hide()
        $("#btnLight").show()
    } else {
        $("#btnLight").hide()
    };

    $("#btnLight").click(() => {
        $("#btnDark").show()
        $("#btnLight").hide() 
        $("#header").removeClass("darkMode")
        $("#projects").removeClass("darkMode2")
        $("#technologies").removeClass("darkMode")
        $("#footer").removeClass("darkMode2")
        $("#projects_cards").removeClass("darkModeCard")
        localStorage.setItem("darkMode", "light")
    })

    $("#btnDark").click(() => {
        $("#btnDark").hide()
        $("#btnLight").show() 
        $("#header").addClass("darkMode")
        $("#projects").addClass("darkMode2")
        $("#technologies").addClass("darkMode")
        $("#footer").addClass("darkMode2")
        $("#projects_cards").addClass("darkModeCard")
        localStorage.setItem("darkMode", "dark")
    })
})