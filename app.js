
var = new places();

function places(parent, settings){
 this.locked = false;
 this.images = [];
 this.settings = settings;
 this.parent = parent;
 this.init();
}
  
places.prototype.init = function(){
  var that = this;
  	for(var i = 0, e = this.settings.max; i < e; i++){
  
  var image = document.createElement('img');
    this.images[i] = image;
    image.value = this.settings.labels[i];
    image.alt = this.settings.labels[i];
    image.style.cursor = 'pointer';
    image.onmouseover = function(){
         
    if(that.locked){
      return;
  }
    that.set(this);
 };
           
 image.onclick = function(evnt){
   if(that.locked){
     return;
   }
 
 var eEvent = evnt || window.event;
   if(that.settings.click){
   	that.settings.click(eEvent, this.value);
 	}
 };

document.getElementById(this.parent).appendChild(image);
  }
    this.set(this.images[this.settings.min-1]);
};
  
   places.prototype.set = function(domImage){
       domImage.src = 'hawaii_sunshine.jpg';
       var next = domImage.nextSibling;
       while(next){
           next.off = true;
           next.src = 'polar_bear_glacier.jpg';
           next = next.nextSibling;
       }
       var prev = domImage.previousSibling;
       while(prev){
           prev.off = false;
           prev.src = 'star.png';
           prev = prev.previousSibling;
       }
   };
   
  places.prototype.reset = function(num){
    if(this.locked){
      return;
  }
    var index = (num) ? num : this.settings.min;
    this.set(this.images[index-1]);
 	};
  
  places.prototype.lock = function(){
    this.locked = true;
  };
  
  places.prototype.unLock = function(){
      this.locked = false;
  };