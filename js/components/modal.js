
/* Function for showing a modal when image is clicked on post page.
Inspired by https://dev.to/salehmubashar/create-an-image-modal-with-javascript-2lf3*/


export function imageModal () {
    const images = document.querySelectorAll(".wp-block-image img");

    images.forEach((img)=> {
        img.addEventListener("click", (e) => {
            const imgSrc = e.target.src;
            showModal(imgSrc);
        })
    });
    
   function showModal (src) {

        const modal = document.createElement("div")
        modal.classList.add("modal")
        
        const newImage = document.createElement("img");
        newImage.setAttribute("src", src);
        

        const closeBtn = document.createElement("i");
        closeBtn.classList.add("fa-solid", "fa-xmark", "closeBtn")

        modal.onclick = () => {
            modal.remove();
        };
        modal.append(newImage, closeBtn);
        document.body.appendChild(modal);
    }
}
