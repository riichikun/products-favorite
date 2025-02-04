function addToFavorite(e){
    let svgButton = document.querySelector('.favorite svg');
    let invariable = svgButton.getAttribute('data-invariable')
    console.log(e.target.c);
    fetch('/favorite/new/' + invariable, {
        method: 'POST',
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        },
        body: new FormData(e.target.closest('form'))
    }).then((json) => console.log(json)).then(toggleFavorite(e));
}

function toggleFavorite(e) {
    let svgButton = document.querySelector('.favorite svg');
    svgButton.classList.toggle('text-secondary');
    svgButton.classList.toggle('text-primary');
}

document.querySelector('.favorite').addEventListener('click', function(e) {
    e.preventDefault();
    addToFavorite(e)
}, true);