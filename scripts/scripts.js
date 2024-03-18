const patriocinar = document.querySelector(".contato a");

const enviar = () => {
  patriocinar.setAttribute(
    "href",
    "https://wa.me//55xxxxxxxxxxx?text=Tenho%20interesse%20em%20contribuir%20com%20o%20projeto,%20como%20posso%20ajudar?"
  );
};

patriocinar.onclick = enviar;