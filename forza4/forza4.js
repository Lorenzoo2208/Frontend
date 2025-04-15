const rows = 6;
const columns = 7;
let board;
let dispColumn = [1];

function setGame(){
    board =[];
    dispColumn = [5 ,5, 5, 5, 5, 5, 5];
    // Popolo le righe
    for(let riga = 0; riga < rows; riga++){
        let row = [];
        // Popolo ogni riga con n elementi (n = numero di colonne)
        for(let colonna = 0; colonna < columns; colonna++) {
            row.push("");
            //creo il dic che dovrà essere aggiunto nella board
            let tile = document.createElement("div");
            tile.id = "${riga.toString()}-${colonna.toString()}";
            // tile.id = riga.toString()+ "-" + colonna.toString()";
            tile.classList.add("tile");
            //TODO - Gestire il click sull'elemento
            //Aggiungo l'elemento della board
            document.getElementById("board").append(title);
            document.querySelector("#board");
            document.querySelectorAll("#borard");
        }
        //Aggiungo la riga della matrice
       board.push(row);


       /*
       0: [' ', ' ', ' ', ' ', ' ', ' ', ' ']
       1: [' ', ' ', ' ', ' ', ' ', ' ', ' ']
       2: [' ', ' ', ' ', ' ', ' ', ' ', ' ']
       3: [' ', ' ', ' ', ' ', ' ', ' ', ' ']
       4: [' ', ' ', ' ', ' ', ' ', ' ', ' ']
       5: [' ', ' ', ' ', ' ', ' ', ' ', ' ']
       */
   }
}


function setPiece(){
   if(gameOver){
       return;
   }
   /* 'this' corrisponde a 'tile' mentre 'coord' corrisponde all' 'id del tile' */
   let coord = this.id.split("-"); /* tutto questo corrisponde alla creazione di un array dove le coordinate non sono separate da un '-' ma da uno spazio ' ' */
   let r = Number(coord[0]);
   let c = Number(coord[1]);


   //Sovrascrivo la riga con quella in cui dovrebbe stare il gettone
   r = dispColumn[c];
   board[r][c] = currentPlayer;


   //Gestione della classe css per il gettone
   let tile = document.getElementById(r.toString()+"-"+c.toString());
   if(currentPlayer == playerRed){
       //Metti la classe per il gettone rosso
       tile.classList.add("red-piece");
       //adesso il giocatore attuale è il giallo
       currentPlayer = playerYellow;
   }
   else{
       //Metti la classe per il gettone giallo
       tile.classList.add("yellow-piece");
       //adesso il giocatore attuale è il rosso
       currentPlayer = playerRed;
   }
   //Aggiornamento degli indici delle righe disponibili
   dispColumn[c]= r-1;


   checkWinner();


}


function checkWinner(){
   //Check Orizzontale
   for(let r = 0; r < rows; r++){
       for(let c = 0; c < columns-3 ; c++){
           //Controllo se il tile è di un giocatore
           if(board[r][c] != ' '){
               //Se i 3 slot adiacenti sono dello stesso colore
               if( board[r][c] == board[r][c+1] && board[r][c] == board[r][c+2] && board[r][c] == board[r][c+3] ){
                   //Imposta il vincitore ed esco dal ciclo
                   setWinner(r, c);
                   return;
               }
           }
       }
   }


   //Check Verticale
   for(let r = 0; r < rows-3; r++){
       for(let c = 0; c < columns; c++){
           //Controllo se il tile è di un giocatore
           if(board[r][c] != ' '){
               //Se i 3 slot adiacenti sono dello stesso colore
               if( board[r][c] == board[r+1][c] && board[r][c] == board[r+2][c] && board[r][c] == board[r+3][c] ){
                   //Imposta il vincitore ed esco dal ciclo
                   setWinner(r, c);
                   return;
               }
           }
       }
   }


   //Check Diagonale dx
   for(let r = 0; r < rows-3; r++){
       for(let c = 0; c < columns-3; c++){
           //Controllo se il tile è di un giocatore
           if(board[r][c] != ' '){
               //Se i 3 slot adiacenti sono dello stesso colore
               if( board[r][c] == board[r+1][c+1] && board[r][c] == board[r+2][c+2] && board[r][c] == board[r+3][c+3] ){
                   //Imposta il vincitore ed esco dal ciclo
                   setWinner(r, c);
                   return;
               }
           }
       }
   }


   //Check Diagonale sx
   for(let r = 3; r < rows; r++){
       for(let c = 0; c < columns-3; c++){
           //Controllo se il tile è di un giocatore
           if(board[r][c] != ' '){
               //Se i 3 slot adiacenti sono dello stesso colore
               if( board[r][c] == board[r-1][c+1] && board[r][c] == board[r-2][c+2] && board[r][c] == board[r-3][c+3] ){
                   //Imposta il vincitore ed esco dal ciclo
                   setWinner(r, c);
                   return;
               }
           }
       }
   }
}


function setWinner(row, column){
   if(board[row][column] == playerRed ){
       alert("Vince Red");
   }
   else{
       alert("Vince Yellow");
   }
   gameOver = true;
}



    
