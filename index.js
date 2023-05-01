const searchBar = document.getElementById('inputvalue');
const names = document.getElementsByClassName('name');
// console.log(names);

searchBar.addEventListener('keyup', (e) => {
    let { value } = e.target;
    let querySearch = value;
    // console.log(querySearch);
    for(const name of names){
        let word = name.textContent.toLowerCase();
        if(word.includes(querySearch)){
            name.style.display = 'block';
        }else{
            name.style.display = 'none';
        }
    }
})

// let myName = 'Timothy';
// console.log(myName.includes('k'));