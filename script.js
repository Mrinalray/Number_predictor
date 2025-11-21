// =========================
//   AUTO-PLAY MUSIC FIX
// =========================
const audio = document.getElementById("musicPlayer");

function forcePlay() {
    const playAttempt = audio.play();

    if (playAttempt !== undefined) {
        playAttempt.catch(() => {
            setTimeout(() => audio.play().catch(()=>{}), 300);
        });
    }
}

// Try autoplay immediately
forcePlay();

// Retry on first interaction (backup)
document.addEventListener("click", forcePlay, { once: true });
document.addEventListener("touchstart", forcePlay, { once: true });

// =========================
//      MUTE / UNMUTE
// =========================
document.getElementById("muteBtn").onclick = function () {
    audio.muted = !audio.muted;
    this.innerText = audio.muted ? "🔇" : "🔊";
};

// =========================
//   NUMBER PREDICTION
// =========================
function startPrediction() {
    const result = document.getElementById("result");
    result.innerText = "Checking your system...";

    let current = parseInt(document.getElementById("numberSelect").value);
    let next = current === 9 ? 10 : current + 1;

    const steps = [
        "Checking your system...",
        "Hacking ISRO for data...",
        "Analyzing your brain...",
        "Dhoni announced to play one more IPL...",
        "Predicting number...",
        "Next Number: " + next
    ];

    let i = 0;
    result.innerText = steps[i];

    let interval = setInterval(() => {
        i++;
        if (i < steps.length) {
            result.innerText = steps[i];
        } else {
            clearInterval(interval);
        }
    }, 2000);
}
