const patriocinar = document.querySelector(".contato a");

patriocinar.addEventListener("click", (()=>{
  let mensagem = encodeURI("Tenho interesse em contribuir com o projeto, como posso ajudar?");
  let telefone = "67992791596";

  window.open(
    `https://wa.me/${telefone}?text=${mensagem}`, "_blank"
  )
}))