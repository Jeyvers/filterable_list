//Get the input section from html tag
let filterInput = document.querySelector('#filterInput');
// Get a list of the names available from ul id

// Add event listener to the input section
filterInput.addEventListener('keyup', filterNames);
// Put the functionality for the filter function
function filterNames(){
    // Get filter value
    let filterValue = document.querySelector
    ('#filterInput').value.toUpperCase();
   
   // Get ul id
    let namesList = document.querySelector('#names');
    // Get lis from ul
    let names = namesList.querySelectorAll('.collection-item');

    // Loop through collection names(lis)
    for(let i=0; i < names.length; i++){
        let a = names[i].getElementsByTagName('a')[0];

        // If matched
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            names[i].style.display = '';

        }else{
            names[i].style.display = 'none';
        }
    }



    // Trial 
    // names.forEach(function(name){
    //     var firstName = name.firstChild.textContent;

    //     if(firstName.toUpperCase().indexOf(text) != -1){
    //         name.style.display = 'block';
    
    //     } else {
    //         name.style.display = 'none';
    //         console.log('No results found')
    //     }
    // })

}

