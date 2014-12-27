$(function (){

var $list = $('#links');
var $counter = $('#counter');
var embed1 = '<iframe width="280" height="157.5" src="//www.youtube.com/embed/';
var embed2 = '" frameborder="0" allowfullscreen></iframe>';
var counter=0; 

  $.ajax({
    type: 'GET',
    url: 'http://www.reddit.com/r/leagueoflegends/.json',
    success: function(data){
      console.log(data);
      $.each(data.data.children, function(i, child){
          
            //variables needed
            var url = child.data.url; 
            var suburl; 
            var index;
            var finalembed; 
            

            
            if(child.data.domain === 'youtube.com'){
                index = url.indexOf('=');
                index++; 
                suburl = url.substring(index); 
                
                finalembed = embed1 + suburl + embed2;
                
                $list.append('<li>' + finalembed + '</li>');
                counter++;
            }

            else if(child.data.domain === 'youtu.be'){
              
              index = url.indexOf('be/');
              index+=3; 
              suburl = url.substring(index);  
              finalembed = embed1 + suburl + embed2;
              $list.append('<li>' + finalembed + '</li>');
              counter++;
              
                
            } 


            
        });
        
    }
  
  });


  
});
