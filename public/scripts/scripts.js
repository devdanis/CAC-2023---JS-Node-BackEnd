 
 const btn = document.querySelector('.button__display-js')
 const searchForm = document.querySelector('.form-container-js')
 
 function displayHide(){
	 
	 if(searchForm.style.display == 'none'){
		
		searchForm.style.display = 'block'
	 
	 }else{
		 
		searchForm.style.display = 'none'
	 
	 }
	 
 }
 
 btn.addEventListener('click', displayHide)
 