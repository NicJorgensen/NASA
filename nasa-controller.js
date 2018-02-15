function NasaController() {
    var nasaService = new NasaService
    var apodElem = document.getElementById('apod')
    var dateElem = document.getElementById('date')

    function drawApod(res) {
        template = `
            <h2>${res.title}</h2>
            <img src="${res.hdurl}">
            <p>${res.explanation}</p>
            `
        apodElem.innerHTML = template
       
        console.log(res)
    }

    function getApod() {
        nasaService.getApod(drawApod)
    }

    dateElem.addEventListener('change', function(event) {
        event.preventDefault();
        var query = event.target.value
        nasaService.lookUpApod(query, drawApod)
    })

    getApod()

}