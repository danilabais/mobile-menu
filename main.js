
function burgerMenu(icon) {
    icon.classList.toggle("change");
    var element = document.getElementById("menu");
    element.classList.toggle("active-menu");
  }

    var help = null
  function detectClick(element,id) {
      document.querySelectorAll('.accordeon-header')[0].classList.remove('active');
    document.querySelectorAll('.accordeon-header')[3].classList.remove('active');
     document.querySelectorAll('.accordeon-header')[4].classList.remove('active');
     if(help !== null)
     {
   document.querySelectorAll('.accordeon-body')[help].style.maxHeight = "0px"      
     }
   
  if (id == help)
  {
   
  
 document.querySelectorAll('.accordeon-body')[id].style.maxHeight = "0px"
      help = null
  }
  else
  {
        help = id
       element.classList.toggle("active");    
           let help2;
       console.log(id + " id")
       if(id == 0)
       {
           help2 = "352px"
       }
       else if(id == 1)
       {
           help2 = "128px"
       }
       else if(id == 2)
       {
           help2 = "288px"
       }
       document.querySelectorAll('.accordeon-body')[id].style.maxHeight = help2
  }
  
  
    
    console.log(element + ' ' +  id)
      
    }

  +function () {
 
    function initAccordeon () {
        var firstSectionBodyHeight = document.querySelector('.accordeon-section .accordeon-body > *').clientHeight
        document.querySelector('.accordeon-section .accordeon-body').style.maxHeight = firstSectionBodyHeight + 'px'
    }
    
   
    
    
    
    var accordeonHeaderClickHandler = function(e) {
        document.querySelectorAll('.accordeon-section').forEach(function(section) {
            section.querySelector('.accordeon-body').style.maxHeight = '0px'
        })
    
        var accordeonSection = e.target.closest('.accordeon-section')
        
        
        const currentHeight = accordeonSection.clientHeight;
        console.log(currentHeight)
        if (currentHeight !== 58 || currentHeight !== 56) {
            console.log(e)
            console.log(e.target)
            console.log(e.target.closest('.accordeon-body'))
           // e.target.closest('.accordeon-body').style.maxHeight = '0px';      
        }
        
    
        var insideElHeight = accordeonSection.querySelector('.accordeon-body > *').clientHeight
        console.log(insideElHeight)
        accordeonSection.querySelector('.accordeon-body').style.maxHeight = insideElHeight + 'px'
        console.log('test')
    }
    
    // document.querySelectorAll('.accordeon-section')
    //     .forEach(function(section) {
    //         section.addEventListener('click', accordeonHeaderClickHandler)
    //     })
    
    }()


    /////////////////////////////////////Скролл
    
    
document.querySelector('.menu-burg').classList.add('disappeared');
    window.addEventListener('scroll', function() {
        const scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      );
        let last_known_scroll_position = window.pageYOffset;
        console.log(scrollHeight + 'scroll');
        console.log(last_known_scroll_position + 'position');

          if ((last_known_scroll_position>=500) && (last_known_scroll_position<=(scrollHeight-window.innerHeight)-700)) {
            {document.querySelector('.menu-burg').classList.remove('disappeared');
            document.querySelector('.menu').classList.remove('disappeared');}

          }
          else {document.querySelector('.menu-burg').classList.add('disappeared');
            
            document.querySelector('.menu').classList.add('disappeared');
      }
        });
