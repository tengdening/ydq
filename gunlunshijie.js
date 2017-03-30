 $.fn.extend({mousewheel:function(upcall,downcall){      
    if(this[0].addEventListener){
      this[0].addEventListener("mousewheel",fn,false);
      this[0].addEventListener("DOMMousewheel",fn,false);
    }else{this[0].attachEvent("onmousewheel",fn);
    }

    function fn(e){
        var ev=e||window.event;
        if(ev.preventDefault()){
            ev.preventDefault()
        }else{
            ev.returnValue=false;} 
        var data=ev.detail||ev.wheelDelta;
        if(data==-3||data==120){
          upcall();
        }else{
          downcall();
        }
    }
}
})