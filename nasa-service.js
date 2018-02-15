function NasaService(){



this.getApod = function getApod(cb){

   $.get('https://api.nasa.gov/planetary/apod?api_key=q2b3P4mQf3Ch3cshuviDM3TqoKaeOvFrnEaV98Ci')
    .then(function(res){
        console.log(res)
        cb(res)
    })
}

this.lookUpApod = function lookUpApod(query, cb){
    $.get('https://api.nasa.gov/planetary/apod?date='+query+'&api_key=q2b3P4mQf3Ch3cshuviDM3TqoKaeOvFrnEaV98Ci')
    .then(function(res){
        cb(res)
    })
}






}