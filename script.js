const header = document.querySelector(".right-nav");
const container = document.querySelector(".container");

// console.log(header.previousElementSibling);
// console.log(header.previousSibling);

const P = document.createElement("p");
P.innerHTML = `Hey I'm red!`;
P.style.color = "red";

container.style = `
margin-inline: 20%;
padding: 20px;
`;
container.append(P);
