const games= document.querySelector("#api-section")

async function fetchChessUser() {
	const request = await fetch(" https://api.chess.com/pub/player/dimitri_stoyan");
	return await request.json();
}

async function fetchChessStat() {
		const request = await fetch(" https://api.chess.com/pub/player/dimitri_stoyan/stats");
	return await request.json();
}

const userData = await fetchChessUser();
const userStat = await fetchChessStat();
console.log(userData, userStat);


const apiMaken = ()  => {
	games.innerHTML = "<h2>Chess stats</h2>";

	const artiekel = document.createElement("article");
	artiekel.classList.add("artiekel-kaart");

	artiekel.innerHTML = `<div class = "artiekelchess"> 
							<img src = "${userData.avatar}">
							<h3>${userData.username}</h3>
                            </div> 

							

							<div class = "artiekelchess-Content">
							<p>Rapid rating: <b>${userStat.chess_rapid.last.rating}</b></p>
							<p>Bullet rating: <b>${userStat.chess_bullet.last.rating}</b></p>
							<p>Blitz rating: <b>${userStat.chess_blitz.last.rating}</b></p>
							</div>
						
							
			`;

	games.appendChild(artiekel);
}
apiMaken();