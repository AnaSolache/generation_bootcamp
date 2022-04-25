window.addEventListener("keydown", function (event) {
    console.log(event);
  })

  

  console.log("keydown")

  let tecla1 = event.filter(element => element == "code")
  console.log(tecla1)
  
 