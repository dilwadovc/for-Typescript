// Form ishlashi
const nameForm = document.getElementById("nameForm") as HTMLFormElement;
const nameInput = document.getElementById("nameInput") as HTMLInputElement;
const greeting = document.getElementById("greeting") as HTMLDivElement;

nameForm.addEventListener("submit", (e) => {
    e.preventDefault();
    greeting.textContent = `Salom, ${nameInput.value}! 👋`;
    nameInput.value = "";
});

// API chaqirish (Random fakt)
const factBtn = document.getElementById("factBtn") as HTMLButtonElement;
const factText = document.getElementById("factText") as HTMLParagraphElement;

factBtn.addEventListener("click", async () => {
    factText.textContent = "Yuklanmoqda...";
    try {
        const res = await fetch("https://catfact.ninja/fact");
        const data = await res.json();
        factText.textContent = data.fact;
    } catch (error) {
        factText.textContent = "Xatolik yuz berdi!";
    }
});
