//Inicia ou para o carousel de acordo com o tamanho da tela
$(document).ready(function(){
    if($(window).width() < 768){
        startCarousel();
    }else{
        $('.owl-carousel').addClass('off'); 
    }
  });

  $(window).resize(function() {
    if ( $(window).width() < 854 ) {
      startCarousel();
      
    } else {
      stopCarousel();
    }
});

function startCarousel(){
    $('#team-carousel').addClass('owl-carousel');
    $('#portfolio-carousel').addClass('owl-carousel');
    $('.owl-carousel').owlCarousel({
        items: 1,
        stagePadding: 0,
        autoWidth:false,
        nav: false
    });
    console.log("aqui");
}

    function stopCarousel() {
        var owl = $('.owl-carousel');
        owl.trigger('destroy.owl.carousel');
        owl.addClass('off');       
      };
  
//Quando clica o botão, ele recebe o tipo da imagem.
const search = (classe) =>{
//Seleciona todos os elementos que possuem a classe .port_item e .row
    const allItems = document.querySelectorAll('.port_item');
    const grids = document.querySelector('.row');
    if(classe === 'all'){
        for (let i = 0; i < allItems.length; i++) {
            allItems[i].style.display = 'block';           
        }

    }else if(classe === 'design'){
//Pega o array e procura o se ele possui a classe desejada, se sim coloca-a como block, senão esconde. 
        for (let i = 0; i < allItems.length; i++) {
            let tipo = $(allItems[i]).hasClass("design");            
            if(tipo === true){              
                allItems[i].style.display = 'block';            
            }else{
                allItems[i].style.display = 'none';
                $(allItems[i]).addClass("off");
            }           
        }

    }else if(classe === 'identity'){
        for (let i = 0; i < allItems.length; i++) {
            let tipo = $(allItems[i]).hasClass("identity");  
            if(tipo === true){
                allItems[i].style.display = 'block';
            }else{
                allItems[i].style.display = 'none';
            } 
        } 

    }else if(classe === 'photography'){      
        for (let i = 0; i < allItems.length; i++) {
            let tipo = $(allItems[i]).hasClass("photography");
            if(tipo === true){
                allItems[i].style.display = 'block';
            }else{
                allItems[i].style.display = 'none';
            }
        }

    }else{
        for (let i = 0; i < allItems.length; i++) {
            let tipo = $(allItems[i]).hasClass("illustration");
            if(tipo === true){
                allItems[i].style.display = 'block';
            }else{
                allItems[i].style.display = 'none';
            }       
        }
    }
}