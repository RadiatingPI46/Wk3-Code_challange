// fetch funvtion for displaying the list of movies available
fetch('http://localhost:3000/films')
  .then((response) => response.json())
  .then((data) =>{
    const movie_titles=document.getElementById("films")
    for(movies of data){
       movie_titles.innerHTML+=`
       <div>
       <li class="film item" onclick="fetch_data(${movies.id})">${movies.title}</li>
       <button onclick ="delete_movie(${movies.id})" class="rmv_btn">X</button>
       <hr>
       </div>
       `
    }
  });

//   function for deleting the movies using the button
function delete_movie(id){
    fetch(`http://localhost:3000/films/${id}`, {
        method: 'DELETE',
      })
      .then((response) => response.json())
      .then((response) =>{
        alert("Deleted successfully")
      })
}

// display for the first movie (Default)
fetch(`http://localhost:3000/films/1`,{
    method: 'GET',
  })
  .then((response) => response.json())
  .then((data) =>{
    document.getElementById("poster").innerHTML=`
        <img
          src="${data.poster}"
          alt="[MOVIE TITLE]"
        />`
    document.getElementById("title").innerHTML=`${data.title}`
    document.getElementById("runtime" ).innerHTML=`${data.runtime} minutes`
    document.getElementById("film-info").innerHTML=`${data.description}`
    document.getElementById("showtime").innerHTML=`${data.showtime}`
    const movie_tickets_remainig=document.getElementById("ticket-num")
    movie_tickets_remainig.innerHTML=`[${data.capacity-data.tickets_sold}]`
  })

//   function for changing the movie on display
function fetch_data(id){
  fetch(`http://localhost:3000/films/${id}`,{
    method: 'GET',
  })
  .then((response) => response.json())
  .then((data) =>{
    document.getElementById("poster").innerHTML=`
        <img
          src="${data.poster}"
          alt="[MOVIE TITLE]"
        />`
    document.getElementById("title").innerHTML=`${data.title}`
    document.getElementById("runtime" ).innerHTML=`${data.runtime} minutes`
    document.getElementById("film-info").innerHTML=`${data.description}`
    document.getElementById("showtime").innerHTML=`${data.showtime}`
    const movie_tickets_remainig=document.getElementById("ticket-num")
    movie_tickets_remainig.innerHTML=`[${data.capacity-data.tickets_sold}]`


  });
}

// const buy_button=document.getElementById("buy-ticket")
// buy_button.addEventListener("click", (ticket)=>{
//     console.log("button")
//     fetch(`http://localhost:3000/films/1`, {
//         method: 'PATCH',
//         body: JSON.stringify({
//             tickets_sold:28
//         }),
//         headers: {
//           'Content-type': 'application/json',
//         },
//       })
//         .then((response) => response.json())
//         .then((info) => {
            // const movie_tickets_remainig=document.getElementById("ticket-num")
            // movie_tickets_remainig.innerHTML=`[${info.capacity-info.tickets_sold}]`
        // })
    // alert("Ticket_Purchased")
    // if (movie_tickets_remainig===0){
    //     document.getElementById("buy-ticket").innerText="sold out"
    //     alert("sold_out")
    // }
// })