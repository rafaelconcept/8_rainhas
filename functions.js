
//Verificar se horizontalmente existe outra rainha

function verificar_horizontal(matriz,atual_i,atual_j){    
    
    for(j_2=0;j_2<=7;j_2++){
        if (matriz[atual_i][j_2] == 1 && j_2!=atual_j){
            return false;
        }
    } 
    return true; 
}




//Verificar diagonais

function verificar_diagonalmente(matriz,atual_i,atual_j){    
    
    //Verificando diagonal principal
   
    for(i_3=0;i_3<=7;i_3++){
        for(j_3=0;j_3<=7;j_3++){
            if (i_3-j_3==atual_i-atual_j && j_3!=atual_j){
                if(matriz[i_3][j_3]==1){
                    return false;
                }
            }
        }
      }

    //Verificando diagonal secundaria

    for(i_3=0;i_3<=7;i_3++){
        for(j_3=0;j_3<=7;j_3++){
            if (i_3+j_3==atual_i+atual_j && j_3!=atual_j){
                if(matriz[i_3][j_3]==1){
                    return false;
                }
            }
        }
      }
      return true
}

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}





function encontrar(matriz, inicial, coluna){
    if( coluna > 7 || isNaN( coluna ) ) return matriz; 

        //console.log(coluna+' - '+inicial)
        for(i=inicial;i<=7;i){
            
            if(verificar_horizontal(matriz,i,coluna)){
                
                if(verificar_diagonalmente(matriz,i,coluna)){
                    
                    //console.log('marcou > ['+i+']'+'['+coluna+']')
                    //console.log('----------')
                    matriz[i][coluna]=1;
                    return coluna > 7 ? matriz : encontrar(matriz, 0, coluna+1)
                }
            }
           
    
                if(matriz[7][coluna-1]==1 && i==7){
                    matriz[7][coluna-1]=0;

                    for(k=0;k<=7;k++){
                        if(matriz[k][coluna-2]==1){
                            matriz[k][coluna-2]=0; 
                            return coluna > 7 ? matriz : encontrar(matriz, k+1, coluna-2)
                        }
                   } 

                }


           for(k=0;k<=7;k++){

                if(matriz[k][coluna-1]==1 && i==7){
                    matriz[k][coluna-1]=0; 
                    return coluna > 7 ? matriz : encontrar(matriz, k+1, coluna-1)
                }
           }
            i++;
        }
         
    return matriz
}
