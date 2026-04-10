
const category = document.getElementById("category");
const familyName = document.getElementById("family_name");
const err = document.getElementById("category_error"); 

if (category && familyName && err) {
    familyName.addEventListener("focus", () => {
    if (category.value === "") {
        err.classList.add("show");
        err.textContent = "項目を入力してください"; 
        category.focus();
    } else {
        err.classList.remove("show");
        err.textContent = "";
    }
    });
}

document.querySelectorAll(".video_box").forEach(box => {

    const video = box.querySelector("video");
    const thumb = box.querySelector("img");

    if (!video || !thumb) return;

    thumb.addEventListener("click", () => {
        thumb.classList.add("is-hidden");
        video.play();
    });

    video.addEventListener("ended", () => {
        thumb.classList.remove("is-hidden");
        thumb.style.display = "block";
        thumb.style.opacity = "1";
        thumb.style.pointerEvents = "auto";
        video.currentTime = 0;
    });

});