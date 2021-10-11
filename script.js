const sections = Array.from(document.getElementsByClassName("section"));
let currentSection = 0;

document.getElementById("last").addEventListener("click", () => {
    if (currentSection > 0) {
        sections[currentSection].classList.add("hidedown");
        currentSection--;
        sections[currentSection].classList.remove("hideup");
        if (currentSection === 0) document.getElementById("last").classList.add("disabled");
        if (currentSection < sections.length - 1) document.getElementById("next").classList.remove("disabled");
    }
});
document.getElementById("next").addEventListener("click", () => {
    if (currentSection < sections.length - 1) {
        sections[currentSection].classList.add("hideup");
        currentSection++;
        sections[currentSection].classList.remove("hidedown");
        if (currentSection > 0) document.getElementById("last").classList.remove("disabled");
        if (currentSection === sections.length - 1) document.getElementById("next").classList.add("disabled");
    }
});