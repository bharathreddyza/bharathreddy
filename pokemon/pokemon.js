
const searchtag = document.querySelector('#btn')
 const formValue = document.getElementById('searcharea')
const appendtopage = document.querySelector('.pokemonappend')

 searchtag.addEventListener('click', doSearch)

function  doSearch(e){
        e.preventDefault()
    let inputValue = formValue.value
    console.log(inputValue)
   
    loadData(inputValue)
}
function loadData(inputValue){
    
    const  url = `http://pokeapi.co/api/v2/pokemon/${inputValue}`
    console.log(url)   
     const xhr = new XMLHttpRequest();
    xhr.open('GET',url, true)
    xhr.onload = function(){
        if(this.status == 200 ){
            
            
            var data = JSON.parse(this.responseText)
            console.log(data)
            var output = ''
            
                output += ` <div class="pokemonresult">
                <div class="row">
                    <img src="${data.sprites.front_default}" alt="">
                    <div class="col">
                        <h1>${inputValue}</h1>
                        <bt class="row">
                            <p>type:</p>
                            <button class=" btn typebox1">${data.types[0].type.name}</button>
                            <button class=" btn typebox2">${data.types[1].type.name}</button>
                        </div>
                    </div>
                </div>
                <table class="mainTable">
                     <tr >
                         <td class="singlelement" >
                       <div class="col">
                           <h2>${data.height}</h2>
                           <p>height</p>
                       </div>  
                       </td class="singlelement" >
      
                       <td>
                          <div class="col">
                              <h2>${data.weight}</h2>
                              <p>weight</p>
                          </div>  
                          </td>
      
                          <td class="singlelement" >
                              <div class="col">
                                  <h2>${data.abilities[0].ability.name} ${data.abilities[1].ability.name}</h2>
                                  <p>Abilities</p>
                              </div>  
                              </td>
                     </tr>
                     <tr >
                         <td colspan="3" style="height: 15px;"><span>stats</span> </span></td>
                     </tr>
                     <tr>
                      <td  class="singlelement">
                          <div class="col">
                              <h2>${data.stats[0]["base_stat"]}</h2>
                              <p>speed </p>
                          </div>  
                          </td>
         
                          <td  class="singlelement">
                             <div class="col" >
                                 <h2>${data.stats[1]["base_stat"]}</h2>
                                 <p>special DEFENCE</p>
                             </div>  
                             </td>
                             
                             <td  class="singlelement">
                                 <div class="col">
                                     <h2>${data.stats[2]["base_stat"]}</h2>
                                     <p>special ATTACK</p>
                                 </div>  
                                 </td>
                     </tr>
                     <tr>
                     <td class="singlelement" >
                         <div class="col">
                             <h2>${data.stats[5]["base_stat"]}</h2>
                             <p>HP </p>
                         </div>  
                         </td>
        
                         <td class="singlelement" >
                            <div class="col" >
                                <h2>${data.stats[3]["base_stat"]}</h2>
                                <p>DEFENCE</p>
                            </div>  
                            </td>
                            
                            <td class="singlelement" >
                                <div class="col">
                                    <h2>${data.stats[4]["base_stat"]}</h2>
                                    <p> ATTACK</p>
                                </div>  
                                </td>
                    </tr>
                </table>
            </div>`
            console.log(output)
    }   appendtopage.innerHTML = output
    }
    xhr.send()
}