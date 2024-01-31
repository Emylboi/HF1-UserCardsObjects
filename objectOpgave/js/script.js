let outputContact = document.querySelector(".contact-Container");

let contacts = [
  {
    image: "images/man1.jpg",
    name: "Egon Andersen",
    username: "Egonist420",
    email: "egon-andersen@hotmail.dk",
    link: "https://www.google.dk/",
  },
  {
    image: "images/woman1.jpg",
    name: "Amalie Pedersen",
    username: "Amanda123",
    email: "amalie-pedersen@hotmail.dk",
    link: "",
  },
  {
    image: "images/woman2.jpg",
    name: "Katrine Nielsen",
    username: "KatriNielsen",
    email: "katrine-nielsen@hotmail.dk",
    link: "",
  },
  {
    image: "images/man2.jpg",
    name: "Per Hansen",
    username: "PerHan",
    email: "per-hansen@hotmail.dk",
    link: "",
  },
  {
    image: "images/woman3.jpg",
    name: "Lise Andersen",
    username: "LiseAndersen",
    email: "lise-andersen@hotmail.dk",
    link: "",
  },
  {
    image: "images/man3.jpg",
    name: "Gustav Madsen",
    username: "GustavIsMyName",
    email: "gustav-madsen@hotmail.dk",
    link: "",
  },
];

contacts.forEach((element) => {
  outputContact.innerHTML += `
        <div class="contact-Person">
            <img src="${element.image}" alt="" class="contact-Image">
            <h1 class="contact-Name">${element.name}</h1>
            <p class="contact-Username">${element.username}</p>
            <p class="contact-Email">${element.email}</p>
            <a href="${element.link}" class="contact-Link">
                <button class="contact-Button">${element.name}</button>
            </a>
        </div>
   `;
});
