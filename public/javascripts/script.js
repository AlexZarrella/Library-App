document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);

document.getElementById("poke-btn").onclick = function(){

  const theID = document.getElementById('poke-input').value;

  axios.get('https://pokeapi.co/api/v2/pokemon/'+theID)
  .then((poke)=>{
      //created a div in HTML to display info from API 
      //console.log berry and check out the data structure for values
      document.getElementById('poke-info').innerHTML = `<h3>${poke.data.name}</h3>
                                                          <img src= ${poke.data.sprites.front_default}>`; 
      console.log(poke);
  })
  .catch((err)=>{
      console.log(err);
  });

}
