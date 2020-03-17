async  function corona(){

    const api = await axios.get(`https://covid19.mathdro.id/api/countries/bra/confirmed`)

    const apiResponse = api.data

    let [{ countryRegion:pais, confirmed:confirmados, deaths:mortos, active:ativos, recovered:recuperados }] = apiResponse

    
    document.querySelector('.infos h1').innerHTML = pais
    document.querySelector('.confirmed').innerHTML = confirmados
    document.querySelector('.mortos').innerHTML = mortos
    document.querySelector('.ativos').innerHTML = ativos
    document.querySelector('.recuperados').innerHTML = recuperados

    


}

corona()
    

