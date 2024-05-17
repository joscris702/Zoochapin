function Open(animal){
    window.location.href =  `${animal}.html`;
}
function OpenI(animal){
    window.location.href =  `html/${animal}.html`;
}
function MoreInfo(animal){
    if(animal == "leon"){
        window.open(`https://www.nationalgeographicla.com/tema/contenido/animales/mamiferos/felidos/grandes-felinos/leon`, '_blank');
    }
    if(animal == "cebra"){window.open(`https://www.nationalgeographicla.com/search?q=cebras`, '_blank');}
    if(animal == "jirafa"){window.open(`https://www.nationalgeographicla.com/search?q=jirafa&type=article`, '_blank');}
    if(animal == "nutria"){window.open(`https://www.ngenespanol.com/search/nutrias`, '_blank');}
    if(animal == "tortugaM"){window.open(`https://www.nationalgeographicla.com/search?q=tortugas&type=article`, '_blank');}
    if(animal == "flamenco"){window.open(`https://youtu.be/0gZkQkKmlgo`, '_blank');}
    if(animal == "help"){window.open(`https://preserve.nature.org/page/85801/donate/1?locale=es-MX&button=nature.org`, '_blank');}
    if(animal == "edit"){window.open(`https://github.com/dantrixxheron/ZOO.NET`, '_blank');}
}