      document.getElementById("check-btn").addEventListener("click", function() {
            let score = 0;
            const answers = document.querySelectorAll("input[type='radio']:checked");
            answers.forEach(ans => {
                if (ans.value === "correct") score++;
            });

            const resultDiv = document.getElementById("result");
            resultDiv.style.display = "block";
            if (score === 3) {
                resultDiv.innerHTML = `✅ Ajoyib! ${score}/3 to‘g‘ri javob.`;
                resultDiv.style.color = "green";
            } else {
                resultDiv.innerHTML = `❌ ${score}/3 to‘g‘ri javob. Yana urinib ko‘ring!`;
                resultDiv.style.color = "red";
            }
        });