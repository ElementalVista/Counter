
   let countEl = document.getElementById('count-el')
   let resetEl =document.getElementById('reset-btn')
   let saveResult = document.getElementById('save-result')

    let count = 0

   function increment(){
      document.getElementById('increment-btn').addEventListener('click',function(){
      count += 1
      countEl.textContent = count
    })};
    increment()

    function save(){
      document.getElementById('save-btn').addEventListener('click',function(){
      let entry = count + ' - '
      saveResult.textContent += entry
      countEl.textContent = 0
      count = 0
    })};
    save()

    function reset(){
      document.getElementById('reset-btn').addEventListener('click',function(){
      saveResult.textContent = ''
      countEl.textContent = 0  
      count = 0
      entry = 0
    })};
    reset()

 
