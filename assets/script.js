const body = document.querySelector('body');

const avancarScroll = (elemento, direcao) => {
  const carrocelContent = document.querySelector(elemento);

  if(direcao == 'left'){
    carrocelContent.scrollLeft -= 100;
    // carrocelContent.scrollLeft = carrocelContent.scrollLeft - 100;
  } else if (direcao == 'right'){
    carrocelContent.scrollLeft += 100;
    // carrocelContent.scrollRight = carrocelContent.scrollRight - 100;
  }
}

const pageFilm = (titulo, codeVideo) => {
  body.innerHTML = `
  <header>
  <img class="logo" src="assets/images/netflix-logo.png">
  </header>

  <main>
    <div id="container-voltar" onClick="backHome()"> 
      <span> < Voltar </span> 
    </div>

    <div class="container">
      <span id="title">${titulo}</span>

      <iframe width="900" height="400" src="https://www.youtube.com/embed/${codeVideo}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

  </main>
  `
  console.log("aqui")
}

const createCarrocel = () => {
  const listSuspense = [
    {
      title: "O Lado Bom de Ser Traída ",
      capa: "assets/images/capas/o-lado-bom-de-ser-traida.jpg",
      code: "hqFVSHWIE14"
    },
    {
      title: " vingança solitaria",
      capa: "assets/images/capas/vingança-solitaria.jpg",
      code: "0CDMVGrJ6Rk"
    },
    {
      title: " a mae",
      capa: "assets/images/capas/a-mae.jpg",
      code: "vj41Lz5HFtc"
    },
    {
      title: "desejo proibido",
      capa: "assets/images/capas/desejo-proibido.jpg",
      code: "El8sjcTwBs8"
    },
    {
      title: " veloses e furiosos",
      capa: "assets/images/capas/veloses-e-furiosos.jpg",
      code: "ByGA7aWSxW4"
    },
    {
      title: "alerta vermelho",
      capa:   "assets/images/capas/alerta-vermelho.jpg",
      code: "5JQuYpBZarc"
    },
  ];

  listSuspense.forEach((e) => createCarrocelItem(".suspense", e.capa, e.title, e.code))

  const listTerror = [
    {
      title: "o grito",
      capa: "assets/images/capas/o-grito.jpg",
      code: "Kp_-KZH_vlQ"
    },
    {
      title: "todo mundo em panico",
      capa: "assets/images/capas/todo-mundo-em-panico.jpg",
      code: "MfOslLcBIL8"
    },
    {
      title: "massacre no texas",
      capa: "assets/images/capas/massacre-no-texas.jpg",
      code: "53Q4s1bxGUw"
    },
    {
      title: "jogos mortai 2",
      capa: "assets/images/capas/jogos-mortai-2.jpg",
      code: "wwnO9M0zzJo"
    },
    {
      title: "o filho do chucky",
      capa: "assets/images/capas/o-filho-de-chucky.jpg",
      code: "aeCp5MyuuH0"
    },
    {
      title: "ameaça profunda",
      capa:   "assets/images/capas/ameaça-profunda.jpg",
      code: "R4x5RO2gDBo"
    },
  ];

  listTerror.forEach((e) => createCarrocelItem(".terror", e.capa, e.title, e.code))

  const listComedia = [
    {
      title: "to ryca",
      capa: "assets/images/capas/to-ryca.jpg",
      code: "GIg8IZettZ4"
    },
    {
      title: "ricos de amor",
      capa: "assets/images/capas/ricos-de-amor.jpg",
      code: "snqqRWY_DXs"
    },
    {
      title:"e fada",
      capa: "assets/images/capas/e-fada.jpg",
      code: "VM-lplfYim8"
    },
    {
      title: "modo avião",
      capa: "assets/images/capas/modo-avião.jpg",
      code: "aywJ39-0l9I"
    },
    {
      title: "ciderela pop",
      capa: "assets/images/capas/estrela-pop.jpg",
      code: "owNYIv6CrS8"
    },
    {
      title: "esposa de aluguel",
      capa:   "assets/images/capas/esposa-de-aluguel.jpg",
      code: "CBTZili7bXA"
    },
  ];

  listComedia.forEach((e) => createCarrocelItem(".comedia", e.capa, e.title, e.code))
  
}

const createCarrocelItem = (generoClass, capa, titulo, codeVideo) =>{
  const carrocel = document.querySelector(".carrocel-content" + generoClass);
  const newDiv = document.createElement("div");
  newDiv.classList.add("carrocel-item");
  newDiv.onclick = () => pageFilm(titulo, codeVideo);

  //Adiciona o conteudo ao elemento div
  newDiv.innerHTML = `
    <img class="carrocel-capa" src="${capa}" alt="capa filme ${titulo}">
    <span class="carrocel-title">${titulo}</span>
  `
  carrocel.appendChild(newDiv);
}

const backHome = () => {
  body.innerHTML = `
    <header>
      <img class="logo" src="assets/images/netflix-logo.png">
    </header>

      <main id="main-home">
        <div class="carrocel suspense">
         <img onclick="avancarScroll('.carrocel-content.suspense', 'left')" class="carrocel-seta" src="assets/images/seta-esquerda.png">
         <div class="carrocel-content suspense"></div>
         <img onclick="avancarScroll('.carrocel-content.suspense', 'right')" class="carrocel-seta" src="assets/images/seta-direita.png">
        </div>

        <div class="carrocel terror">
         <img onclick="avancarScroll('.carrocel-content.suspense', 'left')" class="carrocel-seta" src="assets/images/seta-esquerda.png">
         <div class="carrocel-content terror"></div>
         <img onclick="avancarScroll('.carrocel-content.terror', 'right')" class="carrocel-seta" src="assets/images/seta-direita.png">
        </div>

        <div class="carrocel comedia">
         <img onclick="avancarScroll('.carrocel-content.suspense', 'left')" class="carrocel-seta" src="assets/images/seta-esquerda.png">
         <div class="carrocel-content comedia"></div>
         <img onclick="avancarScroll('.carrocel-content.comedia', 'right')" class="carrocel-seta" src="assets/images/seta-direita.png">
        </div>
      </main>
  `;

  createCarrocel()
}

createCarrocel()
