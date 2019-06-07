const navBar = document.querySelector('.stick');

addEventListener('scroll', () => {

    const y = 1 + (window.scrollY || window.pageYOffset) / 150;
    if(y > 1 && y<5.2){
        navBar.style.backgroundColor = 'white';
    }
    else if(y>5.2){
        navBar.style.backgroundColor = '#2c3e50'; 
    }else{
        navBar.style.backgroundColor = 'transparent';
    }

});

const search = (classe) =>{
    const allItems = document.querySelectorAll('.port_item');
    const grids = document.querySelector('.port_grid');
    if(classe === 'all'){
        for (let i = 0; i < allItems.length; i++) {
            allItems[i].style.display = 'block';           
        }
        grids.style.gridTemplateColumns = 'repeat(autofill, 371px)';        
    }else if(classe === 'design'){
        for (let i = 0; i < allItems.length; i++) {
            if(allItems[i].className === 'port_item design'){
                allItems[i].style.display = 'block';             
            }else{
                allItems[i].style.display = 'none';
            }           
        }


    }else if(classe === 'identity'){
        for (let i = 0; i < allItems.length; i++) {
            if(allItems[i].className === 'port_item identity'){
                allItems[i].style.display = 'block';
            }else{
                allItems[i].style.display = 'none';
            } 
        } 
    }else if(classe === 'photography'){
        for (let i = 0; i < allItems.length; i++) {
            if(allItems[i].className === 'port_item photography'){
                allItems[i].style.display = 'block';
            }else{
                allItems[i].style.display = 'none';
            }
        }
    }else{
        for (let i = 0; i < allItems.length; i++) {
            if(allItems[i].className === 'port_item illustration'){
                allItems[i].style.display = 'block';
            }else{
                allItems[i].style.display = 'none';
            }       
        }
    }
    
/*
    switch(classe){
        case 'all':
            for (let i = 0; i < allItems.length; i++) {
                allItems[i].style.display = 'block';           
            }  
            break; 
            
        case 'design':
            for (let i = 0; i < allItems.length; i++) {
                if(allItems[i].className === 'port_item design'){
                    allItems[i].style.display = 'block';
                }else{
                    allItems[i].style.display = 'none';
                }
           
            }  
            break;   
    }
    */
}