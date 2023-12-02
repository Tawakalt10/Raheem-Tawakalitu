const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


      if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
        })
      }

      if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
        })
      }
     
    //====REMOVE MENU MOBILE=====//
    const navLink = document.querySelectorAll (".nav-item_link")

  const linkAction=() =>{
        //   when we click on each nav-link, we remove the show mwnu class

        navMenu.classList.remove("show-menu")
  }

  navLink.forEach(n =>n.addEventListener("click", linkAction))