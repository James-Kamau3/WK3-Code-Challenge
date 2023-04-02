const buyBut = document.createElement('button');
buyBut.textContent = 'Buy Ticket';
buyBut.addEventListener('click', () =>{
    const tickSpan = document.querySelector('#tick');
    const currentTickets = parseInt(tickSpan.textContent);
    const newTickets = currentTickets - 1;
    if(newTickets >= 0){
    tickSpan.textContent = newTickets;
    }
})

fetch('http://localhost:3000/films/1')
    .then(res => res.json())
    .then(data => {
            const film = document.querySelector('#film');
            film.innerHTML += `<p><span id = 'tt' >TITLE</span> : <span id = 'tl'>${data.title}</span></p>
            <img src='${data.poster}'>
            <p><span id = 'rn' >RUNTIME</span> : <span id = 'run'>${data.runtime}</span></p>
            <p><span id = 'st' >SHOWTIME</span> : <span id = 'show'>${data.showtime}</span></p>
            <p><span id = 'at' >AVAILABLE TICKETS</span> :  <span id = 'tick'>${pop()}</span></p>`;
            function pop(){
                return data.capacity - data.tickets_sold;
            }

             film.appendChild(buyBut)
 
            body.appendChild(film);
            
        });
        
        const buttn = document.querySelector('#btn');
        const button1 = document.createElement('button');
        button1.innerHTML = `Menu`
        buttn.appendChild(button1);
        button1.addEventListener('click', (e) => {
            const header = document.createElement('h1');
            header.innerHTML = `All Movies`
            film.appendChild(header);

            fetch('http://localhost:3000/films')
            .then(res => res.json())
            .then(data => {
                const list1 = document.querySelector('#list')
                const ulFilm  = document.querySelector('ul#films');

                for(let i = 0; i < data.length; i++) {
                     ulFilm.innerHTML += `<li><span id = 'tt' >TITLE</span> : <span id = 'tl'>${data[i].title}</li>
                    <img src = '${data[i].poster}'>
                     <li><span id = 'rn' >RUNTIME</span> : <span id = 'run'>${data[i].runtime}</li>
                     <li><span id = 'at' >AVAILABLE TICKETS</span> :  <span id = 'tick'>${cap()}</li>
                    <li><span id = 'st' >SHOWTIME</span> : <span id = 'show'>${data[i].showtime}</li>
                    <li><span id = 'tt' >DESCRIPTION</span> : <span id = 'dec'>${data[i].description}</li>
    `
            function cap(){
                 return data[i].capacity - data[i].tickets_sold;
                 
         }
        }
            list1.appendChild(films);
            
        })
            .catch(error => {console.error()});

        })


        










