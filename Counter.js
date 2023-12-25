   // Gets references to HTML elements
   let countEl = document.getElementById('count-el')
   let resetEl =document.getElementById('reset-btn')
   let saveResult = document.getElementById('save-result')

   // Initializes count variable
   let count = 0

   // Function to increment the count and update display
   function increment(){
      // Adds event listener to the "INCREMENT" button
      document.getElementById('increment-btn').addEventListener('click',function(){
      count += 1
      countEl.textContent = count
    })};
    // Calls the increment function to set up the event listener
    increment()

    // Function to save the current count and display previous entries
    function save(){
      // Adds event listener to the "SAVE" button
      document.getElementById('save-btn').addEventListener('click',function(){
      // Creates an entry with the current count
      let entry = count + ' - '
      // Adds the entry to the result and reset the count
      saveResult.textContent += entry
      countEl.textContent = 0
      count = 0
    })};
    // Calls the save function to set up the event listener
    save()

   // Function to reset the count and clear previous entries
    function reset(){
      // Adds event listener to the "RESET" button
      document.getElementById('reset-btn').addEventListener('click',function(){
      // Clears previous entries and reset the count
      saveResult.textContent = ''
      countEl.textContent = 0  
      count = 0
      entry = 0
    })};
    // Calls the reset function to set up the event listener
    reset()

 
